import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ListWordPage.scss'
import {SERVER_URL}  from './../../constants/index'
import { useLocation } from 'react-router-dom'

export const ListWordPage = () => {
  const [course, setCourse] = useState(undefined)
  const [listWord, setListWord] = useState(undefined)

  const search = useLocation().search
  const courseId = new URLSearchParams(search).get('course-id')
  const topicId = new URLSearchParams(search).get('topic-id')
  console.log(course);
  console.log(listWord);
  useEffect(()=> {
    try {
      const getCourse = async () => 
      {
        const res = await axios.get(`${SERVER_URL}/courses/get-course/${courseId}`)
        setCourse(res.data[0])
      }
      const getListWord = async () => {
        const res = await axios.get(`${SERVER_URL}/courses/get-topic/${topicId}`)
        setListWord(res.data[0])
      }
      getCourse()
      getListWord()
    } catch (error) {
      
    }
  }, [])
  return (
    <div className='grid wide'>
      <div className='ls-wd-pg'>
        <h2>
          600 từ vựng toeic - Contract
        </h2>
        <div className="ls-wd-pg ls-wd-pg__ls row">
          {listWord !== undefined && listWord.list_word.map((item, index)=> (
            <div className="col l-12">
            <div className="ls-wd-pg__item">
              <div className="ls-wd-pg__item-gr">
                <div style={{color: "#006ED2", fontWeight: 700, paddingRight:6}}>
                  {item.english}
                </div>
                <span style={{ color: "red" }}>/ə'gri:mənt/</span>
              </div>
              <div className="ls-wd-pg__item-gr">
                <div className='ls-wd-pg__item-sub-head'>Giải thích:</div>
                {item.definition}
              </div>
              <div className="ls-wd-pg__item-gr">
                <div className='ls-wd-pg__item-sub-head'>Nghĩa:</div>
                {item.meanings[0].vietnamese}
              </div>
              <div className="ls-wd-pg__item-audio">
                <audio src="/audio.mp3" controls />
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}
