import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  Router,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CoursePage from "./pages/CoursePage/CoursePage";
import Header from "./components/Header/Header";
import NotFoundFage from "./pages/NotFoundPage/NotFoundPage";
import { Loading_1 } from "./components/Loading/Loading_1";
import * as courseAction from "./redux/actions/index";
import PracticeListenPage from "./pages/PracticeListenPage/PracticeListenPage";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "./redux/actions/index";
import axios from "axios";
import { SERVER_URL } from "./constants/index";
import { fetchUser } from "./api";
import { UserPage } from "./pages/UserPage/UserPage";
import GrammarPage from "./pages/GrammarPage/GrammarPage";
import LearnGrammarPage from "./pages/GrammarPage/LearnGrammarPage";
import { VocaPage } from "./pages/VocaPage/VocaPage";

import ListenCoursePage from "./pages/ListenCoursePage/ListenCoursePage";
import { PopUpLogin } from "./util/PopUpLogin/PopUpLogin";
import { VocaLearnPage } from "./pages/LearningPage/VocaLearnPage";
import { ListWordPage } from "./pages/ListWordPage/ListWordPage";
import { TestPage } from "./pages/TestPage/TestPage";
import { DoTestPage } from "./pages/TestPage/DoTestPage";
import StorePage from "./pages/StorePage/StorePage";

axios.defaults.withCredentials = true;
function App() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const popup = useSelector((state) => state.popup);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.get(
          `http://localhost:5000/user/refresh_token`,
          {
            withCredentials: true,
          }
        );
        console.log("Lấy token thành công");
        dispatch(actions.getToken(res.data.access_token));
        dispatch(actions.login_success());
      };
      getToken();
    }
    console.log("bắt unloading");
    dispatch(actions.unLoadingRequest());
  }, []);
  useEffect(() => {
    if (token) {
      const getUser = () => {
        // console.log(token)
        return fetchUser(token).then((res) => {
          dispatch(actions.get_user(res.data));
          console.log(res);
        });
      };
      getUser();
    }
  }, [auth.isLogged, token]);
  return (
    <div>
      {popup.login && <PopUpLogin></PopUpLogin>}
      {loading.isLoading ? <Loading_1 /> : ""}
      <Header></Header>
      <div className="body">
        {/* Nội dung trang */}
        <div className="main-content">
          <Outlet></Outlet>
          <Routes>
            <Route path="/" element={<Navigate to="/course" />}></Route>
            {/* Navigate là chuyển hướng về trang khác */}
            {/* <Route path="/" element={<CoursePage />}></Route> */}
            <Route path="home" element={<HomePage />}></Route>
            <Route path="/user-infor" element={<UserPage />}></Route>
            <Route path="grammar" element={<GrammarPage></GrammarPage>}></Route>
            <Route
              path="grammar/:id"
              element={<LearnGrammarPage></LearnGrammarPage>}
            ></Route>
            <Route path="course/voca/:id" element={<VocaPage />}></Route>
            <Route
              path="course/voca/list-word"
              element={<ListWordPage />}
            ></Route>
            <Route path="course" element={<CoursePage />}></Route>
            <Route
              path="practice-listen"
              element={<PracticeListenPage />}
            ></Route>
            <Route
              path="practice-listen/course/:id"
              element={<ListenCoursePage />}
            ></Route>
            <Route path="store" element={<StorePage />}></Route>
            <Route path="test" element={<TestPage />}></Route>
            <Route path="doing-test" element={<DoTestPage />}></Route>
            <Route path="*" element={<NotFoundFage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
