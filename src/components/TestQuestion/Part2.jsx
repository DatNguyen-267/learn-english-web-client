import React from "react";
import "./Part2.scss";

export const Part2 = ({ big_question, handleSelect }) => {
  return (
    <div className="part1">
      <div className="part2__heading">
        {/* // <audio
        //   controls
        //   src="https://www.anhngumshoa.com/uploads/sound/2020/1.mp3"
        // ></audio> */}
      </div>
      {big_question &&
        big_question.sm_questions.map((item, index) => {
          return (
            <div className="part1__qs" key={index}>
              <div className="part1__qs-title">
                <b>Question {big_question.start + index}:</b>
              </div>
              <div className="part1__heading">
                <audio
                  controls
                  src="https://www.anhngumshoa.com/uploads/sound/2020/1.mp3"
                  style={{ marginBottom: 8, marginTop: 8 }}
                ></audio>
              </div>

              <div className="part3__qs-ls">
                {["A", "B", "C"].map((ans, index2) => (
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
                      {index2 === 0 ? "A" : index2 === 1 ? "B" : "C"}
                    </strong>
                    <div style={{ display: "none" }} className="qs-explanation">
                      {index2 === 0 ? item.a : index2 === 1 ? item.b : item.c}
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
