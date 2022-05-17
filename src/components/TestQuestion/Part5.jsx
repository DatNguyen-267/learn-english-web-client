import React from "react";
import "./Part5.scss";

export const Part5 = ({ big_question, handleSelect }) => {
  return (
    <div className="part1">
      {big_question &&
        big_question.sm_questions.map((item, index) => {
          return (
            <div className="part3__qs" key={index}>
              <div className="part1__qs-title">
                <div>Question {big_question.start + index}:</div>
                <div className="part5__qs-heading">{item.content}</div>
              </div>
              <div className="part3__qs-ls">
                {["A", "B", "C", "D"].map((ans, index2) => (
                  <label
                    key={index2}
                    htmlFor={`question-${big_question.start + index}-${ans}`}
                    className="part3__qs-item"
                  >
                    <input
                      type="radio"
                      name={`question-${big_question.start + index}`}
                      id={`question-${big_question.start + index}-${ans}`}
                      data-ans={ans.toLowerCase()}
                      data-number={big_question.start + index}
                      onChange={handleSelect}
                    />
                    <strong>
                      {index2 === 0
                        ? "A"
                        : index2 === 1
                        ? "B"
                        : index2 === 2
                        ? "C"
                        : "D"}
                    </strong>
                    <div>
                      {index2 === 0
                        ? item.a
                        : index2 === 1
                        ? item.b
                        : index2 === 2
                        ? item.c
                        : item.d}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      <div className="part5__ans">
        Dr. Braun will write ........................... letters only for
        interns who master every task expected of a junior copy editor.
      </div>
    </div>
  );
};
