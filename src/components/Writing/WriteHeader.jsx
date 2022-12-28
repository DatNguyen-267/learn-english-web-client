import React,  { Component, useEffect }  from 'react';
import "./WriteHeader.scss"
import {  useNavigate } from 'react-router-dom';


function WriteHeader({name, part, ls}) {
    let ls_course_id =""
    
    const navigate = useNavigate()
   
    const handleLogout=()=>{
        try {

            navigate(`/writing/${part}`)
        } 
        catch (error) {
        
        }
    }
    
    return (
       
        <div className="write-header">
            <div className="grid wide write-header-content">
                <div className="write-header__title">
                    <h1> 
                        <span className='write-header__title-icon'>
                            <i class="fas fa-pen"></i>
                            <span>_</span>
                        </span>
                        {name}
                    </h1>
                </div>
                <div className="write-header__active">
                    <a onClick={handleLogout} >
                        <i className="fas fa-window-close write-header__active__close"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default WriteHeader;