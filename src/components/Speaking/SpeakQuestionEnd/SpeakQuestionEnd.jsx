import React, { useEffect, useState } from 'react';
import "./SpeakQuestionEnd.scss"
import VocaTranscript from '../VocaTranscript';
import { useNavigate} from 'react-router-dom';
import SpEnd1 from './SpEnd1';
import SpEnd2 from './SpEnd2';
import SpEnd3 from './SpEnd3';
import SpEnd4 from './SpEnd4';
import SpEnd5 from './SpEnd5';

function SpeakQuestionEnd({ name, part, id, total_question, listword, listQuestion, listRecord }) {
    
    const navigate = useNavigate()
    useEffect(() => {

    }, [])
    const handleBack = () => {
        try {
            navigate(`/speaking/part/${name}/${id}`)
            window.location.reload()
        }
        catch (error) {

        }

    }
    const handleNext = () => {
        try {
            navigate(`/speaking/${part}`)
        }
        catch (error) {

        }
    }
    const [toogle, setToogle] = useState(false);
    const [toogleAudio, setToogleAudio] = useState(false);
    const handleToogleTrans = () => {
        setToogle(!toogle)
    }
    const handleToogleAudio = () => {
        setToogleAudio(!toogleAudio)
    }


    return (

        <div className='spquestion-end'>
            <div className='spquestion-end-main-title'>
                Chúc mừng bạn đã hoàn thành
            </div>
            <div className='spquestion-end-sub-title'>
                <span className='sub-title-total-number'>Tổng số câu: {total_question}</span><br></br>
                {/* <span className='sub-title-correct-number'>Số câu đúng: {question_true}</span> */}
            </div>
            <div className='spquestion-end-option'>
                <button onClick={handleBack} className='spquestion-end-btn-back'>Thử lại</button >
                <button onClick={handleNext} className='spquestion-end-btn-next'>Tiếp tục</button >
            </div>
            <div class="spquestion-end__questions grid wide" id="slider" >
                <div className='spquestion-end__questions__title'>
                    <span>Bài làm</span>
                </div>
                {
                    part == "Part1" && listQuestion.map((item, index) => {
                        return (
                           <SpEnd1 question={item} index={index} key={index} record = {listRecord[index] ? listRecord[index]:""}></SpEnd1>
                        )
                    })
                }
                {
                    part == "Part2" && listQuestion.map((item, index) => {
                        return (
                           <SpEnd2 question={item} index={index} key={index} record = {listRecord[index] ? listRecord[index]:""}></SpEnd2>
                        )
                    })
                }
                {
                    part == "Part3" && listQuestion.map((item, index) => {
                        return (
                           <SpEnd3 question={item} index={index} key={index} record = {listRecord[index] ? listRecord[index]:""}></SpEnd3>
                        )
                    })
                }
                {
                    part == "Part4" && listQuestion.map((item, index) => {
                        return (
                           <SpEnd4 question={item} index={index} key={index} record = {listRecord[index] ? listRecord[index]:""}></SpEnd4>
                        )
                    })
                }
                {
                    part == "Part5" && listQuestion.map((item, index) => {
                        return (
                           <SpEnd5 question={item} index={index} key={index} record = {listRecord[index] ? listRecord[index]:""}></SpEnd5>
                        )
                    })
                }
            </div>
        </div>

    );
}

export default SpeakQuestionEnd;