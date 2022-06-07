import React, { Component, useEffect } from "react";
import "./CoursePage.scss";
import { Link } from "react-router-dom";
import { VocaCourse } from "../../components/VocaCourse/VocaCourse";
import { Search } from "../../components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../../redux/actions/index";
import { SERVER_URL } from "./../../constants/index";
import axios from "axios";

axios.defaults.withCredentials = true;
function CoursePage() {
  const course = useSelector((state) => state.course);
  const voca = course.voca;
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const getVoca = async () => {
        const res = await axios.get(`${SERVER_URL}/courses/voca`);
        dispatch(actions.getAllVocaSuccess(res.data));
      };
      getVoca();
    } catch (error) {
      dispatch(actions.getAllVocaFailure());
    }
  }, []);

  return (
    <div className="grid wide">
      <div className="course-page">
        <div className="base__page-heading">
          <h1>Từ vựng</h1>
          <span>
            Cung cấp các khóa học về từ vựng, ngữ pháp, đang thịnh hành trên
            trang web
          </span>
        </div>
        {/* <div className="course-page__tab">
          <a className='course-page__tab-item active' href='#'>
            <i className="fas fa-book"></i>Từ vựng</a>
          <a className='course-page__tab-item' href='#'>
            <i className="fas fa-spell-check"></i>Ngữ pháp</a>
          <a className='course-page__tab-item' href='#'>
            <i className="fas fa-headphones"></i>Luyện nghe</a>
        </div> */}
        <div className="base__group">
          <div className="base__group-title"> </div>
          {/* <div className="course-tool">
            <Search></Search>
            <button className='course-tool__quick-select active'>Tất cả</button>
            <button className='course-tool__quick-select '>TOEIC</button>
            <button className='course-tool__quick-select'>IELTS</button>
            <button className='course-tool__quick-select'>Đã Theo dõi</button>
          </div> */}
          <div className="course-list">
            <div className="row">
              {voca != undefined &&
                voca.map((item, index) => (
                  <VocaCourse key={index} data={item}></VocaCourse>
                ))}
            </div>
          </div>
        </div>
        {/* <div className="base__group">
          <div className="base__group-title">Từ vựng IELTS</div>
           <div className="course-tool">
            <Search></Search>
            <button className='course-tool__quick-select active'>Tất cả</button>
            <button className='course-tool__quick-select '>TOEIC</button>
            <button className='course-tool__quick-select'>IELTS</button>
            <button className='course-tool__quick-select'>Đã Theo dõi</button>
          </div> 
          <div className="course-list">
            <div className="row">
              {voca != undefined &&
                voca.map((item, index) => (
                  <VocaCourse key={index} data={item}></VocaCourse>
                ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CoursePage;
