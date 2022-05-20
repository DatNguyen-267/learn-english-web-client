import React, { useEffect, useState } from "react";
import { Part1 } from "../../components/TestQuestion/Part1";
import { Part2 } from "../../components/TestQuestion/Part2";
import { Part3 } from "../../components/TestQuestion/Part3";
import { Part4 } from "../../components/TestQuestion/Part4";
import { Part5 } from "../../components/TestQuestion/Part5";
import { Part6 } from "../../components/TestQuestion/Part6";
import { Part7 } from "../../components/TestQuestion/Part7";
import "./DoTestPage.scss";
import axios from "axios";

import { SERVER_URL } from "./../../constants/index";
export const DoTestPage = () => {
  const [exam, setExam] = useState(undefined);
  const [lsAns, setlsAns] = useState([]);
  const [amount, setAmount] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const [showAns, setShowAns] = useState(false);
  // const [lsCheckAns, setlsCheckAns] = useState([]);

  useEffect(() => {
    // console.log(exam);
    console.log(lsAns);
    // console.log(lsAns.length);
  }, [exam, lsAns]);
  const handleSelect = (e) => {
    console.log(e.target);
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
    const getExam = async () => {
      const res = await axios.get(
        `${SERVER_URL}/exam/${"627fb2ff4d45f494e01322c8"}`
      );
      console.log(res);
      setExam({ ...res.data[0] });
    };
    getExam();
    return () => {};
  }, []);
  useEffect(() => {
    if (exam != undefined && !exam.count) {
      let tempExam = exam;
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
  const handleSubmit = () => {
    for (let i = 0; i < lsAns.length; i++) {
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

    setShowAns((prev) => !prev);
    setShowModel((prev) => !prev);
  };
  const handlePopup = () => {
    setShowModel(true);
  };
  const handleHidePopup = () => {
    setShowModel(false);
  };
  return (
    <div className="grid wide">
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
                      <Part1
                        showAns={showAns}
                        big_question={item}
                        handleSelect={handleSelect}
                        // lsCheckAns={}
                      ></Part1>
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
                      <Part2
                        big_question={item}
                        handleSelect={handleSelect}
                      ></Part2>
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
                      <Part3
                        big_question={item}
                        handleSelect={handleSelect}
                      ></Part3>
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
                      <Part4
                        big_question={item}
                        handleSelect={handleSelect}
                      ></Part4>
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
                      <Part5
                        big_question={item}
                        handleSelect={handleSelect}
                      ></Part5>
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
                      <Part6
                        big_question={item}
                        handleSelect={handleSelect}
                      ></Part6>
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
                      <Part7
                        big_question={item}
                        handleSelect={handleSelect}
                      ></Part7>
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
            <div className="dg-ts-pg__right-heading-submit">
              <i className="fa fa-check"></i> Chấm điểm
            </div>
            <div className="dg-ts-pg__right-heading-time">01 : 30 : 00</div>
          </div>
          <div className="dg-ts-pg__right-ls">
            {/* <div className="row"> */}
            {/* {amount !== 0 &&
              Array.apply(null, Array(amount))
                .map(function (x, i) {
                  return i;
                })
                .map((item, index) => (
                  // <div className="" key={index}>
                  <a
                    className="dg-ts-pg__right-item"
                    key={index}
                    href={`#target-${index + 1}`}
                  >
                    <div> {item + 1}</div>
                  </a>
                  // </div>
                ))} */}
            {lsAns.length > 0 &&
              lsAns.map((item, index) => (
                // <div className="" key={index}>
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
                // </div>
              ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
