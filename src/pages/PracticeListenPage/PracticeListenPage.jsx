import React, { Component } from 'react';
import './PracticeListenPage.scss';
import LsTopic from "./../../components/LsTopic/LsTopic";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import * as actions from './../../redux/actions/index'


function PracticeListenPage() {
    const dispatch = useDispatch()
    const ls = useSelector(state => state.practiceListen.data )
    console.log(ls)
    useEffect(()=>{
        dispatch(actions.getPracticeListenRequest())
    },[dispatch])
    
    return (
        <div class="app">
            <div class="listen">
                <div class="listen__header">
                    <div class="listen__header-content">
                        <div class="listen__header-content__title">
                            <h2>
                                Luyện nghe
                            </h2>
                            <p>
                                Cung cấp các bài nghe theo từng Part
                            </p>
                        </div>
                    </div>
                </div>
                <div class="listen__content">        
                    <div class="topic">
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