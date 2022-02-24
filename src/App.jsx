import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate, useLocation, Router, Outlet } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import CoursePage from './pages/CoursePage/CoursePage'
import Header from "./components/Header/Header";
import NotFoundFage from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import history from "./redux/history";
// import Loading from "./components/Loading/Loading";
// import { Loading_1 } from "./components/Loading/Loading_1";
// import { Loading_2 } from "./components/Loading/Loading_2";

function App() {
  const loading = true
  return (
    <div >
        {/* {loading ? (<Loading_1/>) : ""} */}
        <Header></Header>
        <div className="body">
          {/* Nội dung trang */}
          <div className="main-content">
            <Outlet></Outlet>
            <Routes >
              {/* <Route path="*" element={<Navigate to="/home" />}></Route> */}
              {/* Navigate là chuyển hướng về trang khác */}
              <Route path="home" element={<HomePage />}></Route>
              {/* <Route path="/login" element={<LoginPage />}></Route> */}
              <Route path="course" element={<CoursePage />}></Route>
              <Route path="*" element={<NotFoundFage />}></Route>
            </Routes>
          </div>

        </div>
        
    </div>
  );
}

export default App;
