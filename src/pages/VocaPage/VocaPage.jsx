import React from 'react'
import { VocaTopic } from '../../components/VocaCourse/VocaTopic';
import './VocaPage.scss'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SERVER_URL } from '../../constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../redux/actions/index'

axios.defaults.withCredentials = true
export const VocaPage = () => {
  const dispatch = useDispatch()
  const voca = useSelector(state => state.voca)
  const token = useSelector(state => state.token)
  const userProcess = useSelector(state => state.userProcess)
  const { id } = useParams()

  useEffect(async () => {
    dispatch(actions.onLoading())
  }, [])
  useEffect(() => {
    if (token) {
      try {
        const fetchVocaTopic = async () => {

          const res = await axios.get(`${SERVER_URL}/courses/voca/${id}`, { headers: { Authorization: token } })
          console.log(res);
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
              <button className="btn btn-exercise">Ôn tập siêu tốc</button>
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
                  }: null}
                  vocaCourseId={voca.data._id}
                  vocaCourseName={voca.data.name}
                ></VocaTopic>)
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
