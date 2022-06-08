import React, { useCallback, useEffect, useState } from "react";
import "./VocaLearning.scss";
import { VocaInfo } from "./VocaInfo";
import QuickQuestionABCD from "../QuickQuestionABCD/QuickQuestionABCD";
import { QuickLsQuestion } from "../QuickQuestionABCD/QuickLsQuestion";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import { SERVER_URL } from "../../constants";
import { VocaLearningEnd } from "./VocaLearningEnd";

export const VocaLearning_2 = ({ topic, courseId }) => {
  // redux state
  const { speak, speakSlow } = useSelector((state) => state.speak);
  const token = useSelector((state) => state.token);
  // local state
  let [listCpn, setListCpn] = useState([]);
  let [listData, setListData] = useState([]);
  let [currentIndex, setCurrentIndex] = useState(0);
  let [isEnd, setIsEnd] = useState(false);
  let [progress, setProgress] = useState(0);
  let [isCorrect, setIsCorrect] = useState(undefined);
  console.log(topic);
  useEffect(async () => {
    renderComponent();
    if (topic) {
      // getNextAudio(topic.list_word[0].english);
      // let audio = new Audio(
      //   `https://600tuvungtoeic.com//audio/${topic.list_word[0].english}.mp3`
      // );
      // audio.addEventListener("canplaythrough", () => audio.play());
      // audio.play();
    }
  }, [topic]);
  // console.log(listCpn);
  const renderComponent = async () => {
    if (topic) {
      let newList = [];
      let newListData = [];
      let count = 0;
      topic.list_word.forEach((word, index) => {
        if (index === 0) {
          newList.push({
            type: "word",
            className: "slide-item first",
            word: word,
          });

          newListData.push({ type: "Word" });
        } else if (index % 2 !== 0) {
          newList.push({
            type: "word",
            className: "slide-item",
            word: word,
          });
          newListData.push({ type: "Word" });

          let question_1 = createQuestion(index);
          let question_2 = createQuestion(index - 1);
          newList.push({
            type: "question",
            className: "slide-item",
            question: question_2,
            word: topic.list_word[index - 1],
            index: count,
          });
          newListData.push({
            type: "Question",
            answer: question_2.answer,
            index: count,
            isCorrect: undefined,
          });
          count++;
          newList.push({
            type: "question",
            className: "slide-item",
            question: question_1,
            word: word,
            index: count,
          });
          newListData.push({
            type: "Question",
            answer: question_1.answer,
            index: count,
            isCorrect: undefined,
          });
          count++;
        } else if (index === topic.list_word.length - 1) {
          newList.push({
            type: "word",
            className: "slide-item",
            word: word,
          });
          newListData.push({ type: "Word" });
          let question_1 = createQuestion(index);
          newList.push({
            type: "question",
            className: "slide-item",
            question: question_1,
            word: topic.list_word[index],
            index: count,
          });
          newListData.push({
            type: "Question",
            answer: question_1.answer,
            index: count,
            isCorrect: undefined,
          });
          count++;
        } else {
          newList.push({
            type: "word",
            className: "slide-item",
            word: word,
          });
          newListData.push({ type: "Word" });
        }
      });
      setListCpn(newList);
      setListData(newListData);
      console.log(newList);
    }
  };
  const createQuestion = (index) => {
    console.log("Create question");
    let listRandom = [];
    while (listRandom.length !== 4) {
      let rd = Math.floor(Math.random() * topic.list_word.length);
      if (rd !== index && !listRandom.includes(rd)) {
        listRandom.push(rd);
      }
    }
    let answer = Math.floor(Math.random() * 4);
    let arr = ["a", "b", "c", "d"];
    listRandom[answer] = index;
    return {
      a: topic.list_word[listRandom[0]].meanings[0].vietnamese,
      b: topic.list_word[listRandom[1]].meanings[0].vietnamese,
      c: topic.list_word[listRandom[2]].meanings[0].vietnamese,
      d: topic.list_word[listRandom[3]].meanings[0].vietnamese,
      answer: arr[answer],
    };
  };
  const findIndexOfWord = (word) => {
    return topic.list_word.findIndex((item) => item._id === word._id);
  };
  const handleNext = async (e) => {
    if (
      listData[currentIndex].type === "Word" &&
      listCpn[currentIndex].err === undefined
    )
      setProgress(
        (progress) =>
          progress + Math.round(100 * (1 / (topic.list_word.length * 2)))
      );
    else if (
      listData[currentIndex].type === "Question" &&
      listData[currentIndex].isCorrect
    ) {
      setProgress(
        (progress) =>
          progress + Math.round(100 * (1 / (topic.list_word.length * 2)))
      );
    }
    if (currentIndex === listCpn.length - 1) {
      setIsEnd(true);
    } else {
      if (listData[currentIndex + 1].type === "Word") {
        getNextAudio(listCpn[currentIndex + 1].word.english);
      }

      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  };
  const insert = (arr, index, newItem) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index),
  ];
  const addComponent = () => {};
  const handleAnswerQ = async (e) => {
    const btn = e.currentTarget;
    const index = btn.getAttribute("data-index");
    const yourAnswer = btn.querySelector(".quick-q__answer-title").textContent;
    const indexListData = listData.findIndex((item) => item.index == index);

    if (listData[indexListData].isCorrect === undefined) {
      let answer = listData.find((item) => item.index == index).answer;
      if (answer.toUpperCase() == yourAnswer.toUpperCase()) {
        // KHI LÀM ĐÚNG
        btn.classList.add("success");
        listData[indexListData].isCorrect = true;
        setIsCorrect(true);
      } else {
        // KHI LÀM SAI
        // THAY ĐỔI GIAO DIỆN CÂU ĐÚNG SAI
        setIsCorrect(false);

        btn.classList.add("error");
        listData[indexListData].isCorrect = false;
        const allBtn = document.querySelectorAll(`[data-index="${index}"]`);
        for (let i = 0; i < allBtn.length; i++) {
          if (
            answer.toUpperCase() ===
            allBtn[i]
              .querySelector(".quick-q__answer-title")
              .textContent.toUpperCase()
          ) {
            allBtn[i].classList.add("success");
          }
          allBtn[i].addEventListener("click", (event) => {
            event.preventDefault();
          });
        }
        //
        // THÊM COMPONENT KHI TRẢ LỜI SAI
        //
        const indexOfWord = findIndexOfWord(listCpn[currentIndex].word);
        const question = createQuestion(indexOfWord);
        if (currentIndex + 1 < listCpn.length) {
          listCpn = insert(listCpn, currentIndex + 1, {
            type: "word",
            className: "slide-item",
            word: topic.list_word[indexOfWord],
            err: true,
          });
          listData = insert(listData, currentIndex + 1, {
            type: "Word",
          });
        } else {
          listCpn.push({
            type: "word",
            className: "slide-item",
            word: topic.list_word[indexOfWord],
            err: true,
          });
          listData.push({
            type: "Word",
          });
        }

        if (currentIndex + 2 < listCpn.length - 1) {
          let isInsert = false;
          for (let i = currentIndex + 2; i < listCpn.length; i++) {
            if (
              (listCpn[i].type === "word" && listCpn[i + 1].type === "word") ||
              (listCpn[i].type === "word" && listCpn[i + 1].type === "question")
            ) {
              listCpn = insert(listCpn, i + 2, {
                type: "question",
                className: "slide-item",
                question: question,
                word: topic.list_word[indexOfWord],
                index: listCpn.length,
              });
              listData = insert(listData, i + 2, {
                type: "Question",
                answer: question.answer,
                index: listData.length,
                isCorrect: undefined,
              });
              isInsert = true;
              break;
            }
          }
          if (!isInsert) {
            listCpn.push({
              type: "question",
              className: "slide-item",
              question: question,
              word: topic.list_word[indexOfWord],
              index: listCpn.length,
            });
            listData.push({
              type: "Question",
              answer: question.answer,
              index: listData.length,
              isCorrect: undefined,
            });
          }
        } else {
          listCpn.push({
            type: "question",
            className: "slide-item",
            question: question,
            word: topic.list_word[indexOfWord],
            index: listCpn.length,
          });
          listData.push({
            type: "Question",
            answer: question.answer,
            index: listData.length,
            isCorrect: undefined,
          });
        }
      }
      await getNextAudio(listCpn[currentIndex].word.english);
      await sleep(1500);
      setIsCorrect(undefined);
      handleNext();
      setListCpn([...listCpn]);
      setListData([...listData]);
    }
  };
  async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function getNextAudio(sentence) {
    // let audio = new SpeechSynthesisUtterance(sentence);
    // window.speechSynthesis.speak(audio);
    // return new Promise((resolve) => {
    //   audio.onend = resolve;
    // });
    // console.log("read: " + sentence);
    let audio = new Audio(`https://600tuvungtoeic.com//audio/${sentence}.mp3`);
    audio.play();
  }
  const handleIDontKnow = async (e) => {
    if (listData[currentIndex].isCorrect === undefined) {
      setIsCorrect(false);
      let answer = listData[currentIndex].answer;
      listData[currentIndex].isCorrect = false;
      const allBtn = document.querySelectorAll(
        `[data-index="${listData[currentIndex].index}"]`
      );
      for (let i = 0; i < allBtn.length; i++) {
        if (
          answer.toUpperCase() ===
          allBtn[i]
            .querySelector(".quick-q__answer-title")
            .textContent.toUpperCase()
        ) {
          allBtn[i].classList.add("error");
        }
        allBtn[i].addEventListener("click", (event) => {
          event.preventDefault();
        });
      }
      const indexOfWord = findIndexOfWord(listCpn[currentIndex].word);
      const question = createQuestion(indexOfWord);
      if (currentIndex + 1 < listCpn.length) {
        listCpn = insert(listCpn, currentIndex + 1, {
          type: "word",
          className: "slide-item",
          word: topic.list_word[indexOfWord],
          err: true,
        });
        listData = insert(listData, currentIndex + 1, {
          type: "Word",
        });
      } else {
        listCpn.push({
          type: "word",
          className: "slide-item",
          word: topic.list_word[indexOfWord],
          err: true,
        });
        listData.push({
          type: "Word",
        });
      }

      if (currentIndex + 2 < listCpn.length - 1) {
        let isInsert = false;
        for (let i = currentIndex + 2; i < listCpn.length; i++) {
          if (
            (listCpn[i].type === "word" && listCpn[i + 1].type === "word") ||
            (listCpn[i].type === "word" && listCpn[i + 1].type === "question")
          ) {
            listCpn = insert(listCpn, i + 2, {
              type: "question",
              className: "slide-item",
              question: question,
              word: topic.list_word[indexOfWord],
              index: listCpn.length,
            });
            listData = insert(listData, i + 2, {
              type: "Question",
              answer: question.answer,
              index: listData.length,
              isCorrect: undefined,
            });
            isInsert = true;
            break;
          }
        }
        if (!isInsert) {
          listCpn.push({
            type: "question",
            className: "slide-item",
            question: question,
            word: topic.list_word[indexOfWord],
            index: listCpn.length,
          });
          listData.push({
            type: "Question",
            answer: question.answer,
            index: listData.length,
            isCorrect: undefined,
          });
        }
      } else {
        listCpn.push({
          type: "question",
          className: "slide-item",
          question: question,
          word: topic.list_word[indexOfWord],
          index: listCpn.length,
        });
        listData.push({
          type: "Question",
          answer: question.answer,
          index: listData.length,
          isCorrect: undefined,
        });
      }
      await getNextAudio(listCpn[currentIndex].word.english);
      await sleep(1500);
      setIsCorrect(undefined);
      handleNext();
      setListCpn([...listCpn]);
      setListData([...listData]);
    }
  };
  useEffect(() => {
    if (isEnd) {
      try {
        const sendCompletedTopic = async () => {
          let req = await axios.post(
            `${SERVER_URL}/courses/voca/completedTopic`,
            {
              idTopic: topic._id,
              idVoca: courseId,
              length: topic.list_word.length,
            },
            {
              headers: { Authorization: token },
            }
          );
        };
        sendCompletedTopic();
      } catch (error) {
        console.log(error);
      }
    }
  }, [isEnd]);
  return (
    <div>
      {/* <audio
        controls=""
        src="https://600tuvungtoeic.com//audio/currently.mp3"
        id="audio_1"
      ></audio> */}
      {!isEnd && (
        <div className="learn__header">
          <div className="learn__header-pg-bar">
            <progress
              className="progress-custome"
              id="progress"
              value={progress}
              max="100"
            >
              <div className="progress-bar">
                <span>80%</span>
              </div>
            </progress>
          </div>
          <div className="info-percent">
            <span>{progress}%</span>
          </div>
        </div>
      )}
      {!isEnd && (
        <div className="learn__body">
          {/* THÔNG TIN CƠ BẢN CỦA TỪ VỰNG */}
          {/* <div className='slides'>
          <div className='slide'>
            {listCpn.map((item, index) => {
              if (item.type === "word") return (
                <div key={index} className={item.className}>
                  <VocaInfo data={item.word} err={item.err} ></VocaInfo>
                </div>)
              else if (item.type === "question") return (
                <div key={index} className={item.className}>
                  <QuickQuestionABCD
                    index={item.index}
                    question={item.question}
                    word={item.word}
                    handleAnswerQ={handleAnswerQ}></QuickQuestionABCD>
                </div>
              )
            })}
          </div>
        </div> */}
          <div className="slides" data={currentIndex}>
            {listCpn.length > 0 && listCpn[currentIndex].type === "word" && (
              <div className={listCpn[currentIndex].className}>
                <VocaInfo
                  data={listCpn[currentIndex].word}
                  err={listCpn[currentIndex].err}
                ></VocaInfo>
              </div>
            )}
            {listCpn.length > 0 && listCpn[currentIndex].type === "question" ? (
              <div className={listCpn[currentIndex].className}>
                <QuickQuestionABCD
                  index={listCpn[currentIndex].index}
                  question={listCpn[currentIndex].question}
                  word={listCpn[currentIndex].word}
                  handleAnswerQ={handleAnswerQ}
                ></QuickQuestionABCD>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* CÁC NÚT TƯƠNG TÁC */}
          <div className="learn__body-action">
            {listData.length > 0 && listData[currentIndex].type === "Word" && (
              <button
                className="btn learn__body-action-btn-next"
                onClick={handleNext}
              >
                <span>Next</span>
              </button>
            )}
            {listData.length > 0 &&
              listData[currentIndex].type === "Question" &&
              listData[currentIndex].isCorrect === undefined && (
                <button
                  className="btn learn__body-action-btn-dont-no"
                  onClick={handleIDontKnow}
                >
                  <span>Tôi không biết</span>
                </button>
              )}
            {isCorrect && (
              <button
                className="btn learn__body-action-btn-correct"
                onClick={handleIDontKnow}
              >
                <i className="fa fa-check"></i>
                <span>Chính xác!</span>
              </button>
            )}
            {isCorrect === false && (
              <button
                className="btn learn__body-action-btn-incorrect"
                onClick={handleIDontKnow}
              >
                <i className="fa fa-exclamation"></i>
              </button>
            )}
            {/* <div className='learn__body-action-btn-tool'>
            <div className='learn__body-action-btn-item'>
              <i className="fa fa-box"></i>
              <div>Lưu</div>
            </div>
          </div> */}
          </div>
        </div>
      )}

      {isEnd && (
        <VocaLearningEnd topic={topic} courseId={courseId}></VocaLearningEnd>
      )}
    </div>
  );
};
