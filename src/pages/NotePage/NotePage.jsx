import React, { useEffect, useState } from "react";
import './NotePage.scss'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Note } from "./../../components/Note/Note";
import { NoteTitle } from "./../../components/Note/NoteTitle";
import { useNavigate } from "react-router-dom";
import * as actions from './../../redux/actions/index'
import { NoteReport } from "../../components/Note/NoteReport";
import axios from 'axios'
import { SERVER_URL } from './../../constants/index'
export const NotePage = () => {

    const dispatch = useDispatch()
    
    const token = useSelector(state => state.token)
    const notes = useSelector(state => state.note.data)
    const isAddSuccess = useSelector(state => state.note.isAddSuccess)
    const isUpdateSuccess = useSelector(state => state.note.isUpdateSuccess)
    const [showNote, setShowNote] = useState(false);
    const [showNoteTitle, setShowNoteTitle] = useState(false);
    const [showReportLogin, setShowReportLogin] = useState(false);
    const [titleNoteChoose, setTitleNoteChoose] = useState();
    const [showPopUp, setShowPopUp] = useState(false);
    const navigator = useNavigate();
    useEffect(() => {
        //dispatch(actions.getNoteRequest({token}))
    }, [dispatch])
   
    useEffect(() => {
        console.log("update result:", isUpdateSuccess)
        if (!isUpdateSuccess) {
            setShowPopUp(true)
        }
    }, [isUpdateSuccess])
    console.log("note: ",notes)
    const handleClick = () => {
        try {
            const checkLogin = async () => {
                try {
                const res = await axios.get(`${SERVER_URL}/user/checkLogin`, { headers: { Authorization: token } })
                if (res.data) {
                    setShowNoteTitle(true);
                    handleLoadNote()
                }
                } catch (error) {
                setShowReportLogin(true)
                }
            }
            checkLogin()
        } catch (error) {
    
        }
        
       
       
    };
    const handleLogin = () => {
        navigator("./login")
    };
    const handleOff = () => {
        setShowReportLogin(false)
    };
    const handleAddNote = (payload) => {
        dispatch(actions.addNoteRequest(payload, token))
    }
    const handleLoadNote = () => {
        dispatch(actions.getNoteRequest({
            token
        }))
    }
    const handleOK = () => {
        setShowPopUp(false)
        handleLoadNote()
    };
    
    return (
        <div className="app-note-page">
            {showPopUp && isUpdateSuccess != undefined && (
                <NoteReport
                    title={isUpdateSuccess ? "Success!!!" : "Warning!!!"}
                    titlesub={isUpdateSuccess ? "Đã lưu thành công!!!" : "Không thể lưu Note!!!"}
                    onClick={handleOK}
                    modalClick={handleOK}
                    btnname={"OK"}
                ></NoteReport>

            )}
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
                // handlePost={handlePost}
                isUpdateSuccess={isUpdateSuccess}
                handleLoadNote={handleLoadNote}
                token={token}
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
                    <span>
                        NotePad
                    </span>

                </div>

            </div>
        </div>
    )
}