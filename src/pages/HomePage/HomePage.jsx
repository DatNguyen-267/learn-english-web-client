import React, { Component, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as actions from './../../redux/actions/index'
function HomePage() {
    const dispatch = useDispatch()
    const createCourse = React.useCallback(()=> {
        
    })
    return (
        <div className='grid wide'>
            Đây là trang chủ
        </div>
    );
}

export default HomePage;