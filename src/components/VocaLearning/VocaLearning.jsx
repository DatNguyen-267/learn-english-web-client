import React, { useCallback, useEffect, useState } from 'react'
import './VocaLearning.scss'
import { VocaInfo } from './VocaInfo'
import QuickQuestionABCD  from '../QuickQuestionABCD/QuickQuestionABCD'
import { QuickLsQuestion } from '../QuickQuestionABCD/QuickLsQuestion'
import { useSelector } from 'react-redux'


let initCurrentData = {
  countWord: 1,
  countQ: 0,
}
const initStack = {
  words: [],
  questions: [],
}
export const VocaLearning = () => {
  let [currentData, setCurrentData] = useState(initCurrentData)
  let [stack, setStack] = useState(initStack)
  let [show, setShow] = useState({ btnNext: true, btnSave: true })
  let [list, setList] = useState([{ type: "Word" }, { type: "Word" }, { type: "Question", isCorrect: null }])
  let [index, setIndex] = useState(0)
  let [listComponent, setListComponent] = useState([])
  let [isEnd, setIsEnd] = useState(false)
  let [process, setProcess] = useState(0)
  const rootTopic = useSelector(state => state.topic)
  const { speak, speakSlow } = useSelector(state => state.speak)


  const handleNext = (e) => {
    // console.log(currentData.countWord)
    // console.log(currentData.countQ)
    // console.log(list[index])
    if (currentData.countWord + 1 === stack.words.length &&
      currentData.countQ + 1 <= stack.questions.length) {
      console.log("Đang trong trường hợp cuối cùng")
      if (list[index].type === "Word") {
        list.push({ type: "Question", isCorrect: null })
        setList([...list])
        if (currentData.countQ + 1 < stack.questions.length) {
          setCurrentData({
            ...currentData,
            countQ: currentData.countQ + 1,
          })
          setProcess(Math.round((process + (1 / (2 * stack.words.length) * 100))))
        }
      }
      else if (list[index].type === "Question") {
        if (list[index].isCorrect) {
          if (currentData.countQ + 1 === stack.questions.length) {
            setIsEnd(!isEnd)
            setProcess(Math.round((process + (1 / (2 * stack.words.length) * 100))))
          }
          else if (currentData.countQ + 1 < stack.questions.length) {
            list.push({ type: "Question", isCorrect: null })
            setList([...list])
            setCurrentData({
              ...currentData,
              countQ: currentData.countQ + 1,
            })
            setProcess(Math.round((process + (1 / (2 * stack.words.length) * 100))))
          }
        }
        else {
          list.push({ type: "Word" })
          setList([...list])
        }
      }
    }
    else
      if (index >= 2) {
        if (list[index].type === "Word") {

          if (list[index - 1].type === "Word") {
            list.push({ type: "Question", isCorrect: null })
            setList([...list])
            setCurrentData({
              ...currentData,
              countQ: currentData.countQ + 1,
            })
            setProcess(Math.round((process + (1 / (2 * stack.words.length) * 100))))
          }
          else if (list[index - 1].type === "Question" && list[index - 1].isCorrect) {
            list.push({ type: "Word" })
            setList([...list])
            setCurrentData({
              ...currentData,
              countWord: currentData.countWord + 1,
            })
            setProcess(Math.round((process + (1 / (2 * stack.words.length) * 100))))
          }
          else if (list[index - 1].type === "Question" && !list[index - 1].isCorrect) {
            list.push({ type: "Question", isCorrect: null })
            setList([...list])
          }
        }
        else if (list[index].type === "Question") {
          if (list[index].isCorrect) {
            setProcess(Math.round((process + (1 / (2 * stack.words.length) * 100))))
            if (currentData.countQ % 2 !== 0) {
              list.push({ type: "Word" })
              setList([...list])
              setCurrentData({
                ...currentData,
                countWord: currentData.countWord + 1,
              })
            }
            else if (currentData.countQ % 2 === 0) {
              list.push({ type: "Question", isCorrect: null })
              setList([...list])
              setCurrentData({
                ...currentData,
                countQ: currentData.countQ + 1,
              })
            }
          }
          else {
            list.push({ type: "Word" })
            setList([...list])
          }
        }
      }
      else if (index < 2) {
        setProcess(Math.round((process + (1 / (2 * stack.words.length) * 100))))
      }
    // tăng index lên mỗi lần next
    setIndex(index + 1)
    // Di chuyển component tiếp theo
    const firstItem = document.querySelector('.slide-item.first')
    if (!firstItem.style.marginLeft)
      firstItem.style.marginLeft = `-100%`
    else
      firstItem.style.marginLeft = `${parseInt(firstItem.style.marginLeft) - 100}%`
  }
  const renderQuestion = () => {
    if (rootTopic.data && rootTopic.isUpdate == true) {
      rootTopic.data.list_word.forEach((element, index) => {
        let listRandom = []
        while (listRandom.length !== 4) {
          let rd = Math.floor(Math.random() * rootTopic.data.list_word.length);
          if (rd != index && !listRandom.includes(rd)) {
            listRandom.push(rd)
          }
        }
        let answer = Math.floor(Math.random() * 4);
        let arr = ['a', 'b', 'c', 'd']
        listRandom[answer] = index
        setStack({
          ...stack, questions: stack.questions.push({
            q: element.english,
            a: `${rootTopic.data.list_word[listRandom[0]].meanings[0].vietnamese}`,
            b: `${rootTopic.data.list_word[listRandom[1]].meanings[0].vietnamese}`,
            c: `${rootTopic.data.list_word[listRandom[2]].meanings[0].vietnamese}`,
            d: `${rootTopic.data.list_word[listRandom[3]].meanings[0].vietnamese}`,
            answer: arr[answer],
          })
        })
      });
    }
  }
  const renderWord = () => {
    if (rootTopic.data) {
      setStack({ ...stack, words: rootTopic.data.list_word })
    }
  }
  useEffect(() => {
    renderQuestion()
    renderWord()
    if (stack.words.length > 0 && stack.questions.length > 0) {
      listComponent.push({ component: "VocaInfo", data: stack.words[0], className: "slide-item first" })
      listComponent.push({ component: "VocaInfo", data: stack.words[1], className: "slide-item" })
      listComponent.push({ component: "QuickQuestionABCD", data: stack.questions[0], className: "slide-item" })
      setListComponent([...listComponent])

    }
    console.log("Render success");
  }, [rootTopic, rootTopic.isUpdate])

  const addComponent = () => {
    const isCorrect = list[index].isCorrect
    if (isCorrect) {
      if (list[index - 1].type === "Word") {
        if (list[index - 2].type === "Word") {
          listComponent.push({ component: "QuickQuestionABCD", data: stack.questions[currentData.countQ + 1], className: "slide-item" })
          setListComponent([...listComponent])
        }
        else if (currentData.countQ % 2 === 0) {
          listComponent.push({ component: "QuickQuestionABCD", data: stack.questions[currentData.countQ + 1], className: "slide-item" })
          setListComponent([...listComponent])

        }
        else if (currentData.countQ % 2 !== 0) {
          if (stack.words.length - currentData.countWord - 1 === 0) {
            // End
          }
          else if (stack.words.length - currentData.countWord - 1 > 1) {
            listComponent.push({ component: "VocaInfo", data: stack.words[currentData.countWord + 1], className: "slide-item" })
            listComponent.push({ component: "VocaInfo", data: stack.words[currentData.countWord + 2], className: "slide-item" })
            listComponent.push({ component: "QuickQuestionABCD", data: stack.questions[currentData.countQ + 1], className: "slide-item" })
            setListComponent([...listComponent])

          }
          else {
            listComponent.push({ component: "VocaInfo", data: stack.words[currentData.countWord + 1], className: "slide-item" })
            listComponent.push({ component: "QuickQuestionABCD", data: stack.questions[currentData.countQ + 1], className: "slide-item" })
            setListComponent([...listComponent])
          }
        }
      }
      else if (list[index - 1].type === "Question") {
        console.log("length hiện tại:" + stack.words.length - currentData.countWord - 1)
        if (stack.words.length - currentData.countWord - 1 === 0) {
          // End
        }
        else if (stack.words.length - currentData.countWord - 1 > 1) {
          listComponent.push({ component: "VocaInfo", data: stack.words[currentData.countWord + 1], className: "slide-item" })
          listComponent.push({ component: "VocaInfo", data: stack.words[currentData.countWord + 2], className: "slide-item" })
          listComponent.push({ component: "QuickQuestionABCD", data: stack.questions[currentData.countQ + 1], className: "slide-item" })
          setListComponent([...listComponent])
        }
        else {
          listComponent.push({ component: "VocaInfo", data: stack.words[currentData.countWord + 1], className: "slide-item" })
          listComponent.push({ component: "QuickQuestionABCD", data: stack.questions[currentData.countQ + 1], className: "slide-item" })
          setListComponent([...listComponent])
        }
      }
    }
    else {
      listComponent.push({ component: "VocaInfo", data: stack.words[currentData.countQ], className: "slide-item" })
      listComponent.push({ component: "QuickQuestionABCD", data: stack.questions[currentData.countQ], className: "slide-item" })
      setListComponent([...listComponent])

    }
  }

  const handleAnswerQ = (e) => {
    const btn = e.currentTarget
    const answer = stack.questions[currentData.countQ].answer.toUpperCase()
    if (answer === btn.querySelector('.quick-q__answer-title').textContent) {
      btn.classList.add("success")
      list[index].isCorrect = true
      setList([...list])
      addComponent()
    }
    else {
      btn.classList.add("error")
      const allBtn = document.querySelectorAll(`[data-answer-index="${index}"]`);
      for (let index = 0; index < allBtn.length; index++) {
        if (answer === allBtn[index].querySelector('.quick-q__answer-title').textContent) {
          allBtn[index].classList.add("success")
          break
        }
      }
      list[index].isCorrect = false
      setList([...list])
      addComponent()
    }
  }
  const handleIDontKnow = (e) => {
    const answer = stack.questions[currentData.countQ].answer.toUpperCase()
    const allBtn = document.querySelectorAll(`[data-answer-index="${index}"]`);
    for (let index = 0; index < allBtn.length; index++) {
      if (answer === allBtn[index].querySelector('.quick-q__answer-title').textContent) {
        allBtn[index].classList.add("success")
        break
      }
    }
    list[index].isCorrect = false
    setList([...list])
    addComponent()
  }
  // console.log(stack)
  // console.log(listComponent)
  // console.log(list)
  // console.log(currentData)
  // console.log(index)
  useEffect(() => {
    console.log(list)
    console.log(currentData)
    console.log(index)
    console.log(stack);
    if (index !== -1 && stack.words.length > 0) {
      if (list[index] && (list[index].type === "Word")) {
        speak.text = stack.words[currentData.countWord].english;
        speechSynthesis.speak(speak)
      }
      else if (list[index] && (list[index].type === "Question")) {
        speak.text = stack.words[currentData.countQ].english;
        speechSynthesis.speak(speak)
      }
    }
  }, [index])
  return (
    <div>
      <div className="learn__header">
        <div className="learn__header-pg-bar">
          <progress className="progress-custome" id="progress" value={process} max="100">
            <div className="progress-bar">
              <span>80%</span>
            </div>
          </progress>
        </div>
        {/* THÔNG TIN BAO NHIÊU % */}
        <div className="info-percent">
          <span>{process}%</span>
        </div>
      </div>
      {!isEnd && (
        <div className="learn__body">
          {/* THÔNG TIN CƠ BẢN CỦA TỪ VỰNG */}
          <div className='slides'>
            <div className='slide'>
              {listComponent.length > 0 &&
                listComponent.map((item, index) => (
                  <div className={item.className} key={index}>
                    {item.component === "VocaInfo" ? (<VocaInfo data={item.data}></VocaInfo>) :
                      item.component === "QuickQuestionABCD" ?
                        (<QuickQuestionABCD data={item.data} dataId={index} handleAnswerQ={handleAnswerQ}></QuickQuestionABCD>)
                        : ""
                    }
                  </div>
                ))
              }
            </div>
          </div>

          {/* CÁC NÚT TƯƠNG TÁC */}
          <div className='learn__body-action'>
            {list[index] && (list[index].type === "Word" ||
              (list[index].type === "Question" &&
                list[index].isCorrect !== null)) &&
              (<button className="btn learn__body-action-btn-next" onClick={handleNext}>
                <span>Tiếp theo</span>
              </button>)}
            {/* Button tôi không biết */}
            {list[index] && (list[index].type === "Question" && list[index].isCorrect === null) ?
              (<button className="btn learn__body-action-btn no" onClick={handleIDontKnow}>
                <span>Tôi không biết</span>
              </button>) : ""}
            {/* Button save */}
            <div className='learn__body-action-btn-tool'>
              <div className='learn__body-action-btn-item'>
                <i className="fa fa-box"></i>
                <div>Lưu</div>
              </div>
              {/* <div className='learn__body-action-btn-item active'>
              <i className="fa fa-box"></i>
              <div>Lưu ✔</div>
           </div> */}
            </div>
          </div>
        </div>
      )}

    </div>

  )
}
