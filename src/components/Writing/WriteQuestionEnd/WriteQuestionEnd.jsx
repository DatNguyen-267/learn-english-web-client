import React, { useEffect, useState } from 'react';
import "./WriteQuestionEnd.scss"
import VocaTranscript from '../VocaTranscript';
import { useNavigate} from 'react-router-dom';
import WrEnd1 from './WrEnd1';
import WrEnd2 from './WrEnd2';
import WrEnd3 from './WrEnd3';

function WriteQuestionEnd({ name, part, id, total_question, listword, listQuestion, listRecord }) {
    
    const navigate = useNavigate()
    useEffect(() => {

    }, [])
    const handleBack = () => {
        try {
            navigate(`/writing/part/${name}/${id}`)
            window.location.reload()
        }
        catch (error) {

        }

    }
    const handleNext = () => {
        try {
            navigate(`/writing/${part}`)
        }
        catch (error) {

        }
    }

    return (
        <div className='wrquestion-end'>
            <div className='wrquestion-end-main-title'>
                Chúc mừng bạn đã hoàn thành
            </div>
            <div className='wrquestion-end-sub-title'>
                <span className='sub-title-total-number'>Tổng số câu: {total_question}</span><br></br>
                {/* <span className='sub-title-correct-number'>Số câu đúng: {question_true}</span> */}
            </div>
            <div className='wrquestion-end-option'>
                <button onClick={handleBack} className='wrquestion-end-btn-back'>Thử lại</button >
                <button onClick={handleNext} className='wrquestion-end-btn-next'>Tiếp tục</button >
            </div>
            <div class="wrquestion-end__questions grid wide" id="slider" >
                <div className='wrquestion-end__questions__title'>
                    <span>Bài làm</span>
                </div>
                {
                    part == "Part1" && listQuestion.map((item, index) => {
                        return (
                           <WrEnd1 question={item} index={index} key={index} record = {listRecord[index] ? listRecord[index]:""}></WrEnd1>
                        )
                    })
                }
                {
                    part == "Part2" && listQuestion.map((item, index) => {
                        return (
                           <WrEnd2 question={item} index={index} key={index} record = {listRecord[index] ? listRecord[index]:""}></WrEnd2>
                        )
                    })
                }
                {
                    part == "Part3" && listQuestion.map((item, index) => {
                        return (
                           <WrEnd3 question={item} index={index} key={index} record = {listRecord[index] ? listRecord[index]:""}></WrEnd3>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default WriteQuestionEnd;