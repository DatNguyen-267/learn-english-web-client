import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LsPart from '~/components/Listen/LsPart/LsPart';
import * as actions from '~/redux/actions/index';
import './ListenCoursePage.scss';

function ListenCoursePage() {
  const param = useParams();
  const id = param.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getListenCourseRequest(id));
  }, [dispatch]);

  const data = useSelector((state) => state.listenCourse.data);
  let lscourse = {};
  for (const item in data) {
    if (data[item]._id === id) {
      lscourse = data[item];
    }
  }
  let list_part = [];
  if (lscourse && lscourse.list_part) {
    list_part = lscourse.list_part;
  }
  return (
    <div className="app-course-listen grid wide">
      <div className="listen-part">
        <div className="listen-part__header">
          <div className="listen-part__header-content">
            <div className="listen-part__header-content__title">
              <h1>{lscourse ? lscourse.name : ''}</h1>
              <p>Danh sách các part</p>
            </div>
          </div>
        </div>
        <div className="listen-part__content">
          <div className="parts row">
            {list_part.map((item) => {
              return <LsPart part={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListenCoursePage;
