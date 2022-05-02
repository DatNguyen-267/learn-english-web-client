import React, { memo, useEffect, useState } from 'react'
import './QuickQuestionABCD.scss'
const QuickQuestionABCD =({ index, question, word, handleAnswerQ, quest }) => {

  useEffect(()=> {
    const allBtn = document.querySelectorAll(`.quick-q__answer`);
      for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].classList.remove("success")
        allBtn[i].classList.remove("error")
        allBtn[i].style.pointerEvents = "auto"
      }
  }, [word, quest])
  return (
    <div className='quick-q'>
      <div className="quick-q__header">
        <div className="quick-q__header">Hãy chọn nghĩa của từ sau đây</div>
      </div>
      <div className="quick-q__container">
        <div className='quick-q-question'>
          {word ? word.english :(quest ? quest : "")}
        </div>
        <div className="quick-q__options">
          <div className="quick-q__answer" data-index={index} onClick={handleAnswerQ}>
            <div className="quick-q__answer-title">A</div>
            <div className="quick-q__answer-content" >{question ? question.a : ""}</div>
          </div>
          <div className="quick-q__answer" data-index={index} onClick={handleAnswerQ}>
            <div className="quick-q__answer-title">B</div>
            <div className="quick-q__answer-content" >{question ? question.b : ""}</div>
          </div>
          <div className="quick-q__answer" data-index={index} onClick={handleAnswerQ}>
            <div className="quick-q__answer-title">C</div>
            <div className="quick-q__answer-content" >{question ? question.c : ""}</div>
          </div>
          <div className="quick-q__answer" data-index={index} onClick={handleAnswerQ}>
            <div className="quick-q__answer-title">D</div>
            <div className="quick-q__answer-content" >{question ? question.d : ""}</div>
          </div>
        </div>
      </div>
      {/* Câu trả lời */}

    </div>
  )
}

export default memo(QuickQuestionABCD)