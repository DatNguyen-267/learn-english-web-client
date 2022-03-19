import React from 'react'
import './QuickQuestionABCD.scss'
export const QuickQuestionABCD = () => {
  return (
    <div className='quick-q-listen'>
      <div className="quick-q-listen__header">Hãy chọn bản dịch mà bạn nghe được</div>
      <div className='quick-q-listen__container'>
        <div className="quick-q-listen__icon">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg" alt="" />
          </div>
        </div>
        <div className="quick-q-listen__options">
          <div className="quick-q-listen__answer">
            <div className="quick-q-listen__answer-title">A</div>
            <div className="quick-q-listen__answer-content">xác định</div>
          </div>
          <div className="quick-q-listen__answer error">
            <div className="quick-q-listen__answer-title">B</div>
            <div className="quick-q-listen__answer-content">bảng đề xuất</div>
          </div>
          <div className="quick-q-listen__answer success">
            <div className="quick-q-listen__answer-title">C</div>
            <div className="quick-q-listen__answer-content">đề xuất</div>
          </div>
          <div className="quick-q-listen__answer">
            <div className="quick-q-listen__answer-title">D</div>
            <div className="quick-q-listen__answer-content">sản xuất</div>
          </div>
        </div>
      </div>
    </div>
  )
}
