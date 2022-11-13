import React from 'react';
import ListenMinQuestion from '../ListenMinQuestion/ListenMinQuestion';

import "./ListenQuestion1.scss"
function ListenQuestion1({question, index_qs, setQuestionTrue, question_true}) {
    
    const list_min_question = question.list_min_question;
    // const toggleTranscript = (value) =>{
    //     console.log("nguyen hoang nam: ", value)
    //     const questions = document.querySelectorAll('.question-1-item')
    //     const min_questions = questions[index_qs].querySelectorAll('.min-question')
    //     if(value == question.list_min_question.length){
    //         var i =0
    //         min_questions.forEach(min_quest =>{
    //             var answers = min_quest.querySelectorAll('.answers-item')
    //             var min_question=list_min_question[i]
    //             answers.forEach(item => {
    //                 var input = item.querySelector('input')
    //                 item.lastChild.classList.remove("hide-content")
    //                 const data = item.getAttribute('data-value')
    //                 // console.log(data, input.checked, min_question.true_answer)
    //                 if (input.checked != true && data != min_question.true_answer) {
    //                     item.classList.add("dont-choose-answer")
    //                 }
    //                 if(input.checked == true && data == min_question.true_answer){
    //                     item.classList.add("correct-answer")
    //                     setQuestionTrue(question_true+1)
    //                 }
    //                 if(input.checked == true && data != min_question.true_answer){
    //                     item.classList.add("fail-answer")
    //                     answers.forEach(item2=>{
    //                         const data2 = item2.getAttribute('data-value')
    //                         // console.log("data2:", data2)
    //                         if(data2 == min_question.true_answer){
    //                             item2.classList.remove("dont-choose-answer")
    //                             item2.classList.add("correct-answer")
    //                         }
    //                     })
                        
    //                 }
    //                 item.querySelector('input').disabled=true
                    
    //         })
    //         i++
    //         })
            
    //     }
    //     if(question.transcript){
            
    //         if(value == question.list_min_question.length){
    //             document.getElementById(`transcript${question._id}`).style.display="block"

    //         }
    //     }
    // }
    const img = question.img
    return (
        <div class="question-1-item">
            {   
                question.img ?  
                    <div class="question-1-item__header"> <img src={require(`../../assets/img/ls-question/${question.img}`)} alt="image"/></div>:""
            }
            <div class="question-1-item__content">
               {
                   list_min_question.map((item,index)=>{
                    return(
                        <ListenMinQuestion  key={index} 
                                            min_question={item} 
                                            index={list_min_question.length === 1? 0:index} 
                                            index_qs={index_qs-list_min_question.length} setQuestionTrue={setQuestionTrue} 
                                            question_true={question_true}
                                            // toggleTranscript={toggleTranscript}
                                            length={list_min_question.length}
                        >
                        </ListenMinQuestion>
                    )
                   })
               }
            </div>
            {
                question.transcript ?  
                    <div class="question-1-item__transcript" id={`transcript${question._id}`}>
                        <div className='transcript-title'>Transcript:</div>
                        <div className='transcript-content' dangerouslySetInnerHTML={{__html: question.transcript}}>
                        </div>
                    </div>
                    :""
            }
        </div>
    );
}

export default ListenQuestion1;