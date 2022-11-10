import React, { Component, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import LsPart from '../../components/LsPart/LsPart';
import "./ListenQuestionPage.scss"
import * as actions from './../../redux/actions/index'
import ListenHeader from '../../components/ListenHeader/ListenHeader';
import ListenFooter from '../../components/ListenFooter/ListenFooter';
import ListenQuestion1 from '../../components/ListenQuestion1/ListenQuestion1';
import ListenQuestion2 from '../../components/ListenQuestion2/ListenQuestion2';
import ListenQuestion3 from '../../components/ListenQuestion3/ListenQuestion3';
import ListenQuestionEnd from '../../components/ListenQuestionEnd/ListenQuestionEnd';
import { NotePage } from '../NotePage/NotePage';
function ListenQuestionPage() {
    const param = useParams()
    const id = param.id
    console.log(param)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getPracticeListenRequest())
        dispatch(actions.getListenPartRequest(id))
        dispatch(actions.setQuestionPlaying(0))
        dispatch(actions.setQuestionTrue(0))
    }, [dispatch])

    const ls = useSelector(state => state.practiceListen.data)
    const data = useSelector(state => state.listenPart.data)
    const question_playing = useSelector(state => state.listenPart.question_playing)
    const question_true = useSelector(state => state.listenPart.question_true)
    let [isEnd, setIsEnd] = useState(false)
    var [list_user_answer, setListUserAnswer] = useState([]) // danh sach cau tra loi cua nguoi dung
    var [index_qs_header, setIndexQsHeader] = useState(0)
    var index_qs = 0
    let total_question = 0

    let lspart = {}
    for (const item in data) {
        if (data[item]._id === id) {
            lspart = data[item]
        }
    }
    let list_question = []
    if (lspart && lspart.list_question) {
        list_question = lspart.list_question
    }
    if (list_question) {
        list_question.map((item, index) => {
            total_question = total_question + item.list_min_question.length;
        })
    }
    
    const onClickNext = (value) => {

        var x = 0
        if (value.question_playing >= value.length - 1) {
            var list = []
            const min_questions = document.querySelectorAll('.min-question')
            list.push(" ")
            var i = 0
            min_questions.forEach(min_quest => {
                var answers = min_quest.querySelectorAll('.answers-item')
                answers.forEach(item => {
                    var input = item.querySelector('input')
                    const data = item.getAttribute('data-value')
                    if (input.checked == true) {
                        list[i] = data
                    }
                })
                i++
            })
            setListUserAnswer(list)
            setIsEnd(true)
        }
        if (value.length > 0 && value.question_playing < value.length - 1) {
            x = value.question_playing
            dispatch(actions.setQuestionPlaying(x + 1))
            setIndexQsHeader(index_qs_header + list_question[question_playing].list_min_question.length)

            var lastchild = document.getElementById("slider").lastElementChild
            var firstchild = document.getElementById("slider").firstElementChild
            var firtpoint = firstchild.offsetLeft
            var lastpoint = lastchild.offsetLeft
            var widthItem = lastchild.offsetWidth
            var widthslider = lastpoint - firtpoint

            if (widthslider <= widthItem) {
                // document.getElementById("btn-scroll-right").disabled = true
            }
            if (x <= 0) {
                document.getElementById("btn-scroll-left").disabled = true
            }
            if (x <= widthslider - widthItem) {
                document.getElementById("btn-scroll-left").disabled = false
                x = (widthItem + x * widthItem)
                var xTostring = (-x).toString()
                document.getElementById("slider").style.transform = "translateX(" + xTostring + "px)"
            }
            if (x >= widthslider) {
                // document.getElementById("btn-scroll-right").disabled = true
            }
        }
    }
    const onClickPre = (value) => {
        var x = 0

        if (value.length > 0 && value.question_playing > 0) {
            x = value.question_playing

            dispatch(actions.setQuestionPlaying(x - 1))
            setIndexQsHeader(index_qs_header - list_question[question_playing].list_min_question.length)

            var lastchild = document.getElementById("slider").lastElementChild
            var firstchild = document.getElementById("slider").firstElementChild
            var firtpoint = firstchild.offsetLeft
            var lastpoint = lastchild.offsetLeft
            var widthItem = lastchild.offsetWidth
            var widthslider = lastpoint - firtpoint

            if (widthslider <= widthItem) {
                // document.getElementById("btn-scroll-right").disabled = true
            }
            if (x <= 0) {
                document.getElementById("btn-scroll-left").disabled = true
            }
            if (x > 0) {
                document.getElementById("btn-scroll-right").disabled = false
                x = (x * widthItem - widthItem)
                var xTostring = (-x).toString()
                document.getElementById("slider").style.transform = "translateX(" + xTostring + "px)"

            }
            if (x <= 0) {
                document.getElementById("btn-scroll-left").disabled = true
            }
            // alert(widthItem +" " +x.toString()+" "+ widthslider)
        }
    }
    const setQuestionTrue = (value) => {
        console.log("question_true: ", value)
        dispatch(actions.setQuestionTrue(value))

    }
    const checkResult = () => {
        var question = list_question[question_playing];
        const questions = document.querySelectorAll('.question-1-item')
        const min_questions = questions[question_playing].querySelectorAll('.min-question')

        var i = 0
        // kiem tra dung sai
        min_questions.forEach(min_quest => {
            const min_questiontitle = min_quest.querySelector('.min-question__title')
            min_questiontitle.querySelector('span').classNameList.remove("hide-content")
            var answers = min_quest.querySelectorAll('.answers-item')
            var min_question = question.list_min_question[i]
            answers.forEach(item => {
                var input = item.querySelector('input')
                item.lastChild.classList.remove("hide-content")
                // data: chua id cua cau tra loi
                const data = item.getAttribute('data-value')
                if (input.checked != true && data != min_question.true_answer) {
                    item.classList.add("dont-choose-answer")
                    answers.forEach(item2 => {
                        const data2 = item2.getAttribute('data-value')
                        if (data2 == min_question.true_answer) {
                            item2.classList.remove("dont-choose-answer")
                            item2.classList.add("correct-answer")
                        }
                    })
                }
                if (input.checked == true && data == min_question.true_answer) {
                    item.classList.add("correct-answer")
                    // setQuestionTrue(question_true + 1)
                }
                if (input.checked == true && data != min_question.true_answer) {
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
        })
        // hien transcript
        if (question.transcript) {
            document.getElementById(`transcript${question._id}`).style.display = "block"
        }
    }
    return (
        <div>
            <ListenHeader name={lspart.name ? lspart.name : ""} part_id={lspart._id} ls={ls}></ListenHeader>
            {
                !isEnd &&
                <div className="app-question-listen">
                    <div className="header_lsquestion">
                        <div className="header_lsquestion__title grid wide">
                            <span className="questions">Câu: {list_question.length > 0 ? index_qs_header + 1 : 0}
                                {list_question.length > 0 && list_question[question_playing].list_min_question.length > 1 ? "-" + (list_question[question_playing].list_min_question.length + index_qs_header) + " " : " "}
                                / {total_question}
                            </span>
                            <button className="correct btn" onClick={checkResult}><span>Kiểm tra</span></button>
                            {/* <h2 className="correct">Đúng: <span>{question_true!== undefined ? question_true: ''}</span></h2> */}
                        </div>
                    </div>
                    <div className="container_lsquestion grid wide">

                        <div className="container__content">
                            <div className="container__content__questions" id="slider">
                                {
                                    list_question.map((item, index) => {
                                        index_qs = index_qs+item.list_min_question.length
                                        return (
                                            <div className="col l-12 m-12 c-12" key={index}>
                                                <ListenQuestion1 
                                                    question={item} 
                                                    index_qs={index_qs} 
                                                    setQuestionTrue={setQuestionTrue} 
                                                    question_true={question_true} 
                                                >
                                                </ListenQuestion1>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                !isEnd &&
                <ListenFooter onClickNext={onClickNext}
                    onClickPre={onClickPre}
                    question_playing={question_playing}
                    length={list_question.length}
                    list_question={list_question}
                >
                </ListenFooter>
            }
            {
                isEnd &&
                <div className="app-question-listen">
                    <NotePage></NotePage>
                    <ListenQuestionEnd 
                        total_question={total_question} 
                        setQuestionTrue={setQuestionTrue}
                        question_true={question_true} 
                        list_question={list_question} 
                        ls={ls} 
                        part_id={lspart._id}
                        list_user_answer={list_user_answer}
                    >
                    </ListenQuestionEnd>
                </div>

            }
        </div>
    );
}

export default ListenQuestionPage;