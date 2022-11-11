import React, { Component, useState } from 'react';
import "./SpEnd5.scss";
import VocaTranscript from '../VocaTranscript';
import { useEffect } from 'react';
function SpEnd5({ question, index, record }) {
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
        const paragraph1 = str.split("\n")
        const paragraph2 = str2.split("\n")
        let paragraph = []
        let i = 0
        paragraph1.forEach(element => {
            const listword = element.split(" ")
            const listphonetic = paragraph2[i].split(" ")
            let list = []
            let j = 0
            listword.forEach(word =>{
                const item = {
                    word: word,
                    phonetic: listphonetic[j]
                }
                list.push(item)
                j++
            })
            
            paragraph.push(list)
            i++
        });
        console.log("list word:", paragraph)
        settext(paragraph)
        
    }
    const handleToogleTrans = () => {
        setToogle(!toogle)
    }
    const handleToogleAudio = () => {
        setToogleAudio(!toogleAudio)
    }
    return (
        <div className="speak-question-end-5">
            {/* <div className='speak-question-end-5__situation'>
                <p>Situation:</p>
                <span>
                    {question ? question.situation : ""}
                </span>
            </div> */}
            <div className='speak-question-end-5__title'>
                {`Câu ${index + 1}: Answer the following question:`}
            </div>
            <div className="speak-question-end-5__header">
                {question.question}
            </div>
            {
                record ? <div className='speak-question-end-5__record'>
                    <span>File ghi âm của bạn</span>
                    <audio src={record} controls></audio>
                </div> : ""
            }
            <div className="speak-question-end-5__content" id={`speak-question-${index}`}>
                <div className='speak-question-end-5__content-header'>
                    <h2 className='speak-question-end-5__content-title'>Gợi ý:</h2>
                    <div className='speak-question-end-5__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>
                </div>
                <div className='speak-question-end-5__content-main'>
                <div>
                        {
                            text ? text.map((item, index) => {    
                                return(
                                    <div className='speak-question-5__frames'>
                                    {
                                        item? item.map((word, index) =>{
                                            return(
                                                <VocaTranscript item={word} index={index} toogle={toogle} /> 
                                            )
                                        }):""
                                    }
                                    </div>
                                )
                             
                                
                            }) : ""
                        }
                    </div>
                    {
                        toogleAudio ?
                            <div className='speak-question-end-5__audio'>
                                <audio src={question ? question.sound : ""} controls></audio>
                            </div> : ""

                    }
                </div>
            </div>
        </div>
    );
}

export default SpEnd5;