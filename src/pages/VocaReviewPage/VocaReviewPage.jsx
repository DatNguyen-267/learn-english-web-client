
import './VocaReviewPage.scss'
import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import reactDom from 'react-dom'
import QuickQuestionABCD from '../../components/QuickQuestionABCD/QuickQuestionABCD'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SERVER_URL } from '../../constants'

const TIME_OUT_ONE_QUESTION = 300
const TIME_OUT_PERCENT = 3
const DELAY_NEXT_QUESTION = 1500

const VocaReviewPage = () => {
  const search = useLocation().search
  const lsTopic = new URLSearchParams(search).get('ls-id')
  const courseId = new URLSearchParams(search).get('course-id')
  const [time, setTime] = useState(TIME_OUT_ONE_QUESTION)
  const [isStart, setIsStart] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const [count, setCount] = useState(0)
  const [lsWord, setLsWord] = useState(null)
  const [lsQuestion, setLsQuestion] = useState(null)
  const myInterval = useRef(null)
  const [result, setResult] = useState({ correct: 0, incorrect: 0 })
  const navigate = useNavigate()

  // console.log(lsQuestion);
  useMemo(() => {
    // console.log(lsWord);
    // console.log(lsQuestion);
    // console.log(count);
    // console.log(isStart);
    // console.log(time);
  }, [lsWord, isStart, count, lsQuestion])
  // FUNCTION
  const fetchAllWord = async () => {
    const res = await axios.get(`${SERVER_URL}/courses/review/${lsTopic}`)
    setLsWord(swapList(res.data))
  }
  const handleNext = () => {
    setCount(count + 1)
  }
  const runTimer = () => {
    setTime((prev) => {
      if (prev === 0) {
        clearInterval(myInterval.current)
        autoCompleteQuestion()
        return TIME_OUT_ONE_QUESTION
      }
      else {
        return prev - 1
      }
    })
  }
  const autoCompleteQuestion = async () => {
    let lsBtn = []
    lsBtn = document.querySelectorAll(".quick-q__answer-title")
    lsBtn.forEach(element => {
      element.parentElement.style.pointerEvents = "none"
      if (element.textContent.toLowerCase() == lsQuestion[count].answer) {
        element.parentElement.classList.add("error")
      }
    });
    await delay(DELAY_NEXT_QUESTION)
    if (count + 1 === lsWord.length) {
      setIsStart(false)
      setIsEnd(true)
    }
    else
      setCount(prev => prev + 1)
    // setCount(prev => prev + 1)
    setResult({ ...result, incorrect: result.incorrect + 1 })
  }
  const handleAnswerQ = async (e) => {
    let btn = e.currentTarget
    const answer = btn.querySelector(".quick-q__answer-title").textContent.toLowerCase()
    if (answer === lsQuestion[count].answer) {
      btn.classList.add("success")
      setResult({ ...result, correct: result.correct + 1 })
    }
    else {
      btn.classList.add("error")
      let lsBtn = []
      lsBtn = btn.parentElement.querySelectorAll(".quick-q__answer-title")
      lsBtn.forEach(element => {
        element.parentElement.style.pointerEvents = "none"
        if (element.textContent.toLowerCase() == lsQuestion[count].answer) {
          element.parentElement.classList.add("success")
        }
      });
      setResult({ ...result, incorrect: result.incorrect + 1 })
    }
    stopTimer()
    try {
      document.querySelector("#rv-pg__audio").play();
    } catch (error) {

    }

    await delay(DELAY_NEXT_QUESTION)
    if (count + 1 === lsWord.length) {
      setIsStart(false)
      setIsEnd(true)
    }
    else
      setCount(prev => prev + 1)
  }

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const renderQuestions = () => {
    let newLsQuestion = []
    for (let index = 0; index < lsWord.length; index++) {
      newLsQuestion = [...newLsQuestion, createQuestion(index)]
    }
    setLsQuestion([...newLsQuestion])
  }
  const createQuestion = (index) => {
    let listRandom = []
    while (listRandom.length !== 4) {
      let rd = Math.floor(Math.random() * lsWord.length);
      if (rd !== index && !listRandom.includes(rd)) {
        listRandom.push(rd)
      }
    }
    let answer = Math.floor(Math.random() * 4);
    let arr = ['a', 'b', 'c', 'd']
    listRandom[answer] = index
    return {
      a: lsWord[listRandom[0]].english,
      b: lsWord[listRandom[1]].english,
      c: lsWord[listRandom[2]].english,
      d: lsWord[listRandom[3]].english,
      answer: arr[answer]
    }
  }
  const swapList = (array) => {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      const rd = Math.floor(Math.random() * (array.length))
      let temp = array[index]
      array[index] = array[rd]
      array[rd] = temp
    }
    return array
  }
  const startTimer = () => {

  }
  const stopTimer = () => {
    if (myInterval.current) clearInterval(myInterval.current)
    setTime(TIME_OUT_ONE_QUESTION)
  }
  const handleRetry = () => {
    window.location.reload()
  }
  const handleBack = () => {
    navigate(`/course/voca/${courseId}`)
  }
  // chạy timer khi đủ dữ liệu và sau mỗi lần next
  // useEffect(() => {
  //   if (lsWord && count === lsWord.length) {
  //     setIsStart(false)
  //     setIsEnd(true)
  //   }
  // }, [count])
  useEffect(() => {
    // if (lsWord && count === lsWord.length - 1) {
    //   setIsStart(false)
    //   setIsEnd(true)
    // }
    // else {
    if (isStart) {
      if (myInterval.current) clearInterval(myInterval.current)
      setTime(TIME_OUT_ONE_QUESTION)
      const newInterval = setInterval(() => {
        runTimer();
      }, 20)
      myInterval.current = newInterval
      return () => {
        clearInterval(myInterval.current)
      }
    }
    // }
  }, [isStart, count])

  // Load data về
  useEffect(() => {
    try {
      fetchAllWord()
    } catch (error) {
      console.log(error);
    }
  }, [])

  // render question
  useEffect(async () => {
    if (lsWord) {
      renderQuestions()
      setIsStart(true)
    }
  }, [lsWord])
  // ----------------------------RETURN------------------------- 
  return (
    <div className="rv-pg">
      {/* HEADER */}
      <header className="sub-header">
        <div className="grid wide">
          <div className="sub-header-contain">
            <div className="sub-header__left">
              <i className="fa fa-road"></i>
              <div className="sub-header__left-title">
                Ôn Tập Siêu Tốc
              </div>
            </div>
            <div className="sub-header__right">
              <div className="btn-close" onClick={handleBack}>✖</div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className='grid wide'>
        {!isEnd && (
          <div className="rv-pg-bd">
            {/* PROGRESS BAR */}
            <div className="rv-pg-bd__head">
              <div className='rv-pg-bd__head-status'>
                <div>Số câu: {lsWord ? lsWord.length : 0}</div>
                <div>Đúng: {result ? result.correct : 0}</div>
                <div>Sai: {result ? result.incorrect : 0}</div>
                {/* <span>Sai: {count? count : 0}</span> */}
              </div>
              <div className="rv-pg-bd__pgr-bar">
                <div className='rv-pg-bd__progress'>
                  <div className="rv-pg-bd__progress-bar" style={{ width: `${time / TIME_OUT_PERCENT}%` }}>
                  </div>
                </div>
                {/* <progress className="progress-custome" id="progress" value={time} max="TIME_OUT_ONE_QUESTION">
                <div className="progress-bar">
                  <span>80%</span>
                </div>
              </progress> */}
              </div>
            </div>
            <div className="rv-pg-bd__question">
              {lsWord && isEnd === false && lsQuestion && (<div>
                <QuickQuestionABCD
                  title="Chọn từ phù hợp với nghĩa sao đây"
                  index={count}
                  question={lsQuestion[count]}
                  quest={lsWord[count].meanings[0].vietnamese}
                  handleAnswerQ={handleAnswerQ}
                ></QuickQuestionABCD>
                <audio
                  src={`https://res.cloudinary.com/drwse3wye/video/upload/v1651304473/audio/${lsWord[count].audio}.mp3`}
                  style={{ display: 'none' }}
                  id="rv-pg__audio"></audio>
              </div>)}
            </div>
          </div>
        )}

        {isEnd && (
          <div className='rv-pg-bd__end'>
            <div className='rv-pg-bd__end-head'>Hoàn Thành!</div>
            <div className='rv-pg-bd__end-result'>{`Số câu đúng: ${result.correct}/${lsWord.length}`}</div>
            <div className='rv-pg-bd__end-lsbtn'>
              <button className='btn-retry' onClick={handleRetry}>Thử lại</button>
              <button className='btn-back' onClick={handleBack}>Quay lại</button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default VocaReviewPage