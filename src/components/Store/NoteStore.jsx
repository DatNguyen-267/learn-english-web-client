import React, { useEffect, useState } from "react";
import './NoteStore.scss'

function formatDate(value) {
    var date = new Date(value)
    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear()
    return day + "/" + month + "/" + year
}
export const NoteStore = ({ note, index, setShowNote, setTitleNoteChoose }) => {

    const handleClick = (e) => {
       if(e.target.tagName != 'I')
       {
        setTitleNoteChoose(note.title)
        setShowNote(true)
       }
        
    }
    // if (note) {
    //     console.log(formatDate(note.updatedAt))
    // }
    // console.log("note: ", note)
    const handleDelete = (id)=>{
        console.log("id: ", id)
    }
    return (

        <div className="note-store-item" onClick={handleClick}>
          
            {/* <i className="fas fa-ellipsis-v remove-icon"></i> */}
            <i class="note-store-item__remove fas fa-window-close" onClick={()=>handleDelete(note._id)}></i>
          
            <div className="note-store-item__img">
                <span>Note Pad</span>
            </div>
            <div className="note-store-item__gr">
                <div className="note-store-item__name">{note.title ? note.title : ""}</div>
                <div className="note-store-item__info">
                    <div className="note-store-item__time">
                        <i class="far fa-clock"></i>
                        {formatDate(note.createdAt)}
                    </div>
                </div>
            </div>
        </div>

    )
}