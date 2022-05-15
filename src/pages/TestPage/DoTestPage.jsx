import React from 'react'
import { Part1 } from '../../components/TestQuestion/Part1'
import { Part2 } from '../../components/TestQuestion/Part2'
import { Part3 } from '../../components/TestQuestion/Part3'
import { Part4 } from '../../components/TestQuestion/Part4'
import { Part5 } from '../../components/TestQuestion/Part5'
import { Part6 } from '../../components/TestQuestion/Part6'
import { Part7 } from '../../components/TestQuestion/Part7'
import './DoTestPage.scss'
export const DoTestPage = () => {
  return (
    <div className="grid wide">
      <div className="dg-ts-pg ">
        <div className='dg-ts-pg__left'>
          <div className="dg-ts-pg__heading">Practice Full Test TOEIC</div>
          <div className='dg-ts-pg__nav'>
            <button className='dg-ts-pg__nav-item active'>Part 1</button>
            <button className='dg-ts-pg__nav-item '>Part 2</button>
            <button className='dg-ts-pg__nav-item'>Part 3</button>
            <button className='dg-ts-pg__nav-item'>Part 4</button>
            <button className='dg-ts-pg__nav-item'>Part 5</button>
            <button className='dg-ts-pg__nav-item'>Part 6</button>
            <button className='dg-ts-pg__nav-item'>Part 7</button>
          </div>
          <div className="dg-ts-pg__content">
            <div className='dg-ts-pg__content-title'>Look at the picture and listen to the sentences. Choose the sentence that best describes the picture:</div>
            {/* COMPONENT */}
            <Part7></Part7>
          </div>
        </div>
        <div className='dg-ts-pg__right'>
        </div>
      </div>
    </div>

  )
}
