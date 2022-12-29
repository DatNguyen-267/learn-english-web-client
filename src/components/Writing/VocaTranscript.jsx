import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import "./VocaTranscript.scss";
import axios from "axios";
function VocaTranscript({ item ,toogle}) {
    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
    const { speak, speakSlow } = useSelector((state) => state.speak);
    // const dictionaryApi = async (res) => {
    //     try {
    //         const instance = axios.create({
    //             baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
    //             withCredentials: false,
    //             headers: {
    //               'Access-Control-Allow-Origin' : '*',
    //               'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //               }
    //           });
    //       const data = await instance.get(
    //         `/student`,
            
    //       );
    //       setMeanings(data.data);
    //       console.log("meaning: ", data)
    //     } catch (error) {
    //       console.log(error);
    //     }
    // };
    const onclick = (value) =>{
        console.log(value);
        speak.text = value;
        speechSynthesis.speak(speak);
    }
    return (
        <div className="vocaTranscript" onClick={()=>onclick(item.word)}>
            <div className="vocaTranscript__word" dangerouslySetInnerHTML={{__html:item? item.word:""}}>
                {/* {
                    item? item.word:""
                } */}
            </div>
            {
                toogle ? <div className="vocaTranscript__trans">
                    {
                        // item? item.phonetic:""
                    }
                </div> : ""
            }
        </div>
    );
}

export default VocaTranscript;