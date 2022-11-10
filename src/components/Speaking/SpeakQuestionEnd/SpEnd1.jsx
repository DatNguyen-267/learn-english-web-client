import React, { Component, useState } from 'react';
import "./SpEnd1.scss";
import VocaTranscript from '../VocaTranscript';
import { useEffect } from 'react';
function SpEnd1({ question, index, record }) {
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
        <div class="speak-question-end-1">
            <div class="speak-question-end-1__content">
                <div className='speak-question-end-1__title'>
                    {`Câu ${index + 1}: Read alound the text on the screen:`}
                </div>
                <div className='speak-question-end-1__content-main'>

                    <div className='speak-question-end-1__frames'>
                        {

                            text ? text.map((item, index) => {
                                return (
                                    <VocaTranscript item={item} toogle={toogle} key={index} />
                                )
                            }) : ""
                        }
                    </div>
                    {
                        toogleAudio ? <audio src={question ? question.sound : ""} controls></audio> : ""

                    }
                    <div className='speak-question-end-1__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>
                </div>

            </div>
            {
                record ? <div className='speak-question-end-1__record'>
                    <span>File ghi âm của bạn</span>
                    <audio src={record} controls></audio>
                </div> : ""
            }

        </div>
    );
}

export default SpEnd1;