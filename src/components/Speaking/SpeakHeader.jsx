import React,  { Component, useEffect }  from 'react';
import "./SpeakHeader.scss"
import {  useNavigate } from 'react-router-dom';


function SpeakHeader({name, part, ls}) {
    let ls_course_id =""
    
    const navigate = useNavigate()
   
    const handleLogout=()=>{
        try {

            navigate(`/speaking/${part}`)
        } 
        catch (error) {
        
        }
    }
    
    return (
       
        <div className="speak-header">
            <div className="grid wide speak-header-content">
                <div className="speak-header__title">
                    <h1> <i className="fas fa-headphones"></i> {name}</h1>
                </div>
                <div className="speak-header__active">
                    <a onClick={handleLogout} >
                        <i className="fas fa-window-close speak-header__active__close"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SpeakHeader;