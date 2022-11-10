import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import './Note.scss'

import * as actions from "../../redux/actions/index";
export const Note = ({ showNote, setShowNote, titleNoteChoose, notes, isUpdateSuccess, handleLoadNote, token }) => {
   
    const [note, setNote] = useState(undefined);
   
    const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log("update result:", isUpdateSuccess)
    //     if(isUpdateSuccess == true){
    //         setShowPopUp(true)
    //     }
    // }, [isUpdateSuccess])
    useEffect(() => {
        setNote(findNote(titleNoteChoose))
    }, [titleNoteChoose, notes])

    // console.log("note title:", titleNoteChoose)
    // console.log("note:", note)
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
        var newnote = {
            _id: note._id,
            title: note.title,
            content:`${content}`
        }
        
        handlePost(newnote)
        setShowNote(false)
        // const timeout = setTimeout(()=>{
            
        // }, 1000)
        // timeout()
    };
    const handleNo = () => {
        setShowNote(false);
    };
   
    const handlePost = (payload) => {
        dispatch(actions.updateNoteRequest(payload, token))
      }
    return (
        <div className="note">
           
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