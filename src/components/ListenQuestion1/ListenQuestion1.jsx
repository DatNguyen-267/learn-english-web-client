import React from 'react';
import ListenMinQuestion from '../ListenMinQuestion/ListenMinQuestion';
import "./ListenQuestion1.scss"
function ListenQuestion1({question, index_qs, setQuestionTrue, question_true}) {
    
    const list_min_question = question.list_min_question;
    return (
        <div class="question-1-item">
            {
                question.img ?  <div class="question-1-item__header"> <img src={question.img} alt="image"/></div>:""
            }
            <div class="question-1-item__content">
               {
                   list_min_question.map((item,index)=>{
                    return(
                        <ListenMinQuestion min_question={item} index={list_min_question.length === 1? -1:index} index_qs={index_qs} setQuestionTrue={setQuestionTrue} question_true={question_true}></ListenMinQuestion>
                    )
                   })
               }
            </div>
            {
                question.transcript ?  <div class="question-1-item__transcript"> {question.transcript}</div>:""
            }
        </div>
    );
}

export default ListenQuestion1;