import React, { useEffect, useState, useRef } from 'react';
import "./WriteInput.scss"
function WriteInput({ question_playing, setIsRecord, isRecord, data, isReadOnly }) {


    /*--------------------------Time------------------------*/
    const [timer, setTimer] = useState(0)
    const countRef = useRef(null)

    const handleStart = () => {
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    const handlePause = () => {
        clearInterval(countRef.current)

    }
    const handleReset = () => {
        clearInterval(countRef.current)
        setTimer(0)
    }
    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    const handleDo = () => {
       
    }
    return (
        <div className="write-input">
            <div className="write-input-title">Your Answer:</div>
            {/* <div className='write-input-head'>
                <div className="write-input-time">
                    <span>
                        {formatTime(timer)}
                    </span>
                </div>
                <button className="write-button btn" onClick={handleDo}><span>Làm bài</span></button>
            </div> */}
            <textarea className='write-input-content' name="" id="" cols="30" rows="10" placeholder='Write something...' value={data} readOnly={isReadOnly}>
                
            </textarea>
            {/* <div className="write-input-time">
                <span>
                {formatTime(timer)}
                </span>
            </div>
            <div className="write-input-button-container" >
               <textarea name="" id={`write-inputedAudioContainer${question_playing}`} cols="30" rows="10" onClick={handleStart} onBlur={handlePause}>

               </textarea>
            </div> */}

        </div>
    );
}

export default WriteInput;