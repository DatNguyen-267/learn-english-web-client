import React, { useState } from 'react'
import './QuickQuestionABCD.scss'
export const QuickQuestionABCD = ({ data,dataId, handleAnswerQ }) => {
  const [isAnswer, setIsAnswer] = useState(false)
    // const btn = e.currentTarget
    // console.log(btn.getAttribute('data-answer'))
    // if (isAnswer === false) {
    //   if (btn.getAttribute('data-answer') === "false") {
    //     btn.classList.add("error")
    //     const allBtn = document.querySelectorAll(".quick-q__answer")
    //     for (let index = 0; index < allBtn.length; index++) {
    //       if (allBtn[index].getAttribute('data-answer') === "true") {
    //         allBtn[index].classList.add("success")
    //       }
    //     }
    //   }
    //   else btn.classList.add("success")
    //   setIsAnswer(true)
    //   handleAnswerQ(false)
    // }

  return (
    <div className='quick-q'>
      <div className="quick-q__header">
        <div className="quick-q__header">Hãy chọn nghĩa của từ sau đây</div>
      </div>
      <div className="quick-q__container">
        <div className='quick-q-question'>
          {data ? data.q : ""}
        </div>
        <div className="quick-q__options">
          <div className="quick-q__answer" data-answer-index={dataId} onClick={handleAnswerQ}>
            <div className="quick-q__answer-title">A</div>
            <div className="quick-q__answer-content" >{data ? data.a : ""}</div>
          </div>
          <div className="quick-q__answer" data-answer-index={dataId} onClick={handleAnswerQ}>
            <div className="quick-q__answer-title">B</div>
            <div className="quick-q__answer-content" >{data ? data.b : ""}</div>
          </div>
          <div className="quick-q__answer" data-answer-index={dataId} onClick={handleAnswerQ}>
            <div className="quick-q__answer-title">C</div>
            <div className="quick-q__answer-content" >{data ? data.c : ""}</div>
          </div>
          <div className="quick-q__answer" data-answer-index={dataId} onClick={handleAnswerQ}>
            <div className="quick-q__answer-title">D</div>
            <div className="quick-q__answer-content" >{data ? data.d : ""}</div>
          </div>
        </div>
      </div>
      {/* Câu trả lời */}

    </div>
  )
}
