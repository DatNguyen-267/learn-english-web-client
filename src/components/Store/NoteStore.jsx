import React, { useEffect, useState } from "react";
import './NoteStore.scss'
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";

function formatDate(value) {
    var date = new Date(value)
    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear()
    return day + "/" + month + "/" + year
}
export const NoteStore = ({ note, index, setShowNote, setTitleNoteChoose, handleLoadNote, token }) => {
    const dispatch = useDispatch();
    const [popUp, setpopUp] = useState(false);

    const handleClick = (e) => {
        if (e.target.tagName != 'I') {
            setTitleNoteChoose(note.title)
            setShowNote(true)
        }
    }
    const handleDelete = (id) => {
        setpopUp(true)
    }
    const handleYes = () => {
        dispatch(actions.removeNoteRequest(note, token))
        setpopUp(false);
    }
    const handleNo = () => {
        setpopUp(false);
    }

    return (
        <div className="note-store">

            {popUp && (
                <div className="pop-up">
                    <div className="modal">
                        <div className="modal-overlay" onClick={handleNo}></div>
                        <div className="test-pg__modal-body modal-body">
                            <div className="store-pg__modal-title">
                                Bạn muốn xóa từ <b>{note.title}</b> ra khỏi danh sách
                            </div>
                            {/* <div className="store-pg__modal-sub-title">Test 1</div> */}

                            <div className="store-pg__modal-option">
                                <button onClick={handleNo}>No</button>
                                <button onClick={handleYes}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* <i className="fas fa-ellipsis-v remove-icon"></i> */}
            <div className="note-store-item" onClick={handleClick}>
                <i class="note-store-item__remove fas fa-window-close" onClick={() => handleDelete(note._id)}></i>
                {/* <div className="note-store-item__img">
                    <span>Note Pad</span>
                </div> */}
                <div className="note-store-item__gr">
                    <div className="note-store-item__info">
                        <div className="note-store-item__time">
                            {/* <i class="far fa-clock"></i> */}
                            {formatDate(note.createdAt)}
                        </div>
                    </div>
                    <div className="note-store-item__name">{note.title ? note.title : ""}</div>
                    <div className="note-store-item__content" contenteditable="false" dangerouslySetInnerHTML={{ __html: note ? note.content : "" }}></div>

                </div>
            </div>
        </div>

    )
}