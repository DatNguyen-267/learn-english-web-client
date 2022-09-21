import React, { Children, useEffect, useState } from "react";
import { Part1 } from "../../components/TestQuestion/Part1";
import { Part2 } from "../../components/TestQuestion/Part2";
import { Part3 } from "../../components/TestQuestion/Part3";
import { Part4 } from "../../components/TestQuestion/Part4";
import { Part5 } from "../../components/TestQuestion/Part5";
import { Part6 } from "../../components/TestQuestion/Part6";
import { Part7 } from "../../components/TestQuestion/Part7";
import { getRemainingTimeUntilMsTimestamp } from "../../util/CountdownTimer";
import "./DoTestPage.scss";
import axios from "axios";
import { SERVER_URL } from "./../../constants/index";
import dayjs from "dayjs";
import { ModelTimeOut } from "../../util/ModalTimeOut/ModalTimeOut";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart, Bar, Pie, Doughnut } from "react-chartjs-2";
import { DoughnutChart } from "../../util/Chart/DoughnutChart";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../../redux/actions/index";
import WapperQuestion from "./WapperQuestion";
import { saveQuestion, unSaveQuestion } from "../../api";
ChartJS.register(...registerables);

export const DoTestPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const token = useSelector((state) => state.token);

  const [exam, setExam] = useState(undefined);
  const [lsAns, setlsAns] = useState([]);
  const [amount, setAmount] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const [showAns, setShowAns] = useState(false);
  const [showPopUpTimeOut, setShowPopUpTimeOut] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [result, setResult] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const search = useLocation().search;
  const testId = new URLSearchParams(search).get("id-test");
  const [remainingTime, setRemainingTime] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  });
  // console.log(remainingTime);
  console.log(exam);
  useEffect(() => {
    console.log("exam", exam);
    console.log(lsAns);
    console.log(result);
  }, [exam, lsAns, result]);
  function calculateTime() {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (exam.type == "FULL TEST") {
      seconds = 22;
    } else {
      seconds = 22;
    }
    let now2 = new dayjs()
      .add(0, "hour")
      .add(0, "minute")
      .add(seconds, "second");
    return now2.unix();
  }
  useEffect(() => {
    if (exam && !showAns) {
      setStartTime(calculateTime());
      const intervalId = setInterval(() => {
        setRemainingTime((prev) => {
          const time = getRemainingTimeUntilMsTimestamp(startTime);
          if (
            time.hours == "00" &&
            time.minutes == "00" &&
            time.seconds == "00"
          ) {
            setShowPopUpTimeOut((prev) => true);
            clearInterval(intervalId);
          }
          return time;
        });
      }, 1000);
      setIntervalId((prev) => intervalId);
      return () => clearInterval(intervalId);
    }
  }, [startTime, exam]);
  const handleSelect = (e) => {
    let input = e.target;
    let number = input.getAttribute("data-number");
    let ans = input.getAttribute("data-ans");
    let listBtn = document.querySelectorAll(
      `input[name="${`question-${number}`}"]`
    );
    // console.log(listBtn);
    for (let i = 0; i < listBtn.length; i++) {
      listBtn[i].parentNode.classList.remove("active");
    }
    input.parentNode.classList.add("active");
    lsAns[number - 1].userAns = ans;
    setlsAns([...lsAns]);
  };
  useEffect(() => {
    dispatch(actions.onLoading());
    const getExam = async () => {
      const res = await axios.get(`${SERVER_URL}/exam/${testId}`, {
        headers: { Authorization: token },
      });
      setExam({ ...res.data });
    };
    getExam();
    dispatch(actions.unLoadingRequest());
    return () => {};
  }, [token]);
  useEffect(() => {
    if (exam != undefined && !exam.count && !showAns) {
      let tempExam = exam;
      console.log(tempExam);
      let count = 0;
      let newLsAns = [];
      for (let i = 0; i < tempExam.big_questions.length; i++) {
        const element = tempExam.big_questions[i];
        tempExam.big_questions[i].start = count + 1;
        tempExam.big_questions[i].end = count + element.sm_questions.length;
        const end = tempExam.big_questions[i].end;
        const start = tempExam.big_questions[i].start;

        for (let j = 1; j <= end - start + 1; j++) {
          newLsAns.push({
            ans: tempExam.big_questions[i].sm_questions[j - 1].correctAns,
            userAns: "",
          });
        }
        count = count + element.sm_questions.length;
      }
      tempExam.count = count;
      setExam({ ...tempExam });
      setlsAns([...newLsAns]);
      setAmount(newLsAns.length);
    }
  }, [exam]);
  const calResult = () => {
    //{ type: "Part1", correct: 0, total: 0 }
    let parts = [];
    for (let i = 0; i < exam.big_questions.length; i++) {
      let countCorrect = 0;
      for (
        let j = exam.big_questions[i].start;
        j <= exam.big_questions[i].end;
        j++
      ) {
        if (lsAns[j - 1].ans == lsAns[j - 1].userAns) {
          countCorrect++;
        }
      }
      console.log(
        "type:" + exam.big_questions[i].type + "correct: " + countCorrect
      );
      console.log(parts);
      const index = parts.findIndex(
        (item) => item.type == exam.big_questions[i].type
      );
      console.log("index:" + index);
      if (index !== -1) {
        parts[index] = {
          ...parts[index],
          correct: parts[index].correct + countCorrect,
          total:
            parts[index].total +
            (exam.big_questions[i].end - exam.big_questions[i].start + 1),
        };
      } else {
        parts.push({
          type: exam.big_questions[i].type,
          correct: countCorrect,
          total: exam.big_questions[i].end - exam.big_questions[i].start + 1,
        });
      }
    }
    let countTotalCorrect = 0;
    for (let i = 0; i < parts.length; i++) {
      countTotalCorrect += parts[i].correct;
    }
    setResult({ totalCorrect: countTotalCorrect, parts });
  };
  const handleSubmit = () => {
    let countCorrect = 0;
    let countIncorrect = 0;
    let countNoPick = 0;
    calResult();
    clearInterval(intervalId);
    for (let i = 0; i < lsAns.length; i++) {
      if (lsAns[i].userAns === "") {
        countNoPick++;
      } else if (lsAns[i].ans == lsAns[i].userAns) {
        countCorrect++;
      } else countIncorrect++;
      const lsInput = document.querySelectorAll(
        `input[name="question-${i + 1}"]`
      );
      for (let j = 0; j < lsInput.length; j++) {
        lsInput[j].style.pointerEvents = "none";
        lsInput[j].parentElement.style.pointerEvents = "none";
      }

      let inputChecked = null;
      for (let j = 0; j < lsInput.length; j++) {
        if (lsInput[j].checked === true) inputChecked = lsInput[j];
      }
      if (inputChecked) {
        const userAns = inputChecked.getAttribute("data-ans");
        if (lsAns[i].ans === lsAns[i].userAns) {
          inputChecked.parentElement.classList.remove("active");
          inputChecked.parentElement.classList.add("correct");
          document
            .querySelector(`#ls-nav-qs-${i + 1}`)
            .classList.remove("active");
          document
            .querySelector(`#ls-nav-qs-${i + 1}`)
            .classList.add("correct");
        } else {
          inputChecked.parentElement.classList.remove("active");
          inputChecked.parentElement.classList.add("incorrect");
          document
            .querySelector(`#question-${i + 1}-${lsAns[i].ans.toUpperCase()}`)
            .parentElement.classList.add("correct");
          document
            .querySelector(`#ls-nav-qs-${i + 1}`)
            .classList.remove("active");
          document
            .querySelector(`#ls-nav-qs-${i + 1}`)
            .classList.add("incorrect");
        }
      } else {
        document
          .querySelector(`#question-${i + 1}-${lsAns[i].ans.toUpperCase()}`)
          .parentElement.classList.add("incorrect");
        document
          .querySelector(`#ls-nav-qs-${i + 1}`)
          .classList.add("incorrect");
      }
    }
    const lsExplain = document.querySelectorAll(".qs-explanation");
    for (let i = 0; i < lsExplain.length; i++) {
      lsExplain[i].style.display = "block";
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setShowAns((prev) => true);
    setShowModel((prev) => false);
    setChartData((prev) => [countCorrect, countIncorrect + countNoPick]);
    // setResult({ correct: countCorrect, parts: parts });
  };
  const handlePopup = () => {
    setShowModel(true);
  };
  const handleHidePopup = () => {
    setShowModel(false);
  };
  const handleAcceptPopUpTimeOut = () => {
    setShowPopUpTimeOut((prev) => false);
    handleSubmit();
  };
  const handleSaveQuestion = (item) => {
    if (item.isSave) {
      const postData = unSaveQuestion({
        _idQuestion: item._id,
        _type: item.type,
        _idUser: user._id,
      })
        .then((res) => {
          const { message, idQuestion } = res.data;
          const index = exam.big_questions.findIndex(
            (item) => item._id.toString() === idQuestion.toString()
          );
          if (index >= 0) {
            exam.big_questions[index].isSave = false;
            setExam({ ...exam });
          }
        })
        .catch((error) => console.log(error));
    } else {
      const postData = saveQuestion({
        _idQuestion: item._id,
        _type: item.type,
        _idUser: user._id,
      })
        .then((res) => {
          const { message, idQuestion } = res.data;
          console.log("idQuestion", idQuestion);
          const index = exam.big_questions.findIndex(
            (item) => item._id.toString() === idQuestion.toString()
          );
          console.log("index", index);
          if (index >= 0) {
            console.log(exam);
            exam.big_questions[index].isSave = true;
            setExam({ ...exam });
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="grid wide">
      {showPopUpTimeOut && (
        <ModelTimeOut handleAccept={handleAcceptPopUpTimeOut}></ModelTimeOut>
      )}
      {showModel && (
        <div className="pop-up">
          <div className="modal">
            <div className="modal-overlay" onClick={handleHidePopup}></div>
            <div className="dg-ts-pg__modal-body modal-body">
              <div className="dg-ts-pg__modal-title">
                Bạn chắc chắn muốn nộp bài
              </div>
              <div className="dg-ts-pg__modal-option">
                <button onClick={handleHidePopup}>No</button>
                <button onClick={handleSubmit}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="dg-ts-pg ">
        <div className="dg-ts-pg__left">
          <div className="dg-ts-pg__heading">Practice Full Test TOEIC</div>
          {/* <div className="dg-ts-pg__nav">
            <button className="dg-ts-pg__nav-item active">Part 1</button>
            <button className="dg-ts-pg__nav-item ">Part 2</button>
            <button className="dg-ts-pg__nav-item">Part 3</button>
            <button className="dg-ts-pg__nav-item">Part 4</button>
            <button className="dg-ts-pg__nav-item">Part 5</button>
            <button className="dg-ts-pg__nav-item">Part 6</button>
            <button className="dg-ts-pg__nav-item">Part 7</button>
          </div> */}
          {showAns && (
            <div className="dg-ts-pg__result">
              <div className="dg-ts-pg__result-chart">
                <DoughnutChart data={chartData} options={null}></DoughnutChart>
              </div>
              <div className="dg-ts-pg__analysis">
                <div className="dg-ts-pg__analysis-group">
                  <div className="dg-ts-pg__analysis-heading">Kết quả</div>
                  <div className="dg-ts-pg__analysis-sub">
                    {chartData ? chartData[0] : ""}/{lsAns ? lsAns.length : 0}
                  </div>
                </div>
                <div className="dg-ts-pg__analysis-group">
                  <div className="dg-ts-pg__analysis-heading">
                    Chi tiết từng part
                  </div>
                  <div className="row">
                    {result &&
                      result.parts.map((item, index) => (
                        <div className="col l-4">
                          <span className="dg-ts-pg__analysis-item">
                            <span style={{ color: "#444" }}>{item.type}: </span>
                            <span style={{ color: "#3CAE28", fontWeight: 700 }}>
                              {item.correct}
                            </span>
                            <span></span>/
                            <span style={{ color: "#333", fontWeight: 700 }}>
                              {item.total}
                            </span>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="dg-ts-pg__content">
            <div className="dg-ts-pg__content-title">
              PART 1: Look at the picture and listen to the sentences. Choose
              the sentence that best describes the picture:
            </div>

            {exam &&
              exam.count &&
              exam.big_questions.map((item, index) => {
                if (item.type === "Part1") {
                  return (
                    <div key={index} id={`target-${item.start}`}>
                      <WapperQuestion
                        handleSaveQuestion={(e) => handleSaveQuestion(item)}
                        showAns={showAns}
                        isSave={item.isSave}
                      >
                        <Part1
                          showAns={showAns}
                          big_question={item}
                          handleSelect={handleSelect}
                          // lsCheckAns={}
                        ></Part1>
                      </WapperQuestion>
                    </div>
                  );
                }
              })}
            <div className="dg-ts-pg__content-title">
              Part 2: Listen to the question and the three responses. Choose the
              response that best answers the question:
            </div>
            {exam &&
              exam.count &&
              exam.big_questions.map((item, index) => {
                if (item.type === "Part2") {
                  return (
                    <div key={index} id={`target-${item.start}`}>
                      <WapperQuestion
                        handleSaveQuestion={(e) => handleSaveQuestion(item)}
                        showAns={showAns}
                        isSave={item.isSave}
                      >
                        <Part2
                          big_question={item}
                          handleSelect={handleSelect}
                        ></Part2>
                      </WapperQuestion>
                    </div>
                  );
                }
              })}
            <div className="dg-ts-pg__content-title">
              Part 3: Listen to the dialogue. Then read each question and choose
              the best answer:
            </div>
            {exam &&
              exam.count &&
              exam.big_questions.map((item, index) => {
                if (item.type === "Part3") {
                  return (
                    <div key={index} id={`target-${item.start}`}>
                      <WapperQuestion
                        handleSaveQuestion={(e) => handleSaveQuestion(item)}
                        showAns={showAns}
                        isSave={item.isSave}
                      >
                        <Part3
                          big_question={item}
                          handleSelect={handleSelect}
                        ></Part3>
                      </WapperQuestion>
                    </div>
                  );
                }
              })}
            <div className="dg-ts-pg__content-title">
              Part 4: Listen to the talk. Then read each question and choose the
              best answer:
            </div>
            {exam &&
              exam.count &&
              exam.big_questions.map((item, index) => {
                if (item.type === "Part4") {
                  return (
                    <div key={index} id={`target-${item.start}`}>
                      <WapperQuestion
                        handleSaveQuestion={(e) => handleSaveQuestion(item)}
                        showAns={showAns}
                        isSave={item.isSave}
                      >
                        <Part4
                          big_question={item}
                          handleSelect={handleSelect}
                        ></Part4>
                      </WapperQuestion>
                    </div>
                  );
                }
              })}
            <div className="dg-ts-pg__content-title">
              Part 5: Choose the word that best completes the sentence:
            </div>
            {exam &&
              exam.count &&
              exam.big_questions.map((item, index) => {
                if (item.type === "Part5") {
                  return (
                    <div key={index} id={`target-${item.start}`}>
                      <WapperQuestion
                        handleSaveQuestion={(e) => handleSaveQuestion(item)}
                        showAns={showAns}
                        isSave={item.isSave}
                      >
                        <Part5
                          big_question={item}
                          handleSelect={handleSelect}
                        ></Part5>
                      </WapperQuestion>
                    </div>
                  );
                }
              })}
            <div className="dg-ts-pg__content-title">
              Part 6: Choose the word or phrase that best completes the blanks:
            </div>
            {exam &&
              exam.count &&
              exam.big_questions.map((item, index) => {
                if (item.type === "Part6") {
                  return (
                    <div key={index} id={`target-${item.start}`}>
                      <WapperQuestion
                        handleSaveQuestion={(e) => handleSaveQuestion(item)}
                        showAns={showAns}
                        isSave={item.isSave}
                      >
                        <Part6
                          big_question={item}
                          handleSelect={handleSelect}
                        ></Part6>
                      </WapperQuestion>
                    </div>
                  );
                }
              })}
            <div className="dg-ts-pg__content-title">
              Part 7: Read the passage and choose the correct answer:
            </div>
            {exam &&
              exam.count &&
              exam.big_questions.map((item, index) => {
                if (item.type === "Part7") {
                  return (
                    <div key={index} id={`target-${item.start}`}>
                      <WapperQuestion
                        handleSaveQuestion={(e) => handleSaveQuestion(item)}
                        showAns={showAns}
                        isSave={item.isSave}
                      >
                        <Part7
                          big_question={item}
                          handleSelect={handleSelect}
                        ></Part7>
                      </WapperQuestion>
                    </div>
                  );
                }
              })}
          </div>
          <div className="dg-ts-pg__footer">
            {!showAns && <button onClick={handlePopup}>Chấm điểm</button>}
          </div>
        </div>
        <div className="dg-ts-pg__right">
          <div className="dg-ts-pg__right-heading">
            {/* <div className="dg-ts-pg__right-heading-submit">
              <i className="fa fa-check"></i> Chấm điểm
            </div> */}
            <div className="dg-ts-pg__right-heading-time">
              {remainingTime.hours}:{remainingTime.minutes}:
              {remainingTime.seconds}
            </div>
          </div>
          <div className="dg-ts-pg__right-ls">
            {lsAns.length > 0 &&
              lsAns.map((item, index) => (
                <a
                  className={
                    item.userAns !== ""
                      ? " dg-ts-pg__right-item active"
                      : " dg-ts-pg__right-item"
                  }
                  id={`ls-nav-qs-${index + 1}`}
                  key={index}
                  href={`#target-${index + 1}`}
                >
                  <div> {index + 1}</div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
