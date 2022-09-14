import React, { useEffect, useState } from "react";
import './Note.scss'
import { NoteReport } from "./NoteReport";

export const Note = ({ showNote, setShowNote, titleNoteChoose, notes, handlePost, isUpdateSuccess }) => {
    const [note, setNote] = useState(undefined);
    const [showPopUp, setShowPopUp] = useState(false);
    useEffect(() => {
        setNote(findNote(titleNoteChoose))

    }, [titleNoteChoose, notes])

    console.log("note title:", titleNoteChoose)
    console.log("note:", note)
    const findNote = (title) => {
        var note = undefined
        notes.forEach((item) => {
            if (item.title == title) {
                note = item
            }
        })
        return note
    }
    const handleYes = () => {
        var content = document.querySelector('.note__modal-content').innerHTML
        var newnote = note
        newnote.content = `${content}`
        setNote(newnote)
        handlePost(note)

        setShowNote(false)
        setShowPopUp(true)

    };
    const handleNo = () => {
        setShowNote(false);
    };
    const handleOK = () => {
        if (isUpdateSuccess) {
            setShowPopUp(false)
        }
        else {
            setShowNote(true);
            setShowPopUp(false);
        }
    };
    return (
        <div className="note">

            {showPopUp && (
                <NoteReport
                    title={isUpdateSuccess ? "Success!!!" : "Warning!!!"}
                    titlesub={isUpdateSuccess ? "Đã lưu thành công!!!": "Không thể lưu Note!!!"}
                    onClick={handleOK}
                    modalClick={handleOK}
                    btnname={"OK"}
                ></NoteReport>
                // <div className="pop-up">
                //     <div className="modal">
                //         <div className="modal-overlay" onClick={handleOK}></div>
                //         <div className="note-report__modal-body modal-body">
                //             <div className="note-report__modal-title">
                //                 {
                //                     isUpdateSuccess ? "Đã lưu thành công!!!": "Không thể lưu Note!!!"
                //                 }         
                //             </div>
                //             <div className="note-report__modal-option">
                //                 <button onClick={handleOK}>OK</button>
                //             </div>
                //         </div>
                //     </div>
                // </div>
            )}

            {showNote && (
                <div className="pop-up">
                    <div className="modal">
                        <div className="modal-overlay" onClick={handleNo}></div>
                        <div className="note__modal-body modal-body">

                            <div className="note__modal-title">
                                <img src={require(`../../assets/img/note/note1.png`)} alt="" />
                                <span>NotePad</span>
                            </div>
                            <div contenteditable="true" className="note__modal-content" placeholder="Type something . . ." dangerouslySetInnerHTML={{ __html: note ? note.content : "" }}>

                            </div>
                            <div className="note__modal-option">
                                <button onClick={handleNo}>Cancel</button>
                                <button onClick={handleYes}>Save</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}