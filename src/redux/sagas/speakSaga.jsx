import * as api from '../../api'
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../actions/index'


export default function* practiceListenSaga() {
  yield takeLatest(actionTypes.FETCH_SPEAK_LESSON_REQUEST, fetchSpeakLesson)
  yield takeLatest(actionTypes.FIND_SPEAK_QUESTION_REQUEST, findSpeakQuestion)
  yield takeLatest(actionTypes.FETCH_SPEAK_GRAMMAR_REQUEST, fetchSpeakGrammar)
  yield takeLatest(actionTypes.FIND_SPEAK_GRAMMAR_REQUEST, findSpeakGammmar)
}

function* fetchSpeakLesson(action) {
  try {
    const type = action.payload
    const sp = yield call(api.fetchSpeakLesson, type)
    console.log(sp)
    yield put(actions.getSpeakLessonSuccess(sp.data))
  }
  catch(err) {
    yield put(actions.getSpeakLessonFailure(err))
  }
}
function* findSpeakQuestion(action) {
  try {
    const id = action.payload
    const sp = yield call(api.findSpeakQuestion, id)
    console.log(sp)
    yield put(actions.findSpeakQuestionSuccess(sp.data))
  }
  catch(err) {
    yield put(actions.findSpeakQuestionFailure(err))
  }
}

function* fetchSpeakGrammar(action) {
  try {
    const ls = yield call(api.fetchSpeakGrammar)
    console.log(ls)
    yield put(actions.getSpeakGrammarSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.getSpeakGrammarFailure(err))
  }
}

function* findSpeakGammmar(action) {
  try {
    const id = action.id
    const ls = yield call(api.findSpeakGrammar,{id})
    console.log(ls)
    yield put(actions.findSpeakGammmarSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.findSpeakGammmarFailure(err))
  }
}



