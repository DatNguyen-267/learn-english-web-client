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
       
        <div className="ls-header">
            <div className="grid wide ls-header-content">
                <div className="ls-header__title">
                    <h1> <i className="fas fa-headphones"></i> {name}</h1>
                </div>
                <div className="ls-header__active">
                    <a onClick={handleLogout} >
                        <i className="fas fa-window-close ls-header__active__close"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ListenHeader;