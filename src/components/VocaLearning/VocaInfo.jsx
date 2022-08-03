import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SERVER_URL } from '~/constants/index';
import './VocaInfo.scss';
export const VocaInfo = ({ data, err }) => {
  const { speak, speakSlow } = useSelector((state) => state.speak);
  const token = useSelector((state) => state.token);
  const [isSave, setIsSave] = useState(data.isSave);
  useEffect(() => {
    setIsSave((prev) => data.isSave);
  });
  const handleSpeech = () => {
    // speak.text = data.english;
    // speechSynthesis.speak(speak);
    let audio = new Audio(`https://600tuvungtoeic.com//audio/${data.english}.mp3`);
    audio.play();
  };
  const handleSpeechEx = () => {
    speakSlow.text = data.example.sentense;
    speechSynthesis.speak(speakSlow);
  };
  const handleSave = () => {
    if (isSave === false) {
      try {
        const addWordToStore = async () => {
          let res = await axios.post(
            `${SERVER_URL}/courses/voca/addWordToStore`,
            {
              idWord: data._id,
            },
            {
              headers: { Authorization: token },
            }
          );
          if (res.data === 'success') {
            data.isSave = true;
            setIsSave(data.isSave);
          }
          console.log(res);
        };
        addWordToStore();
      } catch (error) {}
    } else {
      try {
        const removeWordToStore = async () => {
          let res = await axios.post(
            `${SERVER_URL}/courses/voca/removeWordOfStore`,
            {
              idWord: data._id,
            },
            {
              headers: { Authorization: token },
            }
          );
          if (res.data === 'success') {
            data.isSave = false;
            setIsSave(data.isSave);
          }
          console.log(res);
        };
        removeWordToStore();
      } catch (error) {}
    }
  };
  return (
    <div className="learn__body-info">
      {err === true && (
        <div className="learn__body-info-errMsg">Bạn trả lời sai từ này</div>
      )}
      <div className="learn__body-item">
        <div className="learn__body-item-content main">
          {data ? data.english : ''}
          <i
            className="learn__body-item-icon fas fa-volume-up"
            onClick={handleSpeech}
          ></i>
          <i
            className={`learn__body-item-icon fa fa-heart ${isSave ? 'active' : ''}`}
            onClick={handleSave}
          ></i>
        </div>
        <div className="sub-info">{data.phonetic}</div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Tiếng việt</div>
        <div className="learn__body-item-content">
          ({data ? data.meanings[0].partOfSpeech : ''}){' '}
          {data ? data.meanings[0].vietnamese : ''}
        </div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Đồng nghĩa</div>
        <div className="learn__body-item-content">
          {data ? data.meanings[0].synonyms : ''}
        </div>
      </div>
      <div className="learn__body-item">
        <div className="learn__body-item-title">Ví dụ</div>
        <div className="learn__body-item-example">
          <i className="fas fa-volume-up" onClick={handleSpeechEx}></i>
          <span>{data ? data.example.sentense : ''}</span>
        </div>
      </div>
    </div>
  );
};
