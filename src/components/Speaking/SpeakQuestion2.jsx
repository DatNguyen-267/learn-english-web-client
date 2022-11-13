import React, { useState, useEffect } from 'react';
import VocaTranscript from '../../components/Speaking/VocaTranscript';
import "./SpeakQuestion2.scss"
import Record from './Record';
function SpeakQuestion2({ question, listword, img, question_playing, setIsRecord, isRecord }) {
    const [toogle, setToogle] = useState(false);
    const [toogleAudio, setToogleAudio] = useState(false);
    const [text, settext] = useState(false);
    
    useEffect(() => {
        //console.log("question:", question)
        if (question && question.list_word && question.type == "Question2") {
            console.log("dữ lieuj load: ", text)
            loadtext()
        }
    }, [question.type])
    const loadtext = () => {
        const str = question.list_word
        const str2 = question.list_phonetic
        const listword = str.split(" ")
        const listphonetic = str2.split(" ")
        let list = []
        let i = 0
        listword.forEach(element => {
            const item = {
                word: element,
                phonetic: listphonetic[i]
            }
            list.push(item)
            i++
        });
        settext(list)
    }
    const handleToogleTrans = () => {
        setToogle(!toogle)
    }
    const handleToogleAudio = () => {
        setToogleAudio(!toogleAudio)
    }

    return (
        <div className="speak-question-2">
            <div className='speak-question-2__title'>
                {`Câu ${question_playing + 1}: Describe the picture on the screen:`}
            </div>
            <div className="speak-question-2__header">
                <img src={img} alt="image" />
            </div>
           
            <div className='speak-question-2__record'>
                <Record
                    question_playing={question_playing}
                    setIsRecord={setIsRecord}
                    isRecord={isRecord}
                >
                </Record>
            </div>
            <div className="speak-question-2__content" id={`speak-question-${question_playing}`}>
                <div className='speak-question-2__content-header'>
                    <span className='speak-question-2__content-title'>Gợi ý:</span>
                    <div className='speak-question-2__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>
                </div>
                <div className='speak-question-2__content-main'>
                    <div className='speak-question-2__frames'>
                        {
                            text ? text.map((item, index) => {
                                return (
                                    <VocaTranscript item={item} index={index} toogle={toogle} key={index} />
                                )
                            }) : ""
                        }
                    </div>
                    {
                        toogleAudio ? 
                        <div className='speak-question-2__audio'>
                            <audio src={question? question.sound:""} controls></audio> 
                        </div>: ""

                    }
                </div>
            </div>
        </div>
    );
}

export default SpeakQuestion2;