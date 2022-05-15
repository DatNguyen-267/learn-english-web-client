import React from 'react'
import './Part5.scss'


export const Part5 = () => {
  return (
    <div className='part1'>
      <div className='part1__qs-title'>
        <div>Question 1: </div>
        <div className='part5__qs-heading'>
          Dr. Braun will write ........................... letters only for interns who master every task expected of a junior copy editor.
        </div>

      </div>
      <div className='part3__qs-ls'>
        <label htmlFor="" className='part3__qs-item active' >
          <input type="radio" name="answer-question-1" id="1" />
          <strong>A</strong>
          <div>A meeting room is occupied.</div>
        </label>
        <label htmlFor="" className='part3__qs-item'>
          <input type="radio" name="answer-question-1" id="1" />
          <strong>B</strong>
          <div>A meeting room is occupied.</div>

        </label>
        <label htmlFor="" className='part3__qs-item'>
          <input type="radio" name="answer-question-1" id="1" />
          <strong>C</strong>
          <div>A meeting room is occupied.</div>

        </label>
        <label htmlFor="" className='part3__qs-item'>
          <input type="radio" name="answer-question-1" id="1" />
          <strong>D</strong>
          <div>A meeting room is occupied.</div>
        </label>
      </div>
      <div className='part5__ans'>
        Dr. Braun will write ........................... letters only for interns who master every task expected of a junior copy editor.
      </div>
    </div>
  )
}
