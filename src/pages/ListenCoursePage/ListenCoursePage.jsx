import React, { Component, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import LsPart from '../../components/LsPart/LsPart';
import { useNavigate } from "react-router-dom";
import "./ListenCoursePage.scss"
import * as actions from './../../redux/actions/index'
function ListenCoursePage() {
    const param = useParams()
    const id = param.id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getListenCourseRequest(id))
    }, [dispatch])


    const data = useSelector(state => state.listenCourse.data)
    const [showPopUp, setShowPopUp] = useState(false);
    const [targetPart, setTargetPart] = useState(null);
    const navigator = useNavigate();

    let lscourse = {}
    for (const item in data) {
        if (data[item]._id === id) {
            lscourse = data[item]
        }
    }
    let list_part = []
    if (lscourse && lscourse.list_part) {
        list_part = lscourse.list_part
    }

    const handleClick = (item) => {
        setTargetPart(item)
        setShowPopUp(true);
    };
    const handleYes = () => {
        navigator(`/practice-listen/part/${targetPart._id}`);
    };
    const handleNo = () => {
        setShowPopUp(false);
    };

    return (
        <div className="app-course-listen">
            {showPopUp && (
                <div className="pop-up">
                    <div className="modal">
                        <div className="modal-overlay" onClick={handleNo}></div>
                        <div className="lscourse-page__modal-body modal-body">
                            <div className="lscourse-page__modal-title">
                                Bạn đã sẵn sàng bắt đầu làm bài
                            </div>
                            <div className="lscourse-page__modal-sub-title">{targetPart.name}</div>
                            <div className="lscourse-page__modal-option">
                                <button onClick={handleNo}>No</button>
                                <button onClick={handleYes}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='app-course-listen-content grid wide'>
                <div className="listen-part">
                    <div className="listen-part__header">
                        <div className="listen-part__header-content">
                            <div className="listen-part__header-content__title">
                                <h1>
                                    {lscourse ? lscourse.name : ''}
                                </h1>
                                <p>
                                    Danh sách các part
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="listen-part__content">
                        <div className="parts row">
                            {
                                list_part.map((item) => {
                                    return (
                                        <LsPart part={item} handleClick={handleClick}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListenCoursePage;