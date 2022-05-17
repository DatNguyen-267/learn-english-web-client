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

  useEffect(() => {
    console.log(exam);
    console.log(lsAns);
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
    lsAns[number - 1].useAns = ans;
    setlsAns({ ...lsAns });
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
            useAns: "",
          });
        }
        count = count + element.sm_questions.length;
      }
      tempExam.count = count;
      setExam({ ...tempExam });
      setlsAns({ ...newLsAns });
    }
  }, [exam]);
  return (
    <div className="grid wide">
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
                    <Part1
                      key={index}
                      big_question={item}
                      handleSelect={handleSelect}
                    ></Part1>
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
                    <Part2
                      key={index}
                      big_question={item}
                      handleSelect={handleSelect}
                    ></Part2>
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
                    <Part3
                      key={index}
                      big_question={item}
                      handleSelect={handleSelect}
                    ></Part3>
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
                    <Part4
                      key={index}
                      big_question={item}
                      handleSelect={handleSelect}
                    ></Part4>
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
                    <Part5
                      key={index}
                      big_question={item}
                      handleSelect={handleSelect}
                    ></Part5>
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
                    <Part6
                      key={index}
                      big_question={item}
                      handleSelect={handleSelect}
                    ></Part6>
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
                    <Part7
                      key={index}
                      big_question={item}
                      handleSelect={handleSelect}
                    ></Part7>
                  );
                }
              })}
          </div>
          <div className="dg-ts-pg__footer">
            <button>Chấm điểm</button>
          </div>
        </div>
        <div className="dg-ts-pg__right">
          <div className="dg-ts-pg__right-heading">
            <div className="dg-ts-pg__right-heading-submit">
              <i class="fa fa-check"></i> Chấm điểm
            </div>
            <div className="dg-ts-pg__right-heading-time">01 : 30 : 00</div>
          </div>
          <div className="dg-ts-pg__right-ls">
            {/* <div className="row"> */}
            {Array.apply(null, Array(150))
              .map(function (x, i) {
                return i;
              })
              .map((item, index) => (
                // <div className="" key={index}>
                <div className="dg-ts-pg__right-item">
                  <div> {item + 1}</div>
                </div>
                // </div>
              ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
