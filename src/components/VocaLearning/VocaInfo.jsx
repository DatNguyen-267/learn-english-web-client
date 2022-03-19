import React from 'react'
import './VocaInfo.scss'
export const VocaInfo = () => {
  return (
    <div className="learn__body-info">
      <div className="learn__body-item">
        <div className="learn__body-item-content main">Bored
          <i className="fas fa-volume-up"></i>
        </div>
        <div className="sub-info">/bɔːrd/</div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Tiếng việt</div>
        <div className="learn__body-item-content">(n) chán, buồn</div>
        <div className="learn__body-item-content">(v) nản</div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Đồng nghĩa</div>
        <div className="learn__body-item-content">abc, xyz , ypopdd, tttrrr</div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Ví dụ</div>
        <div className="learn__body-item-example">
          <i className="fas fa-volume-up"></i>
          <span>I'm bored with studying in class now,
            i'm bored with studying in class now,
            i'm bored with studying in class now,
            i'm bored with studying in class now
          </span>
        </div>
      </div>
    </div>
  )
}
