import React, { useEffect, useState } from "react";
import './NoteTitle.scss'
import { NoteReport } from "./NoteReport";
export const NoteTitle = ({ notes, handleAddNote, handleLoadNote, showNoteTitle, setShowNoteTitle, setShowNote, isAddSuccess, setTitleNoteChoose }) => {
    
    const [showPopUp, setShowPopUp] = useState(false);
    const [listnote, setlistnote] = useState(notes);
    useEffect(() => {
        if (isAddSuccess || isAddSuccess == false) {
            setShowPopUp(true)
        }
    }, [isAddSuccess])
    useEffect(() => {
       setlistnote(notes)
    }, [notes])
    const findNoteByTitle = (title) => {
        var note = undefined
        notes.forEach((item) => {
            console.log(title, "-", item.title)
            if (title == item.title) {
                note = item
            }
        })
        return note
    }
    const handleYes = () => {
        var input = document.querySelector('.modal-input-control')
        console.log(input.value)
        if (input.value) {
            console.log(findNoteByTitle(input.value))
            if (!findNoteByTitle(input.value)) {
                handleAddNote({
                    title: input.value,
                    content: "",
                },)
                setShowNoteTitle(false);
            }
            else {
                setShowNote(true)
                setShowNoteTitle(false)
            }
            setTitleNoteChoose(input.value)
        }
        else {
            setShowNoteTitle(false);
            setShowPopUp(true)
        }

    };
    const handleNo = () => {
        setShowNoteTitle(false);
    };
    const handleOK = () => {
        if (isAddSuccess) {
            setShowNote(true)
            setShowPopUp(false)
            handleLoadNote()
        }
        else {
            setShowNoteTitle(true);
            setShowPopUp(false);
            handleLoadNote()
        }
    };
    const handleToggle = (e) => {
        console.log("taget:", e.target)
        var input = document.querySelector('.modal-input-control')
        var message = document.querySelector('.modal-input-message')
        if (e.target == input) {
            message.style.display = 'block'
        }
        else {
            var list = document.querySelectorAll('.message-value')
            list.forEach((item) => {
                if (e.target == item) {

                    input.value = item.innerText
                }
            })
            message.style.display = 'none'
        }



    }
    const handleSearch = () => {
        var value = document.getElementById("modal-input").value
        //console.log("Bạn đã viết: ", value)
        if (value) {
            var listData = []
            notes.forEach((item, index) => {
            if (item.title.search(value) == 0) {
                listData.push(item)
            }
            })
            setlistnote(listData)
        
        }
        else {
            if (notes) {
                setlistnote(notes);
            }
        }
    }
    return (
        <div className="note-title">
            {showPopUp && (
                <NoteReport
                    title={isAddSuccess? "Success!!!":"Warning!!!"}
                    titlesub={isAddSuccess?"Đã tạo thành công!!!": isAddSuccess==false? "Không thể tạo Note!!!":"Bạn cần điền tiêu đề cho NotePad!!!"}
                    onClick={handleOK}
                    modalClick={handleOK}
                    btnname={"OK"}
                ></NoteReport>
                // <div className="pop-up">
                //     <div className="modal">
                //         <div className="modal-overlay" onClick={handleOK}></div>
                //         <div className="note-title-report__modal-body modal-body">
                //             <div className="note-title-report__modal-title">
                //                 {
                //                     isAddSuccess?"Đã tạo thành công!!"Không thể tạo Note!!!":"Bạn cần điền tiêu đề cho NotePad!!!"
                //                 }


                //             </div>
                //             <div className="note-title-report__modal-option">
                //                 <button onClick={handleOK}>OK</button>
                //             </div>
                //         </div>
                //     </div>
                // </div>
            )}
            {
                showNoteTitle && (
                    <div className="pop-up">
                        <div className="modal">
                            <div className="modal-overlay" onClick={handleNo}></div>
                            <div className="note-title__modal-body modal-body" onClick={handleToggle}>

                                <div className="note-title__modal-title">
                                    <img src={require(`../../assets/img/note/note1.png`)} alt="" />
                                    <span>NotePad</span>
                                </div>
                                <div class="note-title__modal-group">
                                    <span class="note-title__modal-label">Title</span>
                                    <div className="note-title__modal-input">
                                        <input name="" id="modal-input" className="modal-input-control" placeholder="Chose or create new ..." onInput={handleSearch} />
                                        <span className="modal-input-message">
                                            {
                                                listnote != undefined ? listnote.map((item, index) => {
                                                    return (
                                                        <p className="message-value">{item.title}</p>
                                                    )
                                                }) : ""
                                            }
                                        </span>
                                    </div>

                                </div>
                                <div className="note-title__modal-option">
                                    <button onClick={handleNo}>Cancel</button>
                                    <button onClick={handleYes}>Create or Change</button>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
        </div>

    )
}