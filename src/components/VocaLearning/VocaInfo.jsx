import React from 'react'
import './VocaInfo.scss'
export const VocaInfo = ({ data }) => {
  
  return (
    <div className="learn__body-info">
      <div className="learn__body-item">
        <div className="learn__body-item-content main">{data ? data.english: ""}
          <i className="fas fa-volume-up"></i>
        </div>
        <div className="sub-info">/bɔːrd/</div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Tiếng việt</div>
        <div className="learn__body-item-content"> 
          ({ data? data.meanings[0].partOfSpeech: ""}) {data? data.meanings[0].vietnamese: ""}
        </div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Đồng nghĩa</div>
        <div className="learn__body-item-content">{data?data.meanings[0].synonyms: ""}</div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Ví dụ</div>
        <div className="learn__body-item-example">
          <i className="fas fa-volume-up"></i>
          <span>{data? data.example.sentense: ""}
          </span>
        </div>
      </div>
    </div>
  )
}
