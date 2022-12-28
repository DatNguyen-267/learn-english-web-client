import React, { useState, useEffect } from 'react';
import VocaTranscript from '../../components/Speaking/VocaTranscript';
import "./SpeakQuestion4.scss"
import Record from './Record';
function SpeakQuestion4({ question, listword, img, question_playing, setIsRecord, isRecord }) {
    const [toogle, setToogle] = useState(false);
    const [toogleAudio, setToogleAudio] = useState(false);
    const [text, settext] = useState(false);
    
    useEffect(() => {
        console.log("dữ lieuj load: ", text)
        if (question && question.list_word && question.type=="Question4") {
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
        <div className="speak-question-4">
            <div className='speak-question-4__title'>
                {`Câu ${question_playing + 1}: Answer the following questions:`}
            </div>
            <div className="speak-question-4__header">
                <img src={img} alt="image" />
                <audio src={question? question.question_sound:""} controls></audio>
            </div>
           
            <div className='speak-question-4__record'>
                <Record
                    question_playing={question_playing}
                    setIsRecord={setIsRecord}
                    isRecord={isRecord}
                >
                </Record>
            </div>
            <div className="speak-question-4__content" id={`speak-question-${question_playing}`}>
                <div className='speak-question-4__content-header'>
                    <span className='speak-question-4__content-title'>Gợi ý:</span>
                    <div className='speak-question-4__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>
                </div>
                <div className='speak-question-4__content-main'>
                    <span className='speak-question-4__content-main__question'>
                        Câu hỏi: 
                    </span>
                    <span className='question-content'>{question.question}</span>
                    <span className='speak-question-4__content-main__answer'>
                        Trả lời:
                    </span>
                    <div>
                        {
                            text ? text.map((item, index) => {
                                return (
                                    <div className='speak-question-4__frames'>
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
                        <div className='speak-question-4__audio'>
                            <audio src={question? question.sound:""} controls></audio> 
                        </div>: ""

                    }
                </div>
            </div>
        </div>
    );
}

export default SpeakQuestion4;