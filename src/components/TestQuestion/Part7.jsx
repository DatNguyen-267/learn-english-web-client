import React from "react";
import "./Part7.scss";
export const Part7 = ({ big_question, handleSelect }) => {
  return (
    <div className="part1">
      {/* <img
        src="https://www.anhngumshoa.com/uploads/images/userfiles/2021/06/22/image.png"
        alt=""
        className="part6__img"
      /> */}
      {big_question &&
        big_question.content.map((item, index) => (
          <div
            key={index}
            className="part_content"
            dangerouslySetInnerHTML={{ __html: big_question.content[index] }}
          ></div>
        ))}

      {big_question &&
        big_question.sm_questions.map((item, index) => {
          return (
            <div
              className="part3__qs"
              key={index}
              id={index !== 0 ? `target-${big_question.start + index}` : ""}
            >
              <div className="part1__qs-title">
                <b>Question {big_question.start + index}: </b>
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
              <div className="qs-explanation" style={{ display: "none" }}>
                <b>Explanation: </b>
                <br />
                <div
                  dangerouslySetInnerHTML={{ __html: item.explanation }}
                ></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
