import React, { useState } from 'react';
import VocaTranscript from '../Writing/VocaTranscript';
import "./WriteQuestion1.scss"
import WriteInput from './WriteInput';
import { useEffect } from 'react';
function WriteQuestion1({ question, img, question_playing, setIsRecord, isRecord}) {
    const [toogle, setToogle] = useState(false);
    const [text, settext] = useState();

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
        listword.forEach(word =>{
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
        <div className="write-question-1">
            <div className='write-question-1__title'>
                {`Câu ${question_playing + 1}: Describe the picture on the screen:`}
            </div>
            <div className="write-question-1__header">
                {
                    <img src={question? question.img:""} alt="image" />
                }
                <div className='write-question-1__situation'>
                    <p>{question? question.question:""}</p>
                </div>
            </div>
            <div className='write-question-1__input'>
                <WriteInput
                    question_playing={question_playing}
                    setIsRecord={setIsRecord}
                    isRecord={isRecord}
                >
                </WriteInput>
            </div>
            <div className="write-question-1__content" id={`write-question-${question_playing}`}>
                <div className='write-question-1__content-header'>
                    <span className='write-question-1__content-title'>Gợi ý:</span>
                    <div className='write-question-1__action'>
                        {/* <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button> */}
                        <button className='write-btn__trans btn-main' onClick={handleToogleTrans}><span>Dịch câu</span></button>
                    </div>
                </div>
                <div className='write-question-1__content-main'>
                    <div className='write-question-1__frames'>
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
                            <div className='write-question-1__trans'>
                                <span>
                                {question? question.list_trans:""}
                                </span>
                            </div> : ""

                    }
                </div>
            </div>
        </div>
    );
}

export default WriteQuestion1;