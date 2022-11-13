import React, { Component, useState } from 'react';
import "./SpEnd4.scss";
import VocaTranscript from '../VocaTranscript';
import { useEffect } from 'react';
function SpEnd4({ question, index, record }) {
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
        <div className="speak-question-end-4">
            <div className='speak-question-end-4__title'>
                {`Câu ${index + 1}: Answer theo following questions:`}
            </div>
            <div className="speak-question-end-4__header">
                <img src={question ? question.img : ""} alt="image" />
                <audio src={question ? question.question_sound : ""} controls></audio>
            </div>
            {
                record ? <div className='speak-question-end-4__record'>
                    <span>File ghi âm của bạn</span>
                    <audio src={record} controls></audio>
                </div> : ""
            }
            <div className="speak-question-end-4__content" id={`speak-question-${index}`}>
                <div className='speak-question-end-4__content-header'>
                    <span className='speak-question-end-4__content-title'>Gợi ý:</span>
                    <div className='speak-question-end-4__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>
                </div>
                <div className='speak-question-end-4__content-main'>
                    <span className='speak-question-end-4__content-main__question'>
                        Câu hỏi:
                    </span>
                    <span className='question-content'>{question.question}</span>
                    <span className='speak-question-end-4__content-main__answer'>
                        Trả lời:
                    </span>
                    <div className='speak-question-end-4__frames'>
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
                            <div className='speak-question-end-4__audio'>
                                <audio src={question ? question.sound : ""} controls></audio>
                            </div> : ""

                    }
                </div>
            </div>
        </div>
    );
}

export default SpEnd4;