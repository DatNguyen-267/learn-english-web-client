import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SERVER_URL } from '~/constants/index';
import * as actions from '~/redux/actions/index';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function Header() {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let temp;
  const handleLogout = async () => {
    try {
      await axios.get(`${SERVER_URL}/user/logout`);
      localStorage.removeItem('firstLogin');
      dispatch(actions.logout());
      dispatch(actions.resetToken(null));
      navigate('/login');
    } catch (error) {
      // window.location.href = '/'
      console.log('Logout failure');
    }
  };
  useEffect(() => {
    if (auth.isLogged) {
      let avatar = document.querySelector('.navbar__action-avatar');
      let tippy = document.querySelector('.tippy-0');
      let menu = document.querySelector('.menu__user');

      function blurFunc(e) {
        console.log('blur');
        console.log(e.target);
        tippy.style.display = 'none';
      }
    }
  }, [auth.isLogged]);
  const handleClick = (e, number) => {
    setNumber(number);
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('/store')) {
      setNumber(5);
    }
    if (location.pathname.includes('/test')) {
      setNumber(4);
    }
    if (location.pathname.includes('/doing-test')) {
      setNumber(4);
    }
    if (location.pathname.includes('/practice-listen')) {
      setNumber(3);
    }
    if (location.pathname.includes('/grammar')) {
      setNumber(2);
    }
    if (
      location.pathname.includes('/course') &&
      location.pathname.includes('/practice-listen') == false
    ) {
      setNumber(1);
    }
  });
  return (
    <div className={cx('main-header')}>
      <div className="grid wide">
        <div className={cx('navbar')}>
          <div className={cx('navbar__logo')}>
            <a href="/course">
              <i className="fab fa-bandcamp"></i>
            </a>
            <h5>WaterDog</h5>
          </div>
          <div className={cx('navbar__link')}>
            <ul className={cx('navbar-list')}>
              <li onClick={(e) => handleClick(e, 1)} className={cx('navbar-item')}>
                <Link className={number === 1 ? 'active' : ''} to="/course">
                  <span>Từ vựng</span>
                </Link>
              </li>
              <li onClick={(e) => handleClick(e, 2)} className={cx('navbar-item')}>
                <Link className={number === 2 ? 'active' : ''} to="/grammar">
                  <span>Ngữ pháp</span>
                </Link>
              </li>
              <li onClick={(e) => handleClick(e, 3)} className={cx('navbar-item')}>
                <Link className={number === 3 ? 'active' : ''} to="/practice-listen">
                  <span>Luyện Nghe</span>
                </Link>
              </li>
              <li onClick={(e) => handleClick(e, 4)} className={cx('navbar-item')}>
                <Link className={number === 4 ? 'active' : ''} to="/test">
                  <span>Luyện Thi</span>
                </Link>
              </li>
              <li onClick={(e) => handleClick(e, 5)} className={cx('navbar-item')}>
                <Link className={number === 5 ? 'active' : ''} to="/store">
                  <span>Của Tôi</span>
                </Link>
              </li>
            </ul>
          </div>
          {auth.isLogged && (
            <div className={cx('navbar__action')}>
              {/* <i className="fas fa-bell navbar__action-notify"></i> */}
              <img
                className={cx('navbar__action-avatar')}
                src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                alt=""
              ></img>
              <div className={cx('tippy-0')}>
                <div className={cx('menu__user')}>
                  <div className={cx('menu__user-header')}>
                    <img
                      className={cx('menu__user-header-img')}
                      src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                      alt=""
                    ></img>
                    <div className={cx('menu__user-header-info')}>
                      <div className={cx('menu__user-header-name')}>
                        {user.data ? user.data.name : 'Unknown'}
                      </div>
                      <div className={cx('menu__user-header-id')}>ID: 19520040</div>
                    </div>
                  </div>
                  <div className={cx('menu__user-body')}>
                    {/* <div className="menu__user-group">
                      <hr />
                      <a className="menu__user-group-item">Khóa học của tôi</a>
                      <a className="menu__user-group-item">Trang của tôi</a>
                    </div> */}
                    <div className={cx('menu__user-group')}>
                      <hr />
                      <div className="{cx(menu__user-group-item)}" onClick={handleLogout}>
                        Đăng xuất
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!auth.isLogged && (
            <div className={cx('navbar__action')}>
              <Link to="/login" className={cx('navbar__action-login')}>
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
