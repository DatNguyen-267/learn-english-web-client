import * as api from '../../api'
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../actions/index'

export default function* practiceListenSaga() {
  yield takeLatest(actionTypes.FETCH_NOTE_REQUEST, fetchNote)
  yield takeLatest(actionTypes.ADD_NOTE_REQUEST, addNote)
  yield takeLatest(actionTypes.UPDATE_NOTE_REQUEST, updateNote)
  // yield takeLatest(actionTypes.FIND_TOPIC_GRAMMAR_REQUEST, findTopicGammmar)
 
}

function* fetchNote(action) {
  try {
    const note = yield call(api.fetchNote)
    console.log(note)
    yield put(actions.getNoteSuccess(note.data))
  }
  catch(err) {
    yield put(actions.getNoteFailure(err))
  }
}
function* addNote(action) {
  try {
    const note = action.payload
    console.log("note:", note)
    const result = yield call(api.addNote, note)
    console.log("sau khi add: ",result.data)
    if(result.data == "success"){
      console.log("Kiem tra add thanh cong")
      yield put(actions.addNoteSuccess())
    }
    else{
      yield put(actions.addNoteFailure())
    }
  }
  catch(err) {
    yield put(actions.addNoteFailure())
  }
}
function* updateNote(action) {
  try {
    const note = action.payload
    console.log("note:", note)
    const result = yield call(api.updateNote, note)
    console.log("sau khi update: ",result.data)
    if(result.data == "success"){
      console.log("Kiem tra update thanh cong")
      yield put(actions.updateNoteSuccess())
    }
    else{
      console.log("Kiem tra update thất bại")
      yield put(actions.updateNoteFailure())
    }
   
  }
  catch(err) {
    yield put(actions.updateNoteFailure())
  }
}

// function* findTopicGammmar(action) {
//   try {
//     const id = action.id
//     const ls = yield call(api.findTopicGrammar,{id})
//     console.log(ls)
//     yield put(actions.findTopicGammmarSuccess(ls.data))
//   }
//   catch(err) {
//     yield put(actions.findTopicGammmarFailure(err))
//   }
// }

