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
    // const loadtext = () => {
    //     const str = question.list_word
    //     const str2 = question.list_phonetic
    //     const listword = str.split(" ")
    //     const listphonetic = str2.split(" ")
    //     let list = []
    //     let i = 0
    //     listword.forEach(element => {
    //         const item = {
    //             word: element,
    //             phonetic: listphonetic[i]
    //         }
    //         list.push(item)
    //         i++
    //     });
    //     settext(list)
    // }
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
                    <div>
                        {
                            text ? text.map((item, index) => {
                                return (
                                    <div className='speak-question-2__frames'>
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
                            <div className='speak-question-2__audio'>
                                <audio src={question ? question.sound : ""} controls></audio>
                            </div> : ""

                    }
                </div>
            </div>
        </div>
    );
}

export default SpeakQuestion2;