import React from 'react';
import ListenMinQuestion from '~/components/Listen/ListenMinQuestion/ListenMinQuestion';

import './ListenQuestion1.scss';
function ListenQuestion1({ question, index_qs, setQuestionTrue, question_true }) {
  const list_min_question = question.list_min_question;
  const toggleTranscript = (value) => {
    console.log('nguyen hoang nam: ', value);
    if (question.transcript) {
      if (value == question.list_min_question.length) {
        document.getElementById(`transcript${question._id}`).style.display = 'block';
      }
    }
  };
  const img = question.img;
  return (
    <div class="question-1-item">
      {question.img ? (
        <div class="question-1-item__header">
          {' '}
          <img
            src={require(`../../../assets/img/ls-question/${question.img}`)}
            alt="image"
          />
        </div>
      ) : (
        ''
      )}
      <div class="question-1-item__content">
        {list_min_question.map((item, index) => {
          return (
            <ListenMinQuestion
              min_question={item}
              index={list_min_question.length === 1 ? -1 : index}
              index_qs={index_qs}
              setQuestionTrue={setQuestionTrue}
              question_true={question_true}
              toggleTranscript={toggleTranscript}
            ></ListenMinQuestion>
          );
        })}
      </div>
      {question.transcript ? (
        <div class="question-1-item__transcript" id={`transcript${question._id}`}>
          <div className="transcript-title">Transcript:</div>
          <div
            className="transcript-content"
            dangerouslySetInnerHTML={{ __html: question.transcript }}
          ></div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ListenQuestion1;
