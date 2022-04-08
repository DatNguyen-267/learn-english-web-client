import React from 'react'
import './VocaTopic.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SERVER_URL } from './../../constants/index'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './../../redux/actions/index'
import { ProgressBar } from '../../util/ProgressBar/ProgressBar'

axios.defaults.withCredentials = true
export const VocaTopic = ({ data,process, index, vocaCourseId, vocaCourseName }) => {
  const token = useSelector(state => state.token)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    try {
      const checkLogin = async () => {
        try {
          const res = await axios.get(`${SERVER_URL}/user/checkLogin`, { headers: { Authorization: token } })
          console.log(res.data);
          if (res.data) {
            navigate(`/learning/voca?course-id=${vocaCourseId}&topic-id=${data._id}&voca-course-name=${vocaCourseName}`)
          }
        } catch (error) {
          console.log("isRunning");
          dispatch(actions.turn_on_popup_login())
        }
      }
      checkLogin()
    } catch (error) {

    }
  }
  return (
    <div className="col l-2-4 m-4 c-6">

      <div className="voca-topic-item" >
        {/* <div className="voca-topic-item__img"
          style="background-image: url('https://www.voca.vn/assets/file_upload/images/excited.jpg')">
        </div> */}
        <div className="voca-topic-info">
          <div className="voca-topic-name">{data.name}</div>
          {/* <div className="voca-topic-number">18 từ</div> */}
          <div className='voca-topic-progress'>
            <ProgressBar process={process} total={data.list_word.length}></ProgressBar>
          </div>
          <div className='voca-topic-overlay'>
            <button className='voca-topic-btn' onClick={handleClick}>Học ngay</button>
          </div>
        </div>
      </div>

    </div>
  )
}
