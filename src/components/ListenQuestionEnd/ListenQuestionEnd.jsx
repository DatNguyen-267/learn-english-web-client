import React, {useEffect} from 'react';
import ListenMinQuestion from '../ListenMinQuestion/ListenMinQuestion';
import "./ListenQuestionEnd.scss"
import { useNavigate, useLocation } from 'react-router-dom';
function ListenQuestionEnd({ list_question, question_true,setQuestionTrue, ls, part_id, total_question,list_user_answer}) {
    let ls_course_id = ""
    let index_question = 0
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(() => {
        handleLoad()
    }, [])
    const handleBack = () => {
        try {
            navigate(`/practice-listen/part/${part_id}`)
            window.location.reload()
        }
        catch (error) {

        }

    }
    const handleNext = () => {
        try {
            if (ls) {
                ls.forEach(element => {
                    element.list_course.forEach(course => {
                        course.list_part.forEach(part => {
                            if (part == part_id) {
                                ls_course_id = course._id
                            }
                        })
                    })
                })
            }
            navigate(`/practice-listen/course/${ls_course_id}`)
        }
        catch (error) {

        }
    }
    const handleLoad = () => {
        var question_true_total = 0
        var list_min_question = []
        list_question.forEach((question) => {
            if (question.transcript) {
                document.getElementById(`transcript${question._id}`).style.display = "block"
            }
            question.list_min_question.forEach((min_quest) => {
                list_min_question.push(min_quest)
            })
        })
        var i = 0
        const min_questions = document.querySelectorAll('.min-question')
        console.log("min question: ", min_questions)
        console.log("list user answer: ", list_user_answer)
        // kiem tra dung sai
        min_questions.forEach(min_quest => {
            const min_questiontitle = min_quest.querySelector('.min-question__title')
            min_questiontitle.querySelector('span').classList.remove("hide-content")
            var answers = min_quest.querySelectorAll('.answers-item')
            var min_question = list_min_question[i]
            answers.forEach(item => {
                var input = item.querySelector('input')
                var user_answer = list_user_answer[i]
                item.lastChild.classList.remove("hide-content")
                // data: chua id cua cau tra loi
                const data = item.getAttribute('data-value')
                if (user_answer != data && data != min_question.true_answer) {
                    item.classList.add("dont-choose-answer")
                    answers.forEach(item2 => {
                        const data2 = item2.getAttribute('data-value')
                        if (data2 == min_question.true_answer) {
                            item2.classList.remove("dont-choose-answer")
                            item2.classList.add("correct-answer")
                        }
                    })
                }
                if (user_answer == data && data == min_question.true_answer) {
                    item.classList.add("correct-answer")
                    input.checked = true
                    question_true_total++
                    console.log("end page:", question_true_total)
                }
                if (user_answer == data && data != min_question.true_answer) {
                    input.checked = true
                    item.classList.add("fail-answer")
                    answers.forEach(item2 => {
                        const data2 = item2.getAttribute('data-value')

                        if (data2 == min_question.true_answer) {
                            item2.classList.remove("dont-choose-answer")
                            item2.classList.add("correct-answer")
                        }
                    })

                }
                item.querySelector('input').disabled = true
            })
            i++
            console.log(question_true_total)
        })
        setQuestionTrue(question_true_total)
    }
    
    return (

        <div className='lsquestion-end'>
            <div className='lsquestion-end-main-title'>
                Chúc mừng bạn đã hoàn thành
            </div>
            <div className='lsquestion-end-sub-title'>
                <span className='sub-title-total-number'>Tổng số câu: {total_question}</span><br></br>
                <span className='sub-title-correct-number'>Số câu đúng: {question_true}</span>
            </div>
            <div className='lsquestion-end-option'>
                <button onClick={handleBack} className='lsquestion-end-btn-back'>Thử lại</button >
                <button onClick={handleNext} className='lsquestion-end-btn-next'>Tiếp tục</button >
            </div>
            <div class="lsquestion-end__questions grid wide" id="slider" >
                <div className='lsquestion-end__questions__title'>
                    <span>Bài làm</span>
                </div>
                {

                    list_question.map((item, index_qs) => {
                        const question = item
                        const list_min_question = item.list_min_question;
                        index_question = list_min_question.length + index_question
                        return (
                            <div className="col l-12 m-12 c-12">
                                <div class="lsquestion-end-item">
                                    {
                                        question.img ? <div class="lsquestion-end-item__header"> <img src={require(`../../assets/img/ls-question/${question.img}`)} alt="image" /></div> : ""
                                    }
                                    <div className='lsquestion-end-item__audio'>
                                        <audio controls="block" src={(item && item.sound) ? require(`../../assets/sound/${item.sound}`) : ""}></audio>
                                    </div>
                                    <div class="lsquestion-end-item__content">
                                        {

                                            list_min_question.map((item, index) => {

                                                return (
                                                    <ListenMinQuestion min_question={item}
                                                        index={list_min_question.length === 1 ? 0 : index}
                                                        index_qs={index_question - list_min_question.length}
                                                        setQuestionTrue={setQuestionTrue}
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
                                            <div class="lsquestion-end-item__transcript" id={`transcript${question._id}`}>
                                                <div className='transcript-title'>Transcript:</div>
                                                <div className='transcript-content' dangerouslySetInnerHTML={{ __html: question.transcript }}>
                                                </div>
                                            </div>
                                            : ""
                                    }
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>

    );
}

export default ListenQuestionEnd;