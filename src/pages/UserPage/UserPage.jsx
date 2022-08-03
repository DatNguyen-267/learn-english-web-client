import React from 'react';
import './UserPage.scss';

export default function UserPage() {
  return (
    <div className="user-page">
      <div className="grid wide">
        <div className="container">
          <div className="infor row">
            <div className="col l-1">
              <div className="avatar" alt="" />
            </div>
            <div className="col l-11">
              <div className="infor-detail">
                <div className="infor-name">Đạt Nguyễn</div>
                <div className="infor-email">
                  <i className="fa fa-envelope"></i>dat@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="study">
            <div className="group">
              <div className="group-title">Các khóa gần đây</div>
              <div className="row group-list">
                <div className="col l-3">
                  <div className="group-item">
                    {/* <div className="course__item-img" >
                        <button class="btn course__item-btn">Xem khóa học</button>
                      </div> */}
                    <div className="course__item-name">
                      <a href="">Từ vựng căn bản</a>
                    </div>
                    <div className="course__item-info">
                      <i className="fa fa-users"></i>
                      <div className="course__item-info-number-follow">145.050</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
