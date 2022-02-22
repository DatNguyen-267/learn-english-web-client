import React, { Component, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as actions from './../../redux/actions/index'
function HomePage() {
    const dispatch = useDispatch()
    const createCourse = React.useCallback(()=> {
        dispatch(actions.createCourseRequest({
            name: 'Dang',
            likeCount: 3,
        }))
    })

    return (
        <div>
            Đây là trang chủ
            <button style={
                {width: 100,
                height: 100}
            } onClick={createCourse}></button>
        </div>
    );
}

export default HomePage;