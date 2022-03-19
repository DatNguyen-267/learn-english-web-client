
import { BrowserRouter, Route, Routes, Navigate, useLocation, Router, Outlet } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import CoursePage from './pages/CoursePage/CoursePage'
import Header from "./components/Header/Header";
import NotFoundFage from "./pages/NotFoundPage/NotFoundPage";
// import { Loading_1 } from "./components/Loading/Loading_1";
import * as courseAction from './redux/actions/index'
import PracticeListenPage from "./pages/PracticeListenPage/PracticeListenPage";
import ListenCoursePage from "./pages/ListenCoursePage/ListenCoursePage";

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
              <Route path="practice-listen" element={<PracticeListenPage/>}></Route>
              <Route path="practice-listen/course/:id" element={<ListenCoursePage/>}></Route>
              <Route path="*" element={<NotFoundFage />}></Route>
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
