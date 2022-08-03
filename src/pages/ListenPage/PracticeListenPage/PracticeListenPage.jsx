import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LsTopic from '~/components/Listen/LsTopic/LsTopic';
import * as actions from '~/redux/actions/index';
import './PracticeListenPage.scss';

function PracticeListenPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPracticeListenRequest());
  }, [dispatch]);

  const ls = useSelector((state) => state.practiceListen.data);
  return (
    <div className="app-practice-listen grid wide">
      <div className="listen ">
        <div className="listen__header">
          <div className="listen__header-content">
            <div className="listen__header-content__title">
              <h1>Luyện nghe</h1>
              <p>Cung cấp các bài nghe theo từng Part</p>
            </div>
          </div>
        </div>
        <div className="listen__content">
          <div className="topic">
            {ls.map((item) => {
              return <LsTopic topic={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeListenPage;
