import React, { Component } from 'react';
import './StorePage.scss';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import * as actions from '../../redux/actions/index'
import { SERVER_URL } from '../../constants';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

axios.defaults.withCredentials = true
function StorePage() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)
    const user = useSelector(state => state.user.data)
    let id = ''
    if(user && user._id){
        id = user._id
    }
    const dispatch = useDispatch()
    useEffect(()=> {
        console.log("token: ", token)
        // if(token){
        //     dispatch(actions.turn_off_popup_login())
        // }
        // else{
        //     console.log("token",token)
        //     dispatch(actions.turn_on_popup_login())
        // }
    },[token])
    useEffect(()=> {
        if(user){
            dispatch(actions.findStoreWordRequest(user._id))   
            console.log("user: ",user._id)
        }
    }, [user])
    const data = useSelector(state => state.store.data)
    console.log("data: ",data)
    let list_word = []
    if(data && data.list_word){
        if(data && data.list_word){
            list_word = data.list_word
        }
    }
    const { speak, speakSlow } = useSelector(state => state.speak)
    const handleSpeech = (value) => {
        console.log(value)
        speak.text = value;
        speechSynthesis.speak(speak)
    }
    const handleDelete = (id, user) => {
        console.log("word_id: ",id)
        console.log("user_id: ",user._id)
        try {
            const removeWordToStore = async () => {
              let res = await axios.post(
                `${SERVER_URL}/courses/voca/removeWordOfStore`,
                {
                  idWord: id,
                },
                {
                  headers: { Authorization: token },
                }
              );
              if (res.data === "success") {
                dispatch(actions.findStoreWordRequest(user._id))  
              }
              console.log(res);
            };
            removeWordToStore();
          } catch (error) {}
          
    }
    return (
      <div className="grid wide"  >
            <div class="store-page-header">
                <div class="store-page-title base__page-heading">
                    <h1>Kho từ vựng</h1>
                    <span>Lưu lại từ vựng bạn quan tâm, giúp đỡ quá trình ôn tập của bạn!</span>
                </div> 
            </div>
           {
                token && (
                    <div class="store-page-content">
                    <h2>Danh sách</h2>
                    <div class="row store-list">
                        {
                                list_word.map((item, index)=>{
                                return(
                                    <div class="col l-3 m-12 c-12">
                                    <div class="store-item">
                                        <div class="store-item__header">
                                            <div class="store-item__mid">
                                                <div class="store-item__mid-header">
                                                    {item.english}
                                                </div>
                                                
                                            </div>
                                            <div class="store-item__right">
                                                <i class="store-item__right-icon fas fa-volume-up" onClick={()=>handleSpeech(item.english)}>
                                                    <audio src={`${item.audio}`}></audio>
                                                </i>
                                                <i class="store-item__right-icon fas fa-window-close" onClick={()=>handleDelete(item._id, user)}></i>
                                            </div>
                                           
                                        </div>
                                        {
                                            item.meanings.map((item2,index2)=>{
                                                return(
                                                <div class="store-item__content">
                                                    <div class="store-item__content-type">({item2.partOfSpeech})</div>
                                                    <div class="store-item__content-mean">    
                                                        <span>
                                                            {item2.synonyms} ({item2.vietnamese})
                                                           
                                                        </span>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                    </div>
                                )
                            })
                        }
                        
                            
                            
                        
                    </div>
                </div>
                )
           }
           {
               !token && (
                <div class="store-page-content-no-login">
                     <div className="store-page__action">
                        <Link to="/login" className="store-page__action-login">
                            Đăng nhập
                        </Link>
                    </div>
                    <div className='store-page__sub'>
                        Đăng nhập để xem tài liệu của bạn!!!
                    </div>
                </div>
               )
           }
          
      </div>
    );
}

export default StorePage;