import React, { Component, useState } from 'react';
import "./SpEnd3.scss";
import VocaTranscript from '../VocaTranscript';
import { useEffect } from 'react';
function SpEnd3({ question, index, record }) {
    const [toogle, setToogle] = useState(false);
    const [toogleAudio, setToogleAudio] = useState(false);
    const [text, settext] = useState(false);
    useEffect(() => {
        console.log("dữ lieuj load: ", text)
        if (question && question.list_word) {
            loadtext()
        }
    }, [question])
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
        <div className="speak-question-end-3">
            <div className='speak-question-end-3__situation'>
                <p>Situation:</p>
                <span>
                    {question ? question.situation : ""}
                </span>
            </div>
            <div className='speak-question-end-3__title'>
                {`Câu ${index + 1}: Answer the following question:`}
            </div>
            <div className="speak-question-end-3__header">
                {question.question}
            </div>
            {
                record ? <div className='speak-question-end-3__record'>
                    <span>File ghi âm của bạn</span>
                    <audio src={record} controls></audio>
                </div> : ""
            }
            <div className="speak-question-end-3__content" id={`speak-question-${index}`}>
                <div className='speak-question-end-3__content-header'>
                    <h2 className='speak-question-end-3__content-title'>Gợi ý:</h2>
                    <div className='speak-question-end-3__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>
                </div>
                <div className='speak-question-end-3__content-main'>
                    <div className='speak-question-end-3__frames'>
                        {
                            text ? text.map((item, index) => {
                                return (
                                    <VocaTranscript item={item} index={index} toogle={toogle} />
                                )
                            }) : ""
                        }
                    </div>
                    {
                        toogleAudio ?
                            <div className='speak-question-end-3__audio'>
                                <audio src={question ? question.sound : ""} controls></audio>
                            </div> : ""

                    }
                </div>
            </div>
        </div>
    );
}

export default SpEnd3;