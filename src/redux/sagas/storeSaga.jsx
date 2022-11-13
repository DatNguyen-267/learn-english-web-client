import * as api from '../../api'
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../actions/index'
import { findTopicGammmarFailure } from '../actions/GrammarAction'

export default function* practiceListenSaga() {
  yield takeLatest(actionTypes.FIND_STORE_WORD_REQUEST, findStoreWord)
  yield takeLatest(actionTypes.FIND_STORE_QUESTION_REQUEST, findStoreQuestion)
 
}

function* findStoreWord(action) {
  try {
    const id = action.id
    const ls = yield call(api.findStoreWord,{id})
    console.log("nam",ls)
    yield put(actions.findStoreWordSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.findStoreWordFailure(err))
  }
}

function* findStoreQuestion(action) {
  try {
    const idUser = action.id
    const ls = yield call(api.findStoreQuestion,{idUser})
    console.log("nam",ls)
    yield put(actions.findStoreQuestionSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.findStoreQuestionFailure(err))
  }
}

