import React, { Component, useEffect, useState } from 'react';
import "./SpeakQuestionPage.scss";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import SpeakHeader from '../../components/Speaking/SpeakHeader';
import SpeakFooter from '../../components/Speaking/SpeakFooter';
import SpeakQuestionEnd from '../../components/Speaking/SpeakQuestionEnd/SpeakQuestionEnd';
import SpeakQuestion1 from '../../components/Speaking/SpeakQuestion1';
import SpeakQuestion2 from '../../components/Speaking/SpeakQuestion2';
import SpeakQuestion3 from '../../components/Speaking/SpeakQuestion3';
import toast, { Toaster } from 'react-hot-toast';
import * as actions from './../../redux/actions/index'
import SpeakQuestion5 from '../../components/Speaking/SpeakQuestion5';
import SpeakQuestion4 from '../../components/Speaking/SpeakQuestion4';


function SpeakQuestionPage() {
    const param = useParams()
    const id = param.id
    const name = param.name
    console.log("param:", param)
    const dispatch = useDispatch()
    const data = useSelector(state => state.speakQuestion.data)
    const [question_playing, setQuestionPlaying] = useState(0);
    const [length, setlength] = useState(0);
    const [isRecord, setIsRecord] = useState(false);
    const [listQuestion, setlistQuestion] = useState(0);
    const [listRecord, setlistRecord] = useState();
    let [isEnd, setIsEnd] = useState(false);


    useEffect(() => {
        dispatch(actions.findSpeakQuestionRequest(id))
    }, [dispatch])

    useEffect(() => {
        if (data && data.length > 0) {
            setlistQuestion(data[0].sp_questions)
            setlength(data[0].sp_questions.length)
        }
    }, [data[0]])

    const onClickNext = (value) => {

        var x = 0
        if (value.question_playing >= value.length - 1) {
            if (isRecord) {
                toast(
                    <span className='toast'>
                        <span className='toast_title'>Thông báo:</span>
                        <span>
                            Hãy hoàn thành ghi âm trước khi chuyển câu!!!
                        </span>
                    </span>,
                )
            }
            else {
                let list = []
                const listcontent = document.querySelectorAll('.recorded-audio-container')
                listcontent.forEach(element => {
                    if (element.childNodes) {
                        list.push(element.childNodes[0] ? element.childNodes[0].src : "")
                    }
                });
                setlistRecord(list)
                console.log('danh sach ghi am:', list)
                setIsEnd(true)
            }

        }
        if (value.length > 0 && value.question_playing < value.length - 1) {
            if (isRecord) {
                toast(
                    <span className='toast'>
                        <span className='toast_title'>Thông báo:</span>
                        <span>
                            Hãy hoàn thành ghi âm trước khi chuyển câu!!!
                        </span>
                    </span>,
                )
            }
            else {
                x = value.question_playing
                //dispatch(actions.setQuestionPlaying(x + 1))
                setQuestionPlaying(x + 1)
                document.getElementById(`question-${x}`).style.display = "none"
                document.getElementById(`question-${x + 1}`).style.display = "block"
            }
        }
    }
    const onClickPre = (value) => {
        var x = 0
        if (value.length > 0 && value.question_playing > 0) {
            if (isRecord) {
                toast(
                    <span className='toast'>
                        <span className='toast_title'>Thông báo:</span>
                        <span>
                            Hãy hoàn thành ghi âm trước khi chuyển câu!!!
                        </span>
                    </span>,
                )
            }
            else {

                x = value.question_playing
                dispatch(actions.setQuestionPlaying(x - 1))
                setQuestionPlaying(x - 1)
                document.getElementById(`question-${x}`).style.display = "none"
                document.getElementById(`question-${x - 1}`).style.display = "block"
            }
        }
    }
    const handleToggleSuggest = () => {
        if (document.getElementById(`speak-question-${question_playing}`).style.display === 'block') {
            document.getElementById(`speak-question-${question_playing}`).style.display = 'none'
        }
        else {

            document.getElementById(`speak-question-${question_playing}`).style.display = 'block'
        }

    }

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <SpeakHeader name={name} part={data[0] ? data[0].type : ""}></SpeakHeader>
            {
                !isEnd &&
                <div className="app-speak-question">
                    {
                        data[0] && data[0].type !== "Part1" ? <div className="header_speak_question">
                            <div className="header_speak_question__title grid wide">
                                <span className="questions"></span>
                                <button className="correct btn" onClick={handleToggleSuggest}><span>Gợi ý</span></button>
                            </div>
                        </div> : ""
                    }
                    <div className="container_speak_question grid wide">
                        <div className="container_speak__content">
                            <div className="container_speak__content__questions" id="slider">
                                {

                                    listQuestion ? listQuestion.map((question, index) => {
                                        return (
                                            <div className="col l-12 m-12 c-12" id={`question-${index}`} key={index} >
                                                {
                                                    data[0] && data[0].type == "Part1" ? <SpeakQuestion1 question={question} question_playing={index} setIsRecord={setIsRecord} isRecord={isRecord}></SpeakQuestion1> : ""
                                                }
                                                {
                                                    data[0] && data[0].type == "Part2" ? <SpeakQuestion2 question={question} question_playing={index} img={question.img} setIsRecord={setIsRecord} isRecord={isRecord} ></SpeakQuestion2> : ""
                                                }
                                                {
                                                    data[0] && data[0].type == "Part3" ? <SpeakQuestion3 question={question} question_playing={index} setIsRecord={setIsRecord} isRecord={isRecord} ></SpeakQuestion3> : ""
                                                }
                                                {
                                                    data[0] && data[0].type == "Part4" ? <SpeakQuestion4 question={question} question_playing={index} img={question.img} setIsRecord={setIsRecord} isRecord={isRecord} ></SpeakQuestion4> : ""
                                                }
                                                {
                                                    data[0] && data[0].type == "Part5" ? <SpeakQuestion5 question={question} question_playing={index} setIsRecord={setIsRecord} isRecord={isRecord} ></SpeakQuestion5> : ""
                                                }

                                            </div>
                                        )
                                    }) : ""

                                }
                                {/* <div className="col l-12 m-12 c-12" id='question-0'>
                                    <SpeakQuestion3 listword={listword} question_playing={"0"} img={"http://4.bp.blogspot.com/-TvqId5-6drQ/VrB6he98pdI/AAAAAAAAKrA/lxli1fhdy2o/s1600/Toeic-Speaking-Bai-2-P-2-mo-ta-tranh-02.jpg"}></SpeakQuestion3>
                                </div>
                                <div className="col l-12 m-12 c-12" id='question-1'>
                                   <SpeakQuestion3 listword={listword} question_playing={"1"} img={"http://3.bp.blogspot.com/-2dNrIQcLNng/VrB6imgiwcI/AAAAAAAAKrI/7-UWi5psenE/s1600/Toeic-Speaking-Bai-2-P-2-mo-ta-tranh-01.jpg"}></SpeakQuestion3>
                                </div>
                                <div className="col l-12 m-12 c-12" id='question-2'>
                                     <SpeakQuestion3 listword={listword} question_playing={"2"} img={"https://global-exam.com/blog/wp-content/uploads/2019/05/toeicsw3-e1559306873491.jpg"}></SpeakQuestion3>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                !isEnd &&
                <SpeakFooter
                    onClickNext={onClickNext}
                    onClickPre={onClickPre}
                    question_playing={question_playing}
                    length={length}
                >
                </SpeakFooter>
            }
            {
                isEnd &&
                <SpeakQuestionEnd
                    total_question={length}
                    listQuestion={listQuestion}
                    part={data[0] ? data[0].type : ""}
                    id={id}
                    name={name}
                    listRecord={listRecord}
                //listword={listword}

                ></SpeakQuestionEnd>
            }
        </div>
    );
}

export default SpeakQuestionPage;