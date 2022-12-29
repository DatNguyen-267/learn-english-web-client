import React, { useEffect, useState } from "react";
import './NoteReport.scss'

export const NoteReport = ({ title, titlesub, btnname,onClick, modalClick}) => {
    const handleOK = () => {
        onClick()
    };
    return (

        <div className="pop-up note-report">
            <div className="modal">
                <div className="modal-overlay" onClick={modalClick}></div>
                <div className="note-report__modal-body modal-body">
                    <div className={`note-report__modal-title ${title == "Success!!!"? "color-title-success":""}`}>
                        {
                            title
                        }
                    </div>
                    <div className="note-report__modal-sub-title">
                        {
                            titlesub
                        }
                    </div>
                    <div className="note-report__modal-option">
                        <button className={title == "Success!!!"? "color-btn-success":""} onClick={handleOK}>{btnname}</button>
                    </div>
                </div>
            </div>
        </div>

    )
}