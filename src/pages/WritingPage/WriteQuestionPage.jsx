import React, { Component, useEffect, useState } from 'react';
import "./WriteQuestionPage.scss";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import WriteHeader from '../../components/Writing/WriteHeader';
import WriteFooter from '../../components/Writing/WriteFooter';
import WriteQuestionEnd from '../../components/Writing/WriteQuestionEnd/WriteQuestionEnd';
import WriteQuestion1 from '../../components/Writing/WriteQuestion1';
import WriteQuestion2 from '../../components/Writing/WriteQuestion2';
import WriteQuestion3 from '../../components/Writing/WriteQuestion3';
import toast, { Toaster } from 'react-hot-toast';
import * as actions from '../../redux/actions/index'


function WriteQuestionPage() {
    const param = useParams()
    const id = param.id
    const name = param.name
    console.log("param:", param)
    const dispatch = useDispatch()
    const data = useSelector(state => state.writeQuestion.data)
    const [question_playing, setQuestionPlaying] = useState(0);
    const [length, setlength] = useState(0);
    const [isRecord, setIsRecord] = useState(false);
    const [listQuestion, setlistQuestion] = useState(0);
    const [listRecord, setlistRecord] = useState();
    let [isEnd, setIsEnd] = useState(false);
    
    useEffect(() => {
        dispatch(actions.findWriteQuestionRequest(id))
    }, [dispatch])

    useEffect(() => {
        if (data && data.length > 0) {
            setlistQuestion(data[0].wr_questions)
            setlength(data[0].wr_questions.length)
        }
    }, [data[0]])
    const loadtext = (question) => {
        let list = []
        console.log(question.length)
        if(question.length) {
            const str = question.list_word
            const str2 = question.list_phonetic
            const listword = str.split(" ")
            const listphonetic = str2.split(" ")
            
            let i = 0
            listword.forEach(element => {
                const item = {
                    word: element,
                    phonetic: listphonetic[i]
                }
                list.push(item)
                i++
            });
        }
        return list
       
    }
    const onClickNext = (value) => {

        var x = 0
        if (value.question_playing >= value.length - 1) {
            let list = []
            const listcontent = document.querySelectorAll('.write-input-content')
            listcontent.forEach(element => {
                list.push(element.value)
                
            });
            setlistRecord(list)
            console.log('danh sach ghi am:', list)
            setIsEnd(true)
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
            x = value.question_playing
            dispatch(actions.setQuestionPlaying(x - 1))
            setQuestionPlaying(x - 1)
            document.getElementById(`question-${x}`).style.display = "none"
            document.getElementById(`question-${x - 1}`).style.display = "block"
        }
    }
    const handleToggleSuggest = () => {
        if (document.getElementById(`write-question-${question_playing}`).style.display === 'block') {
            document.getElementById(`write-question-${question_playing}`).style.display = 'none'
        }
        else {

            document.getElementById(`write-question-${question_playing}`).style.display = 'block'
        }

    }
    console.log(listQuestion)
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <WriteHeader name={name} part={data[0] ? data[0].type : ""}></WriteHeader>
            {
                !isEnd &&
                <div className="app-write-question">
                    <div className="header_write_question">
                            <div className="header_write_question__title grid wide">
                                <span className="questions"></span>
                                <button className="correct btn" onClick={handleToggleSuggest}><span>Gợi ý</span></button>
                            </div>
                        </div>
                    <div className="container_write_question grid wide">
                        <div className="container_write__content">
                            <div className="container_write__content__questions" id="slider">
                                {/* <div className="col l-12 m-12 c-12" id={`question-${0}`} key={0} >
                                    <WriteQuestion2
                                        question={question} 
                                        text={loadtext(question)} 
                                        question_playing={0} 
                                        img={"https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="} 
                                        setIsRecord={setIsRecord} 
                                        isRecord={isRecord} 
                                    >
                                    </WriteQuestion2>
                                </div> */}
                                {
                                    data[0] && data[0].type == "Part1" &&
                                        listQuestion ? listQuestion.map((question, index) => {
                                            return (
                                                <div className="col l-12 m-12 c-12" id={`question-${index}`} key={index} >
                                                    <WriteQuestion1 question={question} text={loadtext(question)} question_playing={index} setIsRecord={setIsRecord} isRecord={isRecord} ></WriteQuestion1>
                                                </div>
                                            )
                                        }) : ""
                                }
                                {
                                    data[0] && data[0].type == "Part2" &&
                                        listQuestion ? listQuestion.map((question, index) => {
                                            return (
                                                <div className="col l-12 m-12 c-12" id={`question-${index}`} key={index} >
                                                    <WriteQuestion2 question={question} text={loadtext(question)} question_playing={index} img={question.img} setIsRecord={setIsRecord} isRecord={isRecord} ></WriteQuestion2>
                                                </div>
                                            )
                                        }) : ""
                                }
                                {
                                    data[0] && data[0].type == "Part3" &&
                                        listQuestion ? listQuestion.map((question, index) => {
                                            return (
                                                <div className="col l-12 m-12 c-12" id={`question-${index}`} key={index} >
                                                    <WriteQuestion3 question={question} question_playing={index} setIsRecord={setIsRecord} isRecord={isRecord} ></WriteQuestion3>
                                                </div>
                                            )
                                        }) : ""
                                }                               
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                !isEnd &&
                <WriteFooter
                    onClickNext={onClickNext}
                    onClickPre={onClickPre}
                    question_playing={question_playing}
                    length={length}
                >
                </WriteFooter>
            }
            {
                isEnd &&
                <WriteQuestionEnd
                    total_question={length}
                    listQuestion={listQuestion}
                    part={data[0] ? data[0].type : ""}
                    id={id}
                    name={name}
                    listRecord={listRecord}
                //listword={listword}

                ></WriteQuestionEnd>
            }
        </div>
    );
}

export default WriteQuestionPage;