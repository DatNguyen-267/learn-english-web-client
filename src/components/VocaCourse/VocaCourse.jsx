import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './VocaCourse.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
const cx = className.bind(styles);

export const VocaCourse = ({ data }) => {
  return (
    <div className={cx('voca-course__item', 'col', 'l-3', 'm-4', 'c-12')}>
      <div
        className={cx('voca-course__item-img')}
        style={{ backgroundImage: `url("${data.image}")` }}
      >
        <Link to={`voca/${data._id}`}>
          <button className={cx('voca-course__item-btn', 'btn')}>Xem khóa học</button>
        </Link>
      </div>
      <div className={cx('voca-course__item-name')}>
        <Link to={`voca/${data._id}`}>{data.name}</Link>
      </div>
      <div className={cx('voca-course__item-info')}>
        {/* <i className="fa fa-users"></i> */}
        {/* <div className="voca-course__item-info-number-follow">{data.follow}</div> */}
      </div>
      {/* <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon> */}
    </div>
  );
};
