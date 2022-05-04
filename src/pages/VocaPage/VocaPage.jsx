import React from 'react'
import { VocaTopic } from '../../components/VocaCourse/VocaTopic';
import './VocaPage.scss'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SERVER_URL } from '../../constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../redux/actions/index'
import {useNavigate} from 'react-router-dom'

axios.defaults.withCredentials = true
export const VocaPage = () => {
  const dispatch = useDispatch()
  const voca = useSelector(state => state.voca)
  const token = useSelector(state => state.token)
  const userProcess = useSelector(state => state.userProcess)
  const { id } = useParams()
  const navigate = useNavigate()

  const [showReview, setshowReview] = useState(false)
  const [lsTopicPicked, setlsTopicPicked] = useState([])



  useEffect(async () => {
    dispatch(actions.onLoading())
  }, [])
  useEffect(() => {
    if (token) {
      try {
        const fetchVocaTopic = async () => {

          const res = await axios.get(`${SERVER_URL}/courses/voca/${id}`, { headers: { Authorization: token } })
          console.log(res.data);
          dispatch(actions.getVocaSuccess(res.data.vocaCourse))
          dispatch(actions.get_user_voca_process(res.data.userProcess))
          dispatch(actions.unLoadingRequest())
        }
        fetchVocaTopic();
      } catch (error) {
        console.log(error)
      }
    }
    else {
      try {
        const fetchVocaTopic = async () => {
          const res = await axios.get(`${SERVER_URL}/courses/voca/${id}`)
          dispatch(actions.getVocaSuccess(res.data))
          dispatch(actions.unLoadingRequest())
        }
        fetchVocaTopic();
      } catch (error) {
        console.log(error)
      }
    }
  }, [token])

  const handleShowReview = () => {
    setshowReview(true)
  }
  const handleHideReview = () => {
    setshowReview(false)
  }
  const handleChecked = (e) => {
    console.log(e.target);
    
    const id = e.target.getAttribute("id")
    const isChecked = e.target.checked
    const isExists = lsTopicPicked.includes(id)
    console.log(id);
    console.log(isExists);
    console.log(isChecked);
    let newLsTopicPicked = lsTopicPicked

    if (isChecked && !isExists) {
      setlsTopicPicked([...lsTopicPicked, id])
    }
    else {
      newLsTopicPicked = newLsTopicPicked.filter(item => item != id)
      setlsTopicPicked(newLsTopicPicked)
    }
  }

  const handleAccept = () => {
    navigate(`/voca-review?ls-id=${lsTopicPicked.join("-")}&course-id=${id}`)
  }
  return (
    <div className="grid wide">
      <div className="voca-page">
        <div className="voca-heading">
          <div className="voca-header">
            <div className="voca-info">
              <div className="voca-info__title">
                <h2>{voca.data != undefined ? voca.data.name : ""}</h2>
              </div>
              <div className="voca-info__description">Cung cấp 600 từ vựng thông dụng trong các đề thi toeic</div>
              {/* <button className="btn btn-register">Đăng ký</button> */}
            </div>
            <div className="feature">
              <button className="btn btn-exercise" onClick={handleShowReview}>Ôn tập siêu tốc</button>
            </div>
          </div>
        </div>
        <div className="base__group">
          <div className="base__group-title">Danh sách topic</div>
          <div className="topic-list">
            <div className="row">

              {userProcess.voca !== null && voca.data != undefined && voca.data.list_topic.map((item, index) => {
                let tempUserProcess = userProcess.voca.list_topic
                  .find((item2, index2) => (item2.id_topic === item._id))
                // console.log(tempUserProcess);
                return (<VocaTopic key={index} index={index} data={item}
                  process={tempUserProcess ? {
                    process: tempUserProcess.process,
                    isSuccess: tempUserProcess.isSuccess
                  } : null}
                  vocaCourseId={voca.data._id}
                  vocaCourseName={voca.data.name}
                ></VocaTopic>)
              })}
              {userProcess.voca === null && voca.data !== undefined &&
                voca.data.list_topic.map((item, index) => {
                  return (<VocaTopic
                    process={null}
                    key={index}
                    index={index}
                    data={item}
                    vocaCourseId={voca.data._id}
                    vocaCourseName={voca.data.name}
                  ></VocaTopic>)
                })
              }
            </div>
          </div>
        </div>

        {/* POP UP REVIEW */}
        {showReview &&
          <div className='voca-page-pu'>
            <div className="modal">
              <div className="modal-overlay" onClick={handleHideReview}></div>
              <div className="modal-body">
                <div className='voca-review '>
                  <div className="voca-review__header">
                    <h2>Chọn topic bạn muốn ôn</h2>
                  </div>
                  <div className="voca-review__body">
                  {/*  LOAD DANH SACH TOPIC */}
                    <div className="voca-review__ls row">
                      {voca.data && voca.data.list_topic.map((item, index) => (
                        <div className='col l-3 m-4 c-12' key={index}>
                          <label className="voca-review__ls-item" htmlFor={item._id}>
                            <div className="voca-review__ls-item-name" >
                              {item.name}
                            </div>
                            <div className="voca-review__ls-item-checked">
                              <input type="checkbox" id={item._id} onChange={handleChecked}/>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>


                  </div>
                  <div className="voca-review__footer">
                    <button onClick={handleAccept}>Xác nhận</button>
                  </div>
                </div>
              </div>
            </div>
          </div>}

      </div>
    </div>
  );
}
