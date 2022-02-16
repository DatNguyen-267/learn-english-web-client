import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import testApi from "./api/testApi";
import HomePage from './pages/HomePage/HomePage'
import CoursePage from './pages/CoursePage/CoursePage'
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { useSelector } from "react-redux";
import * as courseAction from './redux/actions/index'

function App() {
    const dispatch = useDispatch()
    const course = useSelector(state => state.course)
    
    useEffect(() => {
        dispatch(courseAction.getCoursesRequest())
    }, [])
    
    console.log(course) 
    
    return (
        <div >
            <BrowserRouter>
                {/* Header */}
                <Header></Header>
                {/* Body */}
                <div className="body">
                    <SideBar></SideBar>

                    {/* Nội dung trang */}
                    <div className="body-content">
                        <Routes>
                            <Route path="*" element={<Navigate to="/home" />}></Route>
                            {/* Navigate là chuyển hướng về trang khác */}
                            <Route path="/home" element={<HomePage />}></Route>
                            <Route path="/course" element={<CoursePage />}></Route>
                        </Routes>
                    </div>

                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
