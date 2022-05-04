import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ListWordPage.scss'
import { SERVER_URL } from './../../constants/index'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const ListWordPage = () => {
  const [course, setCourse] = useState(undefined)
  const [listWord, setListWord] = useState(undefined)
  const navigate = useNavigate()
  const search = useLocation().search
  const courseId = new URLSearchParams(search).get('course-id')
  const topicId = new URLSearchParams(search).get('topic-id')

  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  console.log(course);
  console.log(listWord);
  useEffect(() => {

    try {
      
      const getCourse = async () => {
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
  const handelBack = () => {

    navigate(`/course/voca/${courseId}`)
  }
  return (
    <div className='ls-wd-pg'>
    <div className='grid wide'>

        <div className='ls-wd-pg__head'>
          <h2>
            600 từ vựng toeic - Contract
          </h2>
          <button className="ls-wd-pg-btn-back" onClick={handelBack}>Quay lại</button>
        </div>
        <div className="ls-wd-pg__ls row">
          {listWord !== undefined && listWord.list_word.map((item, index) => (
            <div className="col l-12">
              <div className="ls-wd-pg__item">
                <div className="ls-wd-pg__item-gr">
                  <div style={{ color: "#006ED2", fontWeight: 700, paddingRight: 6 }}>
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
                  <audio src={`https://res.cloudinary.com/drwse3wye/video/upload/v1651304473/audio/${item.audio}.mp3`} controls />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
