import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './constants/Scss/Base.scss'
import './constants/Scss/Grid.scss'
import './assets/fonts/fontawesome/css/all.min.css'
import App from './App';
import {Provider } from 'react-redux'
import store from './redux/configStore';
import { BrowserRouter, Route, Routes, Navigate, useLocation, Router } from "react-router-dom";
import history from './redux/history';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CoursePage from './pages/CoursePage/CoursePage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ActivePage } from './pages/ActivePage/ActivePage';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history = {history} navigator={history}>
      <React.StrictMode >       
          <Routes >
            <Route path="/*" element={<App/>}>
              {/* <Route path="home" element={<HomePage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
              <Route path="course" element={<CoursePage />}></Route> */}
            </Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/user/activate/:activation_token" element={<ActivePage />}></Route>
          </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


