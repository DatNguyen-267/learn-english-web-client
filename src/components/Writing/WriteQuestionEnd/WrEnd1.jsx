import React, { Component, useState } from 'react';
import "./WrEnd1.scss";
import VocaTranscript from '../VocaTranscript';
import { useEffect } from 'react';
import WriteInput from '../WriteInput';
function WrEnd1({ question, index, record }) {
    const [toogle, setToogle] = useState(false);
    const [text, settext] = useState(false);

    useEffect(() => {
        console.log("dữ lieuj load: ", text)
        if (question && question.list_word) {
            loadtext()
        }
    }, [question])

    const loadtext = () => {
        const str = question.list_word
        const listword = str.split(" ")
        let list = []
        listword.forEach(word => {
            const item = {
                word: word,
                phonetic: ""
            }
            list.push(item)
        })
        console.log("list word:", list)
        settext(list)
    }
    const handleToogleTrans = () => {
        setToogle(!toogle)
    }

    return (
        <div className="wrend-1">
            <div className='wrend-1__title'>
                {`Câu ${index + 1}: Describe the picture on the screen:`}
            </div>
            <div className="wrend-1__header">
                {
                    <img src={question.img} alt="image" />
                }
                <div className='wrend-1__situation'>
                    <p>{question.question}</p>
                </div>
            </div>
            <div className='wrend-1__input'>
                {
                    record ? <WriteInput
                        question_playing={index}
                        data={record}
                        isReadOnly={true}
                    >
                    </WriteInput> : ""
                }
            </div>
            <div className="wrend-1__content">
                <div className='wrend-1__content-header'>
                    <span className='wrend-1__content-title'>Gợi ý:</span>
                    <div className='wrend-1__action'>
                        <button className='write-btn__trans btn-main' onClick={handleToogleTrans}><span>Dịch câu</span></button>
                    </div>
                </div>
                <div className='wrend-1__content-main'>
                    <div className='wrend-1__frames'>
                        {
                            text ? text.map((item, index) => {
                                return (
                                    <VocaTranscript item={item} index={index} toogle={toogle} key={index} />
                                )
                            }) : ""
                        }
                    </div>
                    {
                        toogle ?
                            <div className='wrend-1__trans'>
                                <span>
                                    {question ? question.list_trans : ""}
                                </span>
                            </div> : ""

                    }
                </div>
            </div>
        </div>
    );
}

export default WrEnd1;