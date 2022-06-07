import React from "react";
import { Link } from "react-router-dom";
import "./VocaCourse.scss";
export const VocaCourse = ({ data }) => {
  return (
    <div className="voca-course__item col l-3 m-4 c-12">
      <div
        className="voca-course__item-img"
        style={{ backgroundImage: `url("${data.image}")` }}
      >
        <Link to={`voca/${data._id}`}>
          <button className="btn voca-course__item-btn">Xem khóa học</button>
        </Link>
      </div>
      <div className="voca-course__item-name">
        <Link to={`voca/${data._id}`}>{data.name}</Link>
      </div>
      <div className="voca-course__item-info">
        {/* <i className="fa fa-users"></i> */}
        {/* <div className="voca-course__item-info-number-follow">{data.follow}</div> */}
      </div>
    </div>
  );
};
