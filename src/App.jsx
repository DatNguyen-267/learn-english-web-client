import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from '~/components/Layout/Header/Header';
import { Loading_1 } from '~/components/Loading/Loading_1';
import CoursePage from '~/pages/CoursePage/CoursePage';
import HomePage from '~/pages/HomePage/HomePage';
import NotFoundFage from '~/pages/NotFoundPage/NotFoundPage';

import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '~/api';
import ListWordPage from '~/pages/VocaPage/ListWordPage/ListWordPage';
import GrammarPage from '~/pages/GrammarPage/GrammarPage';
import LearnGrammarPage from '~/pages/GrammarPage/LearnGrammarPage';
import ListenCoursePage from '~/pages/ListenPage/ListenCoursePage/ListenCoursePage';
import PracticeListenPage from '~/pages/ListenPage/PracticeListenPage/PracticeListenPage';
import StorePage from '~/pages/StorePage/StorePage';
import DoTestPage from '~/pages/TestPage/DoTestPage';
import TestPage from '~/pages/TestPage/TestPage';
import UserPage from '~/pages/UserPage/UserPage';
import VocaPage from '~/pages/VocaPage/VocaPage';
import * as actions from '~/redux/actions/index';
import { PopUpLogin } from '~/components/Common/PopUpLogin/PopUpLogin';

axios.defaults.withCredentials = true;
function App() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const popup = useSelector((state) => state.popup);

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.get(`http://localhost:5000/user/refresh_token`, {
          withCredentials: true,
        });
        console.log('Lấy token thành công');
        dispatch(actions.getToken(res.data.access_token));
        dispatch(actions.login_success());
      };
      getToken();
    }
    console.log('bắt unloading');
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
      {loading.isLoading ? <Loading_1 /> : ''}
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
            <Route path="course/voca/list-word" element={<ListWordPage />}></Route>
            <Route path="course" element={<CoursePage />}></Route>
            <Route path="practice-listen" element={<PracticeListenPage />}></Route>
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
