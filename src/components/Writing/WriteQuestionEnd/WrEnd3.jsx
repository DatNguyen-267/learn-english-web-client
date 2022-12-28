import React, { Component, useState } from 'react';
import "./WrEnd3.scss";
import VocaTranscript from '../VocaTranscript';
import { useEffect } from 'react';
import WriteInput from '../WriteInput';
function WrEnd3({ question, index, record }) {
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
        <div className="wrend-3">
            <div className='wrend-3__title'>
                {`Câu ${index + 1}:  Read the question below.`}
            </div>
            <div className="wrend-3__header" >
                {question.question}
            </div>
            <div className='wrend-3__input'>
                {
                    record ? <WriteInput
                        question_playing={index}
                        data={record}
                        isReadOnly={true}
                    >
                    </WriteInput> : ""
                }
            </div>
            <div className="wrend-3__content" id={`speak-question-${index}`}>
                <div className='wrend-3__content-header'>
                    <h2 className='wrend-3__content-title'>Gợi ý:</h2>
                    <div className='wrend-3__action'>
                        <button className='write-btn__trans btn-main' onClick={handleToogleTrans}><span>Dịch câu</span></button>
                    </div>
                </div>
                <div className='wrend-3__content-main'>
                    <div>
                        {
                            text ? text.map((item, index) => {
                                return (
                                    <div className='wrend-3__paragraph'>
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
                            <div className='wrend-3__trans' dangerouslySetInnerHTML={{ __html: question.list_trans }}>
                            </div> : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default WrEnd3;