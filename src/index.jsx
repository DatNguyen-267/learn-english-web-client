import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./constants/Scss/Base.scss";
import "./constants/Scss/Grid.scss";
import "./assets/fonts/fontawesome/css/all.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/configStore";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  Router,
} from "react-router-dom";
import history from "./redux/history";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CoursePage from "./pages/CoursePage/CoursePage";

import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ActivePage } from "./pages/ActivePage/ActivePage";
import { ForgotPage } from "./pages/ActivePage/ForgotPage";
import { ResetPage } from "./pages/ActivePage/ResetPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { VocaLearnPage } from "./pages/LearningPage/VocaLearnPage";
import ListenQuestionPage from "./pages/ListenQuestionPage/ListenQuestionPage";
import { ProgressBar } from "./util/ProgressBar/ProgressBar";
import VocaReviewPage from "./pages/VocaReviewPage/VocaReviewPage";
import ListenQuestionEnd from "./components/ListenQuestionEnd/ListenQuestionEnd";

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
          <Route
            path="/user/reset/:access_token"
            element={<ResetPage />}
          ></Route>
          <Route
            path="/user/activate/:activation_token"
            element={<ActivePage />}
          ></Route>
          <Route path="/learning/voca" element={<VocaLearnPage />}></Route>
          <Route
            path="/practice-listen/part/:id"
            element={<ListenQuestionPage />}
          ></Route>
          {/* <Route path="/test" element={<ProgressBar />}></Route> */}
          <Route path="/voca-review" element={<VocaReviewPage />}></Route>

          <Route path="/end" element={<ListenQuestionEnd />}></Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
