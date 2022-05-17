import React from "react";
import "./Part4.scss";

export const Part4 = ({ big_question, handleSelect }) => {
  return (
    <div className="part1">
      <div className="part1__heading">
        <audio
          controls
          src="https://www.anhngumshoa.com/uploads/sound/2020/1.mp3"
        ></audio>
      </div>
      {big_question &&
        big_question.sm_questions.map((item, index) => {
          return (
            <div className="part3__qs" key={index}>
              <div className="part3__qs-title">
                <div>Question {big_question.start + index}:</div>
                <span> {item.content}</span>
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
    </div>
  );
};
