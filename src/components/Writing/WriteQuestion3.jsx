import React, { Component, useEffect, useState } from 'react';
import ListenMinQuestion from '../ListenMinQuestion/ListenMinQuestion';
import VocaTranscript from '../Writing/VocaTranscript';
import "./WriteQuestion3.scss"
import WriteInput from './WriteInput';
function WriteQuestion3({ question, question_playing, setIsRecord, isRecord }) {
    
    const [toogle, setToogle] = useState(false);
    const [text, settext] = useState(false);
    
    useEffect(() => {
        console.log("dữ lieuj load: ", text)
        if (question && question.list_word) {
            loadtext()
        }
        console.log(question.email)
    }, [question])
    
    const loadtext = () => {
        const str = question.list_word
        const paragraph1 = str.split("<br>")
        let paragraph = []
        paragraph1.forEach(element => {
            let strong = false
            let newlist = []
            let list = element.split(" ")
            list.forEach((word, index) => {
                if (word.includes("<strong>")) {
                    strong = true
                }

                if (strong) {
                    const item = {
                        word: "<strong>" + word,
                        phonetic: "",
                    }
                    newlist.push(item)
                }
                else {
                    const item = {
                        word: word,
                        phonetic: "",
                    }
                    newlist.push(item)
                }


                if (word.includes("</strong>")) {
                    strong = false
                }

            })
            paragraph.push(newlist)

        });
        console.log("list word:", paragraph)
        settext(paragraph)
    }
    const handleToogleTrans = () => {
        setToogle(!toogle)
    }

    return (
        <div className="write-question-3">
            <div className='write-question-3__title'>
                {`Câu ${question_playing + 1}:  Read the question below.`}
            </div>
            <div className="write-question-3__header">
                {question.question}
            </div>
            <div className='write-question-3__input'>
                <WriteInput
                    question_playing={question_playing}
                    setIsRecord={setIsRecord}
                    isRecord={isRecord}
                >
                </WriteInput>
            </div>
            <div className="write-question-3__content" id={`write-question-${question_playing}`}>
                <div className='write-question-3__content-header'>
                    <h2 className='write-question-3__content-title'>Gợi ý:</h2>
                    <div className='write-question-3__action'>
                        <button className='write-btn__trans btn-main' onClick={handleToogleTrans}><span>Dịch câu</span></button>
                    </div>
                </div>
                <div className='write-question-3__content-main'>
                    <div>
                        {
                            text ? text.map((item, index) => {
                                return (
                                    <div className='write-question-3__paragraph'>
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
                        toogle ?
                            <div className='write-question-3__trans'  dangerouslySetInnerHTML={{__html: question.list_trans}}>
                            </div> : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default WriteQuestion3;