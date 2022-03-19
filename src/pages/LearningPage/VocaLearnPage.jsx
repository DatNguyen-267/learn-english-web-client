import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { VocaLearning } from '../../components/VocaLearning/VocaLearning'
import './VocaLearnPage.scss'
import axios from 'axios'
import {SERVER_URL} from './../../constants/index'
import * as actions from './../../redux/actions/index'

axios.defaults.withCredentials = true
export const VocaLearnPage = () => {
  const dispatch = useDispatch()
  const rootTopic = useSelector(state => state.topic)

  const search = useLocation().search
  const courseId = new URLSearchParams(search).get('course-id')
  const topicId = new URLSearchParams(search).get('topic-id')
  const vocaCourseName = new URLSearchParams(search).get('voca-course-name')

  let topic
  useEffect(async () => {
    console.log(rootTopic.data)
    if (rootTopic.data) {
      topic = await Promise.all(rootTopic.data.list_word.map(async(item, index) => {
        let data = undefined
        try {
          data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${item.english}`)
            .then((resp) => resp.json())
            .catch((error) => console.log(error))
            return {
              ...item,
              phonetic: data[0].phonetic
            }
        } catch (error) { }

      }))
      console.log(topic)
    }
  })
  useEffect(()=> {
    try {
      const getTopic = async() => {
        const res = await axios.get(`${SERVER_URL}/courses/voca/${courseId}/${topicId}`)
        dispatch(actions.getTopicSuccess(res.data))
      } 
      getTopic()
      
    } catch (error) {
      console.log(error)
    }
  }, [])
  
  return (
    <div className='voca-learning-page'>
      <header className="sub-header">
        <div className="grid wide">
          <div className="sub-header-contain">
            <div className="sub-header__left">
              <i className="fas fa-book-open"></i>
              <div className="sub-header__left-title">{vocaCourseName} - {rootTopic.data ? rootTopic.data.name : "" }</div>
            </div>
            <div className="sub-header__right">
              <div className="btn-close">✖</div>
            </div>
          </div>
        </div>
      </header>
      <div className='grid wide'>
        <div className='voca-learning-content'>
          {/* PROGRESS BAR */}
          <div className="learn__header">
            <div className="learn__header-pg-bar">
              <progress className="progress-custome" id="progress" value="32" max="100">
                <div className="progress-bar">
                  <span>80%</span>
                </div>
              </progress>
            </div>
            {/* THÔNG TIN BAO NHIÊU % */}
            <div className="info-percent">
              <span>30%</span>
            </div>
          </div>
          
          {/* PHẦN CONTENT CHÍNH */}
          <VocaLearning></VocaLearning>
          
        </div>

      </div>
    </div>
  )
}
