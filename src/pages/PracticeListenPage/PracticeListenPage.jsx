import React, { Component } from 'react';
import './PracticeListenPage.scss';
import LsTopic from "./../../components/LsTopic/LsTopic";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import * as actions from './../../redux/actions/index'


function PracticeListenPage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(actions.getPracticeListenRequest())
    },[dispatch])
    
    const ls = useSelector(state => state.practiceListen.data )
    return (
        <div className="app-practice-listen grid wide">
            <div className="listen ">
                <div className="listen__header">
                    <div className="listen__header-content">
                        <div className="listen__header-content__title">
                            <h2>
                                Luyện nghe
                            </h2>
                            <p>
                                Cung cấp các bài nghe theo từng Part
                            </p>
                        </div>
                    </div>
                </div>
                <div className="listen__content">        
                    <div className="topic">
                       {
                           ls.map((item)=>{
                                return(
                                    <LsTopic topic={item}/>
                                )
                           })
                       }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PracticeListenPage;