import React, { useState } from 'react';
import VocaTranscript from '../../components/Speaking/VocaTranscript';
import "./SpeakQuestion1.scss"
import Record from './Record';
import { useEffect } from 'react';
function SpeakQuestion1({ question, img, question_playing, setIsRecord , isRecord}) {
    const [toogle, setToogle] = useState(false);
    const [toogleAudio, setToogleAudio] = useState(false);
    const [text, settext] = useState(false);
    
    useEffect(() => {
        //console.log("question:", question)
        if (question && question.list_word && question.type=="Question1") {
            console.log("dữ lieuj load: ", text)
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
        <div className="speak-question-1">
            <div className="speak-question-1__content" id={`speak-question-${question_playing}`}>
                <div className='speak-question-1__title'>
                    {`Câu ${question_playing + 1}: Read alound the text on the screen:`}
                </div>
              
                <div className='speak-question-1__content-main'>

                    <div className='speak-question-1__frames'>
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
                    <div className='speak-question-1__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>

                </div>

            </div>
            <div className='speak-question-1__record'>
                <Record
                    question_playing={question_playing}
                    setIsRecord={setIsRecord}
                    isRecord={isRecord}
                >
                </Record>
            </div>
        </div>
    );
}

export default SpeakQuestion1;