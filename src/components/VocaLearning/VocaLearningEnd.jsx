import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import "./VocaLearningEnd.scss";
import { SERVER_URL } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";

export const VocaLearningEnd = ({ topic, courseId }) => {
  let audio = new SpeechSynthesisUtterance();
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const search = useLocation().search;
  const vocaCourseName = new URLSearchParams(search).get("voca-course-name");

  const handleSave = (e, id) => {
    if (!e.target.classList.contains("active")) {
      try {
        const addWordToStore = async () => {
          let res = await axios.post(
            `${SERVER_URL}/courses/voca/addWordToStore`,
            {
              idWord: id,
            },
            {
              headers: { Authorization: token },
            }
          );
          if (res.data === "success") {
            console.log("add active");
            e.target.classList.add("active");
          }
        };
        addWordToStore();
      } catch (error) {}
    } else {
      try {
        const removeWordToStore = async () => {
          let res = await axios.post(
            `${SERVER_URL}/courses/voca/removeWordOfStore`,
            {
              idWord: id,
            },
            {
              headers: { Authorization: token },
            }
          );
          if (res.data === "success") {
            e.target.classList.remove("active");
          }
        };
        removeWordToStore();
      } catch (error) {}
    }
  };

  const handleSpeech = (sentence) => {
    // console.log("speeach");
    // audio.text = sentence;
    // audio.pitch = 1.3;
    // audio.rate = 1.3;
    // window.speechSynthesis.speak(audio);
    let audio = new Audio(`https://600tuvungtoeic.com//audio/${sentence}.mp3`);
    audio.play();
  };
  const handleBack = () => {
    navigate(`/course/voca/${courseId}`);
  };
  const handleNext = () => {
    try {
      const checkCompleteTopic = async () => {
        let res = await axios.get(
          `${SERVER_URL}/courses/voca/checkCompleteTopic/${courseId}/${topic._id}`,
          {
            headers: { Authorization: token },
          }
        );
        if (res.data === "success") {
          navigate(
            `/learning/voca?course-id=${courseId}&topic-id=${res.data.next_topic}&voca-course-name=`
          );
        }
      };
      checkCompleteTopic();
    } catch (error) {}
  };
  return (
    <div>
      <div className="voca-ln-end__header">
        <div className="voca-ln-end__header-main-title">
          Chúc mừng bạn đã hoàn thành
        </div>
        <span className="voca-ln-end__header-sub-title">
          Hãy xem lại những từ này một lần nữa
        </span>
        <div className="voca-ln-end__header-option">
          <button onClick={handleBack} className="voca-ln-end__header-btn-back">
            Quay về
          </button>
          {/* <button onClick={handleNext} className='voca-ln-end__header-btn-next'>Học tiếp</button > */}
        </div>
      </div>
      <div className="voca-ln-end__container">
        <div className="voca-ln-end__container-list">
          {/* <div className="voca-ln-end__container-head">
            <div className="voca-ln-end__item-head-item">Từ vựng</div>
            <div className='voca-ln-end__item-head-item'>Tiếng việt</div>
          </div> */}
          {topic &&
            topic.list_word.map((item, index) => (
              <div className="voca-ln-end__container-item">
                <div className="voca-ln-end__item-endlish">
                  <div>{item.english}</div>
                  <span>{item.phonetic}</span>
                </div>
                <div className="voca-ln-end__item-vietnamese">
                  {`(${item.meanings[0].partOfSpeech}) ${item.meanings[0].vietnamese}`}
                </div>
                <div className="voca-ln-end__item-option">
                  <i
                    onClick={(e) => handleSave(e, item._id)}
                    className={`${
                      item.isSave ? "active" : ""
                    } voca-ln-end__item-option-heart fas fa-heart`}
                  ></i>
                  <i
                    onClick={() => handleSpeech(item.english)}
                    className="fas fa-volume-up"
                  ></i>
                </div>
              </div>
            ))}
          {/* <div className="voca-ln-end__container-item">
            <div className="voca-ln-end__item-endlish">
              <div>Compare</div>
              <span>/krompa:i</span>
            </div>
            <div className='voca-ln-end__item-vietnamese'>So sánh, đối chiếu</div>
            <div className='voca-ln-end__item-option'>
              <i className="voca-ln-end__item-option-heart fas fa-heart"></i>
              <i className="fas fa-volume-up"></i>
            </div>
          </div>
          <div className="voca-ln-end__container-item">
            <div className="voca-ln-end__item-endlish">
              <div>Compare</div>
              <span>/krompa:i</span>
            </div>
            <div className='voca-ln-end__item-vietnamese'>So sánh, đối chiếu</div>
            <div className='voca-ln-end__item-option'>
              <i className="active voca-ln-end__item-option-heart fas fa-heart"></i>
              <i className="fas fa-volume-up"></i>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
