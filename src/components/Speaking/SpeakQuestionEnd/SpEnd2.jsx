import React, { Component, useState } from 'react';
import "./SpEnd2.scss";
import VocaTranscript from '../VocaTranscript';
import { useEffect } from 'react';
function SpEnd2({ question, index, record }) {
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
        const paragraph1 = str.split("<br>")
        const paragraph2 = str2.split("<br>")
        let paragraph = []
        let i = 0
        paragraph1.forEach(element => {
            let listphonetic = []
            if(paragraph2.length > 1){
                listphonetic = paragraph2[i].split(" ")
            }
            else{
                listphonetic = paragraph2[0].split(" ")
            }
            let strong = false
            let newlist = []
            let list = element.split(" ")
            let j = 0
            list.forEach((word, index) => {
                if (word.includes("<strong>")) {
                    strong = true
                }
                if (strong) {
                    const item = {
                        word: "<strong>" + word,
                        phonetic: listphonetic[j],
                    }
                    newlist.push(item)
                }
                else {
                    const item = {
                        word: word,
                        phonetic: listphonetic[j],
                    }
                    newlist.push(item)
                }


                if (word.includes("</strong>")) {
                    strong = false
                }
                j++
            })
            paragraph.push(newlist)
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
        <div className="speak-question-end-2">
            <div className='speak-question-end-2__title'>
                {`Câu ${index + 1}: Describe the picture on the screen:`}
            </div>
            <div className="speak-question-end-2__header">
                <img src={question? question.img:""} alt="image" />
            </div>

            {
                record ? <div className='speak-question-end-2__record'>
                    <span>File ghi âm của bạn</span>
                    <audio src={record} controls></audio>
                </div> : ""
            }
            <div className="speak-question-end-2__content" id={`speak-question-${index}`}>
                <div className='speak-question-end-2__content-header'>
                    <span className='speak-question-end-2__content-title'>Gợi ý:</span>
                    <div className='speak-question-end-2__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>
                </div>
                <div className='speak-question-end-2__content-main'>
                    <div>
                        {
                            text ? text.map((item, index) => {
                                return (
                                    <div className='speak-question-end-2__frames'>
                                        {
                                            item ? item.map((word, index) => {
                                                return (
                                                    <VocaTranscript item={word} index={index} toogle={toogle} />
                                                )
                                            }) : ""
                                        }
                                    </div>
                                )


                            }) : ""
                        }
                    </div>
                    {
                        toogleAudio ?
                            <div className='speak-question-end-2__audio'>
                                <audio src={question ? question.sound : ""} controls></audio>
                            </div> : ""

                    }
                </div>
            </div>
        </div>
    );
}

export default SpEnd2;