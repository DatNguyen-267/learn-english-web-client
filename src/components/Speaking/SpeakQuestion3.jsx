import React, { Component, useEffect, useState } from 'react';
import ListenMinQuestion from '../ListenMinQuestion/ListenMinQuestion';
import VocaTranscript from '../../components/Speaking/VocaTranscript';
import "./SpeakQuestion3.scss"
import Record from './Record';
function SpeakQuestion3({ question, question_playing, setIsRecord, isRecord }) {
    const [toogle, setToogle] = useState(false);
    const [toogleAudio, setToogleAudio] = useState(false);
    const [text, settext] = useState(false);

    useEffect(() => {
        console.log("dữ lieuj load: ", text)
        if (question && question.list_word && question.type=="Question3") {
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
        <div className="speak-question-3">
            <div className='speak-question-3__situation'>
                <p>Situation:</p>
                <span>
                    {question ? question.situation : ""}
                </span>
            </div>
            <div className='speak-question-3__title'>
                {`Câu ${question_playing + 1}: Answer the following question:`}
            </div>
            <div className="speak-question-3__header">
                {question.question}
            </div>
            <div className='speak-question-3__record'>
                <Record
                    question_playing={question_playing}
                    setIsRecord={setIsRecord}
                    isRecord={isRecord}
                >
                </Record>
            </div>
            <div className="speak-question-3__content" id={`speak-question-${question_playing}`}>
                <div className='speak-question-3__content-header'>
                    <h2 className='speak-question-3__content-title'>Gợi ý:</h2>
                    <div className='speak-question-3__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>
                </div>
                <div className='speak-question-3__content-main'>
                    <div className='speak-question-3__frames'>
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
                            <div className='speak-question-3__audio'>
                                <audio src={question ? question.sound : ""} controls></audio>
                            </div> : ""

                    }
                </div>
            </div>
        </div>
    );
}

export default SpeakQuestion3;