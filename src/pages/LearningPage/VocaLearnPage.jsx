import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { VocaLearning } from '../../components/VocaLearning/VocaLearning'
import './VocaLearnPage.scss'
import axios from 'axios'
import { SERVER_URL } from './../../constants/index'
import * as actions from './../../redux/actions/index'
import { VocaLearning_2 } from '../../components/VocaLearning/VocaLearning_2'



export const VocaLearnPage = () => {
  const dispatch = useDispatch()
  const topic = useSelector(state => state.topic)

  const search = useLocation().search
  const courseId = new URLSearchParams(search).get('course-id')
  const topicId = new URLSearchParams(search).get('topic-id')
  const vocaCourseName = new URLSearchParams(search).get('voca-course-name')
  const token = useSelector(state=> state.token)

  useEffect(()=> {
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin) {
      const getToken = async() => {
        const res = await axios.get(`http://localhost:5000/user/refresh_token`, {
          withCredentials: true,
        })
        console.log("Lấy token thành công")
        dispatch(actions.getToken(res.data.access_token))
        dispatch(actions.login_success())
      }
      getToken()
    }
    console.log("bắt unloading");
    dispatch(actions.unLoadingRequest())
  }, [])
  useEffect(() => {
    console.log("get api")
    console.log(token);
    if (token) {
      try {
        const getTopic = async () => {
          let res = await axios.get(`${SERVER_URL}/courses/voca/${courseId}/${topicId}`, {
            headers: {Authorization: token}
          })
          console.log(res);
          let tempTopic = await Promise.all(res.data.list_word.map(async (item, index) => {
            let data = undefined
            try {
              data = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${item.english}`,{
                withCredentials: false,
              })
              return {
                ...item,
                phonetic: data.data[0].phonetic
              }
            } catch (error) { }
          }))
          dispatch(actions.getTopicSuccess({...res.data, list_word: tempTopic}))
        }
        getTopic()
      } catch (error) { console.log(error) }
    }
  }, [token])

  return (
    <div className='voca-learning-page'>
      <header className="sub-header">
        <div className="grid wide">
          <div className="sub-header-contain">
            <div className="sub-header__left">
              <i className="fas fa-book-open"></i>
              <div className="sub-header__left-title">
                {vocaCourseName} - {topic ? topic.name : ""}
              </div>
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
          

          {/* PHẦN CONTENT CHÍNH */}
          <VocaLearning_2 topic={topic} courseId={courseId}></VocaLearning_2>

        </div>

      </div>
    </div>
  )
}
