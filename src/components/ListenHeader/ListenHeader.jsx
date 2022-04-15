import React,  { Component, useEffect }  from 'react';
import "./ListenHeader.scss"

function ListenHeader({name, part_id, ls}) {
    let ls_course_id =""
    
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
    
    console.log(ls_course_id)
    return (
       
        <div class="ls-header">
            <div class="grid wide ls-header-content">
                <div class="ls-header__title">
                    <h1> <i class="fas fa-headphones"></i> {name}</h1>
                </div>
                <div class="ls-header__active">
                    <a href={`/practice-listen/course/${ls_course_id}`} >
                        <i class="fas fa-window-close ls-header__active__close"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ListenHeader;