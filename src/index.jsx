import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '~/App';
import '~/assets/fonts/fontawesome/css/all.min.css';
import ListenQuestionEnd from '~/components/Listen/ListenQuestionEnd/ListenQuestionEnd';
// import '~/constants/Base.scss';
// import '~/constants/Grid.scss';
import '~/index.scss';
import ActivePage from '~/pages/AuthPage/ActivePage';
import ForgotPage from '~/pages/AuthPage/ForgotPage';
import LoginPage from '~/pages/AuthPage/LoginPage';
import RegisterPage from '~/pages/AuthPage/RegisterPage';
import ResetPage from '~/pages/AuthPage/ResetPage';
import VocaLearnPage from '~/pages/VocaPage/LearningPage/VocaLearnPage';
import ListenQuestionPage from '~/pages/ListenPage/ListenQuestionPage/ListenQuestionPage';
import VocaReviewPage from '~/pages/VocaPage/VocaReviewPage/VocaReviewPage';
import store from '~/redux/configStore';
import history from '~/redux/history';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history} navigator={history}>
      <React.StrictMode>
        <Routes>
          <Route path="/*" element={<App />}>
            {/* <Route path="home" element={<HomePage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
              <Route path="course" element={<CoursePage />}></Route> */}
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/forgot" element={<ForgotPage />}></Route>
          <Route path="/user/reset/:access_token" element={<ResetPage />}></Route>
          <Route path="/user/activate/:activation_token" element={<ActivePage />}></Route>
          <Route path="/learning/voca" element={<VocaLearnPage />}></Route>
          <Route
            path="/practice-listen/part/:id"
            element={<ListenQuestionPage />}
          ></Route>
          {/* <Route path="/test" element={<ProgressBar />}></Route> */}
          <Route path="/voca-review" element={<VocaReviewPage />}></Route>

          {/* <Route path="/test" element={<ProgressBar />}></Route> */}
          <Route path="/end" element={<ListenQuestionEnd />}></Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
