import React from 'react';
import "./ListenMinQuestion.scss"
function ListenMinQuestion({min_question, index, index_qs, setQuestionTrue, question_true, toggleTranscript}) {
    const onclick=(value)=>{
        if(index == -1){
            index = index + 1
        }
       
        const questions = document.querySelectorAll('.question-1-item')
        const min_questions = questions[index_qs].querySelectorAll('.min-question')
        const answers = min_questions[index].querySelectorAll('.answers-item')
        const min_questiontitle = min_questions[index].querySelector('.min-question__title')
        min_questiontitle.querySelector('span').classList.remove("hide-content")
        
        answers.forEach(item => {
            item.lastChild.classList.remove("hide-content")
            const data = item.getAttribute('data-value')
           
            if (data!=value && data != min_question.true_answer) {
                item.classList.add("dont-choose-answer")
            }
            if(data == value && data == min_question.true_answer){
                item.classList.add("correct-answer")
                setQuestionTrue(question_true+1)
            }
            if(data == value && data != min_question.true_answer){
                item.classList.add("fail-answer")
                answers.forEach(item2=>{
                    const data2 = item2.getAttribute('data-value')
                    if(data2 == min_question.true_answer){
                        item2.classList.remove("dont-choose-answer")
                        item2.classList.add("correct-answer")
                    }
                })
                
            }
            item.querySelector('input').disabled=true
        })
        var amount_min_question_choose = 0;
        min_questions.forEach(item => {
            if(item.querySelector('input').disabled == true){
                amount_min_question_choose += 1
            }
        })
        console.log("amount_min_question_choose: ", amount_min_question_choose)
        toggleTranscript(amount_min_question_choose)
    }
    const arr = ["A","B","C","D"]
    return (
        <div class="min-question">
            <div class="min-question__title">
                Câu {index_qs+1}.{index == -1 ? '':index+1} <span className={min_question.hide_content === true? "hide-content":""}>{min_question.content}</span>
            </div>
            <div class="min-question__answers row">
                {

                    min_question.list_answer.map((item,index_min_qs)=>{
                       return(
                        <div class="col l-12 m-12 c-12">
                            <div class="answers-item" data-value={item._id}>
                                <div class="answers-item__radio" >
                                    <input type="radio" name={`radio${index_qs+1}.${index == -1 ? '':index}`} onClick={()=>onclick(item._id)}/>
                                </div>
                                <div class="answers-item__title">
                                    {arr[index_min_qs]}
                                </div>
                                <div class= {min_question.hide_answer === true?"answers-item__content hide-content":"answers-item__content"}>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                       )
                    })
                }
            </div>
        </div>
          
    );
}

export default ListenMinQuestion;