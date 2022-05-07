import React,  { Component, useEffect }  from 'react';
import "./ListenHeader.scss"
import {  useNavigate } from 'react-router-dom';


function ListenHeader({name, part_id, ls}) {
    let ls_course_id =""
    
    const navigate = useNavigate()
   
    const handleLogout=()=>{
        try {
            if(ls){
                ls.forEach(element => {
                    element.list_course.forEach(course=>{
                        course.list_part.forEach(part=>{
                            if(part == part_id){
                                ls_course_id = course._id
                            }
                        })
                    })
                })
            }
            navigate(`/practice-listen/course/${ls_course_id}`)
        } 
        catch (error) {
        
        }
    }
    console.log(ls_course_id)
    return (
       
        <div class="ls-header">
            <div class="grid wide ls-header-content">
                <div class="ls-header__title">
                    <h1> <i class="fas fa-headphones"></i> {name}</h1>
                </div>
                <div class="ls-header__active">
                    <a onClick={handleLogout} >
                        <i class="fas fa-window-close ls-header__active__close"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ListenHeader;