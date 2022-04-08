import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ErrMsg } from '../../util/Notify/Notification'
import speak from '../../util/speech'
import './VocaInfo.scss'
export const VocaInfo = ({ data , err}) => {
  const { speak, speakSlow } = useSelector(state => state.speak)
  const handleSpeech = () => {
    speak.text = data.english;
    speechSynthesis.speak(speak)
  }
  const handleSpeechEx = () => {
    speakSlow.text = data.example.sentense;
    speechSynthesis.speak(speakSlow)
  }
  return (
    <div className="learn__body-info">
      {err === true && <div className='learn__body-info-errMsg'>
        Bạn trả lời sai từ này
        </div>}
      <div className="learn__body-item">
        <div className="learn__body-item-content main">{data ? data.english : ""}
          <i className="fas fa-volume-up" onClick={handleSpeech}></i>
        </div>
        <div className="sub-info">/bɔːrd/</div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Tiếng việt</div>
        <div className="learn__body-item-content">
          ({data ? data.meanings[0].partOfSpeech : ""}) {data ? data.meanings[0].vietnamese : ""}
        </div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Đồng nghĩa</div>
        <div className="learn__body-item-content">{data ? data.meanings[0].synonyms : ""}</div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Ví dụ</div>
        <div className="learn__body-item-example">
          <i className="fas fa-volume-up" onClick={handleSpeechEx}></i>
          <span>{data ? data.example.sentense : ""}
          </span>
        </div>
      </div>
    </div>
  )
}
