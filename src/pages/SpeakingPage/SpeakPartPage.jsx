import React, { Component } from "react";
import "./SpeakPartPage.scss";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../../redux/actions/index";
import { SERVER_URL } from "../../constants";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SpPart from "../../components/Speaking/SpPart"

axios.defaults.withCredentials = true;
function SpeakPartPage() {

  const dispatch = useDispatch();
  const param = useParams()
  const part = param.part
  const data = useSelector(state => state.speakLesson.data)
  const [name, setName] = useState("");
  const [newname, setNewName] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [targetPart, setTargetPart] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    handleSetName()
    dispatch(actions.getSpeakLessonRequest(part))
  }, [dispatch])

  const handleSetName = () => {
    if (part == "Part1") {
      setName("Read aloud")
    }
    if (part == "Part2") {
      setName("Describe Pictures")
    }
    if (part == "Part3") {
      setName("Respond to questions")
    }
    if (part == "Part4") {
      setName("Respond with information")
    }
    if (part == "Part5") {
      setName("Express an opinion")
    }
  }
  console.log("data speaking: ", data)

  const handleClick = (part, name) => {
    setTargetPart(part)
    setShowPopUp(true);
    setNewName(name)
   
  };
  const handleYes = () => {
    navigator(`/speaking/part/${newname}/${targetPart._id}`);
  };
  const handleNo = () => {
    setShowPopUp(false);
  };
  return (
    <div className="grid wide">
      {showPopUp && (
        <div className="pop-up">
          <div className="modal">
            <div className="modal-overlay" onClick={handleNo}></div>
            <div className="lscourse-page__modal-body modal-body">
              <div className="lscourse-page__modal-title">
                Bạn đã sẵn sàng bắt đầu làm bài
              </div>
              <div className="lscourse-page__modal-sub-title">{targetPart.name}</div>
              <div className="lscourse-page__modal-option">
                <button onClick={handleNo}>No</button>
                <button onClick={handleYes}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div class="speak-part-page-header">
        <div class="speak-part-page-title base__page-heading">
          <h1>{name ? name : ""}</h1>
          <span>
            Cung cấp các đoạn văn hỗ trợ việc luyện tập của người dùng
          </span>
        </div>
      </div>
      <div class="speak-part-page-content">
        <div class="row speaking-list">
          {
            data ? data.map((item, index)=>{
              return(
                <SpPart part={item} name={`${name} ${index+1}`} handleClick={handleClick}></SpPart>
              )
            }):""
          }
        </div>
      </div>
    </div>
  );
}

export default SpeakPartPage;
