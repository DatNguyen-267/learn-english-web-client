import * as api from '../../api'
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../actions/index'

export default function* practiceListenSaga() {
  yield takeLatest(actionTypes.FETCH_PRACTICE_LISTEN_REQUEST, fetchPracticeListen)
  yield takeLatest(actionTypes.FETCH_LISTEN_COURSE_REQUEST, fetchListenCourse)
  yield takeLatest(actionTypes.FETCH_LISTEN_PART_REQUEST, fetchListenPart)
}

function* fetchPracticeListen(action) {
  try {
    const ls = yield call(api.fetchPracticeListen)
    console.log(ls)
    yield put(actions.getPracticeListenSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.getPracticeListenFailure(err))
  }
}

function* fetchListenCourse(action) {
  try {
    const id = action.id
    const ls = yield call(api.fetchLsCourse,{id})
    console.log(ls)
    yield put(actions.getListenCourseSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.getListenCourseFailure(err))
  }
}

function* fetchListenPart(action) {
  try {
    const id = action.id
    const ls = yield call(api.fetchLsPart,{id})
    console.log("part: ",ls)
    yield put(actions.getListenPartSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.getListenPartFailure(err))
  }
}
