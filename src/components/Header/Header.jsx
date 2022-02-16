import React, { Component } from 'react';
import './Header.scss'
import { BrowserRouter, Route, Routes, Navigate, useLocation, useParams } from "react-router-dom";

function Header(){

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <a href="" className="">
                    <i className="fab fa-bandcamp"></i>
                </a>
                <h5>Học tiếng anh để còn ra trường</h5>
            </div>
            <div className="navbar__search">
                <div className="navbar__search-border">
                    <i className="fas fa-search navbar__search-icon"></i>
                    <input className="navbar__search-input" type="text" placeholder="Tìm kiếm khóa học, bài viết..."></input>
                </div>
            </div>
            <div className="navbar__action">
                <i className="fas fa-bell navbar__action-notify"></i>
                <img className="navbar__action-avatar" src="https://cdn.fullstack.edu.vn/f8-production/user_photos/165533/62011642e39d5.jpg" alt=""></img>
            </div>
        </div>
    );
}

export default Header;