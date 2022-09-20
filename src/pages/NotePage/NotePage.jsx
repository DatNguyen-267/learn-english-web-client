import React, { useEffect, useState } from "react";
import "./NotePage.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Note } from "./../../components/Note/Note";
import { NoteTitle } from "./../../components/Note/NoteTitle";
import { useNavigate } from "react-router-dom";
import * as actions from "./../../redux/actions/index";
import { NoteReport } from "../../components/Note/NoteReport";
export const NotePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getNoteRequest());
  }, []);

  const token = useSelector((state) => state.token);
  const notes = useSelector((state) => state.note.data);
  const isAddSuccess = useSelector((state) => state.note.isAddSuccess);
  const isUpdateSuccess = useSelector((state) => state.note.isUpdateSuccess);
  const [showNote, setShowNote] = useState(false);
  const [showNoteTitle, setShowNoteTitle] = useState(false);
  const [showReportLogin, setShowReportLogin] = useState(false);
  const [titleNoteChoose, setTitleNoteChoose] = useState();
  const navigator = useNavigate();

  const handleClick = () => {
    handleLoadNote();
    console.log("Danh sach note: ", notes);
    if (token) {
      setShowNoteTitle(true);
    } else {
      setShowReportLogin(true);
    }
  };
  const handleLogin = () => {
    navigator("./login");
  };
  const handleOff = () => {
    setShowReportLogin(false);
  };
  const handleAddNote = (payload) => {
    dispatch(actions.addNoteRequest(payload));
  };
  const handleLoadNote = () => {
    dispatch(actions.getNoteRequest());
  };
  const handlePost = (payload) => {
    dispatch(actions.udateNoteRequest(payload));
  };
  return (
    <div className="app-note-page">
      {showReportLogin && (
        <NoteReport
          title={"Warning!!!"}
          titlesub={"Bạn cần đăng nhập tài khoản cá nhân"}
          onClick={handleLogin}
          modalClick={handleOff}
          btnname={"Đăng nhập"}
        ></NoteReport>
        // <div className="pop-up">
        //     <div className="modal">
        //         <div className="modal-overlay" onClick={handleOff}></div>
        //         <div className="note-report__modal-body modal-body">
        //             <div className="note-report__modal-title">
        //                 Warning!!!
        //             </div>
        //             <div className="note-report__modal-sub-title">
        //                 Bạn cần đăng nhập tài khoản cá nhân
        //             </div>
        //             <div className="note-report__modal-option">
        //                 <button onClick={handleLogin}>Đăng nhập</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
      )}
      <Note
        notes={notes}
        showNote={showNote}
        setShowNote={setShowNote}
        titleNoteChoose={titleNoteChoose}
        handlePost={handlePost}
        isUpdateSuccess={isUpdateSuccess}
      ></Note>
      <NoteTitle
        showNoteTitle={showNoteTitle}
        setShowNoteTitle={setShowNoteTitle}
        setShowNote={setShowNote}
        notes={notes}
        handleAddNote={handleAddNote}
        handleLoadNote={handleLoadNote}
        isAddSuccess={isAddSuccess}
        setTitleNoteChoose={setTitleNoteChoose}
      ></NoteTitle>

      <div className="note-page" onClick={handleClick}>
        <div className="note-page-header">
          <img src={require(`../../assets/img/note/note1.png`)} alt="" />
        </div>
        <div className="note-page-content">
          <span>NotePad</span>
        </div>
      </div>
    </div>
  );
};
