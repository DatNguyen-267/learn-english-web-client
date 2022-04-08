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
    const param = useParams()
    const id = param.id
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(actions.getListenPartRequest(id))
    },[dispatch])
   
   
    const data = useSelector(state => state.listenPart.data )
    const question_playing = useSelector(state => state.listenPart.question_playing )
    const question_true = useSelector(state => state.listenPart.question_true )
    
  
    let lspart = {}
    for (const item in data) {
        if(data[item]._id === id){
            lspart = data[item]
        }
    }
    let list_question = []
    if(lspart && lspart.list_question){
        list_question = lspart.list_question
    }
    
    const onClickNext = (value) =>{
        var x = 0
        if(value.length > 0  && value.question_playing< value.length-1){
            x = value.question_playing
            
            
                dispatch(actions.setQuestionPlaying(x+1))
            

            var  lastchild = document.getElementById("slider").lastElementChild
            var  firstchild = document.getElementById("slider").firstElementChild
            var firtpoint  = firstchild.offsetLeft
            var lastpoint  = lastchild.offsetLeft
            var widthItem  = lastchild.offsetWidth
            var widthslider = lastpoint - firtpoint
            
            if(widthslider <= widthItem){
                document.getElementById("btn-scroll-right").disabled = true
            }
            if(x <= 0){
                document.getElementById("btn-scroll-left").disabled = true
            }
            if (x <= widthslider-widthItem){
                document.getElementById("btn-scroll-left").disabled = false
                x=(widthItem+x*widthItem)
                var xTostring = (-x).toString() 
                document.getElementById("slider").style.transform= "translateX(" + xTostring +"px)"
            }
            if(x>= widthslider){
                document.getElementById("btn-scroll-right").disabled = true
            }
        }
    }
    const onClickPre = (value) =>{
        var x = 0
        if(value.length > 0 && value.question_playing>0){
            x = value.question_playing
        
            dispatch(actions.setQuestionPlaying(x-1))
            
           

            var  lastchild = document.getElementById("slider").lastElementChild
            var  firstchild = document.getElementById("slider").firstElementChild
            var firtpoint  = firstchild.offsetLeft
            var lastpoint  = lastchild.offsetLeft
            var widthItem  = lastchild.offsetWidth
            var widthslider = lastpoint - firtpoint
            
            if(widthslider <= widthItem){
                document.getElementById("btn-scroll-right").disabled = true
            }
            if(x <= 0){
                document.getElementById("btn-scroll-left").disabled = true
            }
            if (x > 0){
                document.getElementById("btn-scroll-right").disabled = false
                x=(x*widthItem-widthItem)
                var xTostring = (-x).toString() 
                document.getElementById("slider").style.transform= "translateX(" + xTostring +"px)"
               
            }
            if(x<= 0){
                document.getElementById("btn-scroll-left").disabled = true
            }
            // alert(widthItem +" " +x.toString()+" "+ widthslider)
        }
    }
    const setQuestionTrue=(value)=>{
        console.log("question_true: ", value)
        dispatch(actions.setQuestionTrue(value))

    }
    return (
       <div>
           <ListenHeader name = {lspart.name? lspart.name:""}></ListenHeader>
            <div class="app">
                <div class="container_lsquestion grid wide">
                    <div class="container__header">
                        <div class="container__header__title">
                            <h2 class="questions">Số câu: {list_question.length>0? question_playing+1:0}/{lspart.amount_question}</h2>
                            <h2 class="correct">Đúng: <span>{question_true!== undefined ? question_true: ''}</span></h2>
                        </div>
                    </div>
                    <div class="container__content">
                        <div class="container__content__questions" id="slider">
                           {
                               list_question.map((item, index)=>{                                    
                                    return(
                                        <div class="col l-12 m-12 c-12">
                                            <ListenQuestion1 question={item} index_qs={index} setQuestionTrue = {setQuestionTrue} question_true={question_true} ></ListenQuestion1>
                                        </div>
                                       
                                    )
                            }) 
                           }
                        </div>
                    </div>
                </div>
            </div>
            <ListenFooter   onClickNext={onClickNext} 
                            onClickPre={onClickPre} 
                            question_playing={question_playing} 
                            length = {list_question.length} 
                            list_question={list_question}
            >
            </ListenFooter>
       </div>
    );
}

export default ListenQuestionPage;