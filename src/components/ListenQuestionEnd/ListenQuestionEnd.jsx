import React from 'react';
import ListenMinQuestion from '../ListenMinQuestion/ListenMinQuestion';
import "./ListenQuestionEnd.scss"
import {  useNavigate, useLocation } from 'react-router-dom';
function ListenQuestionEnd({list_question, question_true, ls,  part_id}) {
    let ls_course_id =""
    let total_question = 0
    const navigate = useNavigate()
    const location = useLocation()
    const handleBack = () =>{
        try{
            navigate(`/practice-listen/part/${part_id}`)
            window.location.reload()
        }
        catch (error){

        }
       
    }
    const handleNext = () =>{
        try {
            if(ls){
                ls.forEach(element => {
                    element.list_course.forEach(course=>{
                        course.list_part.forEach(part=>{
                            if(part == part_id){
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

    if(list_question){
        list_question.map((item, index)=>{
            total_question = total_question+item.list_min_question.length;
        })
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
                <button  onClick={handleBack} className='lsquestion-end-btn-back'>Thử lại</button >
                <button onClick={handleNext} className='lsquestion-end-btn-next'>Tiếp tục</button >
            </div>
        </div>
       
    );
}

export default ListenQuestionEnd;