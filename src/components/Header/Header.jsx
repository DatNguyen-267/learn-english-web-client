import React, { Component, useEffect, useState } from "react";
import "./Header.scss";
import {
  Link,
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../../redux/actions/index";
import axios from "axios";
import { SERVER_URL } from "./../../constants/index";
function Header() {
  const auth = useSelector((state) => state.auth);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let temp;
  const handleLogout = async () => {
    try {
      await axios.get(`${SERVER_URL}/user/logout`);
      localStorage.removeItem("firstLogin");
      dispatch(actions.logout());
      dispatch(actions.resetToken(null));
      navigate("/login");
    } catch (error) {
      // window.location.href = '/'
      console.log("Logout failure");
    }
  };
  useEffect(() => {
    if (auth.isLogged) {
      let avatar = document.querySelector(".navbar__action-avatar");
      let tippy = document.querySelector(".tippy-0");
      let menu = document.querySelector(".menu__user");

      function blurFunc(e) {
        console.log("blur");
        console.log(e.target);
        tippy.style.display = "none";
      }
      // avatar.addEventListener("hover", () => {
      //   tippy.style.display = "block";
      // });
      // avatar.addEventListener("blur", blurFunc);
      // tippy.addEventListener("blur", blurFunc);
      console.log(tippy);

      // window.addEventListener("mousedown", function (event) {
      //   console.log(event.target);
      //   if (event.target === avatar && tippy.style.display === "none") {
      //     tippy.style.display = "block";
      //   } else if (event.target != menu) {
      //     tippy.style.display = "none";
      //   }
      // });
    }
  }, [auth.isLogged]);
  const handleClick = (e, number) => {
    // try {
    //   let item = document.querySelector('.navbar-item .active')
    //   item.classList.remove('active')
    // } catch (error) {

    // }
    setNumber(number);
    // console.log( e.currentTarget.children);
    // e.currentTarget.firstChild.classList.add('active')
  };
  const location = useLocation()
  useEffect(()=>{
    console.log(location)
    if(location.pathname.includes('/store')){
      setNumber(5)
    }
    if(location.pathname.includes('/test')){
      setNumber(4)
    }
    if(location.pathname.includes('/doing-test')){
      setNumber(4)
    }
    if(location.pathname.includes('/practice-listen')){
      setNumber(3)
    }
    if(location.pathname.includes('/grammar')){
      setNumber(2)
    }
    if(location.pathname.includes('/course') && location.pathname.includes('/practice-listen') == false){
      setNumber(1)
    }
    
  })
  return (
    <div className="main-header">
      <div className="grid wide">
        <div className="navbar">
          <div className="navbar__logo">
            <a href="/course" className="">
              <i className="fab fa-bandcamp"></i>
            </a>
            <h5>WaterDog</h5>
          </div>
          <div className="navbar__link">
            <ul className="navbar-list">
              <li onClick={(e) => handleClick(e, 1)} className="navbar-item">
                <Link className={number === 1 ? "active" : ""} to="/course">
                  <span>Từ vựng</span>
                </Link>
              </li>
              <li onClick={(e) => handleClick(e, 2)} className="navbar-item">
                <Link className={number === 2 ? "active" : ""} to="/grammar">
                  <span>Ngữ pháp</span>
                </Link>
              </li>
              <li onClick={(e) => handleClick(e, 3)} className="navbar-item">
                <Link
                  className={number === 3 ? "active" : ""}
                  to="/practice-listen"
                >
                  <span>Luyện Nghe</span>
                </Link>
              </li>
              <li onClick={(e) => handleClick(e, 4)} className="navbar-item">
                <Link className={number === 4 ? "active" : ""} to="/test">
                  <span>Luyện Thi</span>
                </Link>
              </li>
              <li onClick={(e) =>handleClick(e, 5)} className="navbar-item">
                <Link className={number === 5 ? "active" : ""} to="/store">
                  <span>Của Tôi</span>
                </Link>
              </li>
            </ul>
          </div>
          {auth.isLogged && (
            <div className="navbar__action">
              {/* <i className="fas fa-bell navbar__action-notify"></i> */}
              <img
                className="navbar__action-avatar"
                src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                alt=""
              ></img>
              <div className="tippy-0">
                <div className="menu__user">
                  <div className="menu__user-header">
                    <img
                      className="menu__user-header-img"
                      src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                      alt=""
                    ></img>
                    <div className="menu__user-header-info">
                      <div className="menu__user-header-name">Nguyen Dat</div>
                      <div className="menu__user-header-id">ID: 19520040</div>
                    </div>
                  </div>
                  <div className="menu__user-body">
                    {/* <div className="menu__user-group">
                      <hr />
                      <a className="menu__user-group-item">Khóa học của tôi</a>
                      <a className="menu__user-group-item">Trang của tôi</a>
                    </div> */}
                    <div className="menu__user-group">
                      <hr />
                      <div
                        className="menu__user-group-item"
                        onClick={handleLogout}
                      >
                        Đăng xuất
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!auth.isLogged && (
            <div className="navbar__action">
              <Link to="/login" className="navbar__action-login">
                Đăng nhập
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
