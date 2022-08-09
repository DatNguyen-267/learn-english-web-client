import styles from './SideBar.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function SideBar() {
  return (
    <div className={cx('app__sidebar')}>
      <div className={cx('sidebar')}>
        <ul className={cx('sidebar-list')}>
          <li className={cx('sidebar-item ')}>
            <a href="">
              <i className={cx('fas fa-home')}></i>
              <span>Home</span>
            </a>
          </li>
          <li className={cx('sidebar-item')}>
            <a href="" className={cx('active')}>
              <i className={cx('fas fa-book')}></i>
              <span>Khóa học</span>
            </a>
          </li>
          <li className={cx('sidebar-item')}>
            <a href="">
              <i className={cx('fas fa-vial')}></i>
              <span>Luyện Thi</span>
            </a>
          </li>
          <li className={cx('sidebar-item')}>
            <a href="">
              <i className={cx('fas fa-user-cog')}></i>
              <span>Của Tôi</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
