import React, { Component, useEffect } from 'react';
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
function ListenQuestionPage() {
    return (
       <div>
           <ListenHeader></ListenHeader>
            <div class="app">
                <div class="container grid wide">
                    <div class="container__header">
                        <div class="container__header__title">
                            <h2 class="questions">Số câu: 1/20</h2>
                            <h2 class="correct">Đúng: <span>8</span></h2>
                        </div>
                    </div>
                    <div class="container__content">
                        <div class="container__content__questions">
                            {/* <ListenQuestion1></ListenQuestion1> */}
                            <ListenQuestion3></ListenQuestion3>

                        </div>
                    </div>
                </div>
            </div>
            <ListenFooter></ListenFooter>
       </div>
    );
}

export default ListenQuestionPage;