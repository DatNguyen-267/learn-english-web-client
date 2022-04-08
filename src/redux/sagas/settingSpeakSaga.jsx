import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import * as actions from './../actions/index'
function* settingSpeak() {

    const synth = window.speechSynthesis
    
    let voices = []
    const getVoices = async() => {
        voices = await synth.getVoices()
    }
    getVoices()
    
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = getVoices;
    }
    const speakText = new SpeechSynthesisUtterance()
    speakText.onend = e => {
        console.log('Done speaking...')
    }
    speakText.onerror = e => {
        console.error('Something went wrong...')
    }
    speakText.voice = voices[10]
    speakText.volume = 1;
    speakText.rate = 0.8;
    speakText.pitch = 1;
    speakText.lang = 'en-US';
    yield put(actions.setSpeakSuccess(speakText))
}
function* settingSpeakSlow() {

    const synth = window.speechSynthesis
    
    let voices = []
    const getVoices = async() => {
        voices = await synth.getVoices()
        
    }
    getVoices()
    
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = getVoices;
    }
    const speakText = new SpeechSynthesisUtterance()
    speakText.onend = e => {
        console.log('Done speaking...')
    }
    // speakText.onerror = e => {
    //     console.error('Something went wrong...')
    // }
    speakText.voice = voices[10]
    speakText.volume = 1;
    speakText.rate = 0.7;
    speakText.pitch = 0.7;
    speakText.lang = 'en-US';
    yield put(actions.setSpeakSlowSuccess(speakText))
}
export function* settingSpeakSaga() {
    yield call(settingSpeak)
    yield call(settingSpeakSlow)
    
}
