import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TestPage.scss';
import { SERVER_URL } from '~/constants/index';

const TestPage = () => {
  const [lsExam, setLsExam] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [targetExam, setTargetExam] = useState(null);
  const navigator = useNavigate();
  useEffect(() => {
    console.log(lsExam);
  }, [lsExam]);
  useEffect(() => {
    const getAllTest = async () => {
      const res = await axios.get(`${SERVER_URL}/exam/getAllExam`);
      console.log(res.data);
      setLsExam([...res.data]);
    };
    getAllTest();
  }, []);
  const handleClick = (item) => {
    setTargetExam(item);
    setShowPopUp((prev) => true);
  };
  const handleYes = () => {
    navigator(`/doing-test?id-test=${targetExam._id}`);
  };
  const handleNo = () => {
    setShowPopUp((prev) => false);
  };
  return (
    <div className="test-pg">
      {showPopUp && (
        <div className="pop-up">
          <div className="modal">
            <div className="modal-overlay" onClick={handleNo}></div>
            <div className="test-pg__modal-body modal-body">
              <div className="test-pg__modal-title">Bạn đã sẵn sàng bắt đầu làm bài</div>
              <div className="test-pg__modal-sub-title">Test 1</div>
              <div className="test-pg__modal-sub-title">
                <span>{targetExam.time} phút</span> <span>- </span>{' '}
                <span>{targetExam.size} câu</span>
              </div>
              <div className="test-pg__modal-option">
                <button onClick={handleNo}>No</button>
                <button onClick={handleYes}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid wide">
        <div className="base__page-heading">
          <h1>Luyện thi</h1>
          <span>Cung cấp các đề thi sát với đề thi thật, nâng cao khả năng làm bài</span>
        </div>
        <div className="base__group">
          <div className="base__group-title">Full test</div>
          <div className="test-ls">
            <div className="row">
              {lsExam &&
                lsExam.map((item, index) => {
                  if (item.type === 'FULL TEST')
                    return (
                      <div className="col l-4 m-6 c-12">
                        <div
                          className="test-item"
                          key={index}
                          onClick={() => handleClick(item)}
                        >
                          {/* tên, số câu, -> bao điểm -> kết quả lần trước */}
                          <div
                            className="test-item__img"
                            style={{
                              backgroundImage:
                                "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_2_sky6j0.png')",
                            }}
                          ></div>
                          <div className="test-item__gr">
                            <div className="test-item__name">{item.name}</div>
                            <div className="test-item__info">
                              <div className="test-item__time">
                                Thời gian: {item.time}
                              </div>
                              <div className="test-item__ques">Câu hỏi: {item.size}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                })}
            </div>
          </div>
        </div>
        <div className="base__group">
          <div className="base__group-title">Mini test</div>
          <div className="test-ls">
            <div className="row">
              {lsExam &&
                lsExam.map((item, index) => {
                  if (item.type === 'MINI TEST')
                    return (
                      <div className="col l-4 m-6 c-12">
                        <div
                          className="test-item"
                          key={index}
                          onClick={() => handleClick(item)}
                        >
                          <div
                            className="test-item__img"
                            style={{
                              backgroundImage:
                                "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_cz1js8.png')",
                            }}
                          ></div>
                          <div className="test-item__gr">
                            <div className="test-item__name">{item.name}</div>
                            <div className="test-item__info">
                              <div className="test-item__time">
                                Thời gian: {item.time}
                              </div>
                              <div className="test-item__ques">Câu hỏi: {item.size}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                })}
              {/* <div className="col l-4 m-6 c-12">
                <div className="test-item">
                  <div
                    className="test-item__img"
                    style={{
                      backgroundImage:
                        "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_cz1js8.png')",
                    }}
                  ></div>
                  <div className="test-item__gr">
                    <div className="test-item__name">Test 1</div>
                    <div className="test-item__info">
                      <div className="test-item__time">Thời gian</div>
                      <div className="test-item__ques">Câu hỏi</div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
