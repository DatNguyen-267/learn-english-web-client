import * as api from '../../api'
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../actions/index'


export default function* practiceListenSaga() {
  yield takeLatest(actionTypes.FETCH_WRITE_LESSON_REQUEST, fetchWriteLesson)
  yield takeLatest(actionTypes.FIND_WRITE_QUESTION_REQUEST, findWriteQuestion)
  yield takeLatest(actionTypes.FETCH_WRITE_GRAMMAR_REQUEST, fetchWriteGrammar)
  yield takeLatest(actionTypes.FIND_WRITE_GRAMMAR_REQUEST, findWriteGammmar)
}

function* fetchWriteLesson(action) {
  try {
    const type = action.payload
    const wr = yield call(api.fetchWriteLesson, type)
    console.log(wr)
    yield put(actions.getWriteLessonSuccess(wr.data))
  }
  catch(err) {
    yield put(actions.getWriteLessonFailure(err))
  }
}
function* findWriteQuestion(action) {
  try {
    const id = action.payload
    const wr = yield call(api.findWriteQuestion, id)
    console.log(wr)
    yield put(actions.findWriteQuestionSuccess(wr.data))
  }
  catch(err) {
    yield put(actions.findWriteQuestionFailure(err))
  }
}

function* fetchWriteGrammar(action) {
  try {
    const ls = yield call(api.fetchWriteGrammar)
    console.log(ls)
    yield put(actions.getWriteGrammarSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.getWriteGrammarFailure(err))
  }
}

function* findWriteGammmar(action) {
  try {
    const id = action.id
    const ls = yield call(api.findWriteGrammar,{id})
    console.log(ls)
    yield put(actions.findWriteGammmarSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.findWriteGammmarFailure(err))
  }
}



