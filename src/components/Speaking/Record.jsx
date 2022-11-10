import React, { useEffect, useState, useRef } from 'react';
import "./Record.scss"
function Record({question_playing, setIsRecord, isRecord}) {
    let chunks = []; //will be used later to record audio
    const [mediaRecorder, setMediaRecorder] = useState(null); //will be used later to record audio
    let audioBlob = null;  //the blob that will hold the recorded audio
    // let record1 = false; 
    // useEffect (()=>{
    //     setIsRecord(record1)
    // }, [record1])
    const mediaRecorderDataAvailable = (e) => {
        chunks.push(e.data);
    }
    const mediaRecorderStop = () => {
        const recordedAudioContainer = document.getElementById(`recordedAudioContainer${question_playing}`);
        //check if there are any previous recordings and remove them
        if (recordedAudioContainer.childElementCount>0) {
            recordedAudioContainer.firstElementChild.remove();
        }
        //create a new audio element that will hold the recorded audio
        const audioElm = document.createElement('audio');
        audioElm.setAttribute('controls', ''); //add controls
        //create the Blob from the chunks
        audioBlob = new Blob(chunks, { type: 'audio/mp3' });
        const audioURL = window.URL.createObjectURL(audioBlob);
        audioElm.src = audioURL;
        //show audio
        recordedAudioContainer.appendChild(audioElm);
        //reset to default
        setMediaRecorder(null);
        chunks = [];
        console.log("stop record")
    }
    const record = () => {
        const recordButton = document.getElementById(`recordButton${question_playing}`);
        //TODO start recording
        const recordButtonImage = recordButton.firstElementChild;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert('Your browser does not support recording!');
            return;
        }

        // browser supports getUserMedia
        // change image in button
        recordButtonImage.src = `${mediaRecorder && mediaRecorder.state === 'recording' ?
            'https://www.pngkey.com/png/full/207-2078579_mobile-voice-recording-voice-record-red-icon.png'
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Eo_circle_red_pause.svg/768px-Eo_circle_red_pause.svg.png'}`;

        if (!mediaRecorder) {
           
            // start recording
            navigator.mediaDevices.getUserMedia({
                audio: true,
            })
                .then((stream) => {
                    let media = new MediaRecorder(stream);
                    media.start();
                    media.ondataavailable = mediaRecorderDataAvailable;
                    media.onstop = mediaRecorderStop;
                    console.log(media)
                    setMediaRecorder(media)
                    if(media.state == "recording"){
                        setIsRecord(true)
                        handleReset()
                        handleStart()
                        console.log("record")

                    }
                    else{
                        setIsRecord(false)
                        handlePause()
                        console.log("stop record")
                    }
                    
                })
                .catch((err) => {
                    alert(`The following error occurred: ${err}`);
                    // change image in button
                    recordButtonImage.src = 'https://www.pngkey.com/png/full/207-2078579_mobile-voice-recording-voice-record-red-icon.png';
                });
        } else {
            // stop recording
            mediaRecorder.stop();  
            setIsRecord(false) 
            handlePause()
        }
        
    }

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
    return (
        <div className="record">
            
            <div className="record-title">Record Your Voice:</div>
            <div className="record-time">
                <span>
                {formatTime(timer)}
                </span>
            </div>
            <div className="record-button-container">
               
                <button className="record-button"
                    id={`recordButton${question_playing}`} onClick={record}>
                    <img src="https://www.pngkey.com/png/full/207-2078579_mobile-voice-recording-voice-record-red-icon.png"
                        alt="Record" className="img-fluid" />
                </button>
            </div>
            <div className="recorded-audio-container" id={`recordedAudioContainer${question_playing}`}>
            </div>
        </div>
    );
}

export default Record;