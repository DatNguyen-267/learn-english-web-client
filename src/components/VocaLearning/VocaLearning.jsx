import React from 'react'
import './VocaLearning.scss'
import { VocaInfo } from './VocaInfo'
import { QuickQuestionABCD } from '../QuickQuestionABCD/QuickQuestionABCD'
export const VocaLearning = () => {
  const handleNext = (e) => {
    console.log("event click")
    const firstItem = document.querySelector('.slide-item.first')
    if (!firstItem.style.marginLeft)
      firstItem.style.marginLeft = `-100%`
    else
      firstItem.style.marginLeft = `${parseInt(firstItem.style.marginLeft) - 100}%`
    // console.log(`${parseInt(firstItem.style.marginLeft) - 100}%`)
  }
  return (
    <div className="learn__body">
      {/* THÔNG TIN CƠ BẢN CỦA TỪ VỰNG */}
      <div className='slides'>
        <div className='slide'>
          <div className="slide-item first">
            <VocaInfo></VocaInfo>
          </div>
          <div className="slide-item">
            <QuickQuestionABCD></QuickQuestionABCD>
          </div>
          <div className="slide-item">
            <VocaInfo></VocaInfo>
          </div>
          <div className="slide-item">
            <VocaInfo></VocaInfo>
          </div>
        </div>
      </div>

      {/* CÁC NÚT TƯƠNG TÁC */}
      <div className='learn__body-action'>
        <button className="btn learn__body-action-btn-next" onClick={handleNext}>
          <span>Next</span>
          {/* <i className="fa fa-angle-right"></i> */}
        </button>
        <div className='learn__body-action-btn-tool'>
          <div className='learn__body-action-btn-item active'>
            <i class="fa fa-box"></i>
            {/* <i class="fa fa-box-check"></i> */}
            <div>Lưu</div>
          </div>
          <div className='learn__body-action-btn-item'>
            <i class="fa fa-box"></i>
            {/* <i class="fa fa-box-check"></i> */}
            <div>Lưu</div>
          </div>
        </div>
      </div>
    </div>
  )
}
