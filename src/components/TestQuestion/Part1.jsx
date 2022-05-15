import React from 'react'
import './Part1.scss'

export const Part1 = () => {
  return (
    <div className='part1'>
      <div className='part1__heading'>
        <img src="https://www.anhngumshoa.com/uploads/images/resize/550x550/test/1m.jpg" alt="" />
        <audio controls src='https://www.anhngumshoa.com/uploads/sound/2020/1.mp3'></audio>
      </div>
      <div className='part1__qs'>
        <div className='part1__qs-title'>Question 1:</div>
        <div className='part1__qs-ls'>
          <label htmlFor=""  className='part1__qs-item active' >
            <input type="radio" name="answer-question-1" id="1"/>
            <strong>A</strong>
          </label>
          <label htmlFor=""  className='part1__qs-item'>
            <input type="radio" name="answer-question-1" id="1"/>
            <strong>B</strong>
          </label>
          <label htmlFor=""  className='part1__qs-item'>
            <input type="radio" name="answer-question-1" id="1"/>
            <strong>C</strong>
          </label>
          <label htmlFor=""  className='part1__qs-item'>
            <input type="radio" name="answer-question-1" id="1"/>
            <strong>D</strong>
          </label>
        </div>
      </div>
    </div>
  )
}
