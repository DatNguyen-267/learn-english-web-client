import * as action from '../actions'
import * as api from '../../api'
import {  takeLatest ,call, put } from 'redux-saga/effects'

import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../actions/index'
function* fetchCourse(action) {
  try {
    const courses = yield call(api.fetchCourses)
    console.log(courses)
    yield put(actions.getCoursesSuccess(courses.data))
  }
  catch(err) {
    yield put(actions.getCoursesFailure)
  }
}
function* createCourse(action) {
  try {
    const courses = yield call(api.createCourses, action.payload)
    console.log('createCourse:', courses)
    yield put(actions.createCourseSuccess(courses.data))
  }
  catch(err) {
    yield put(actions.createCourseFailure(err))
  }
}

function* fetchPracticeListen(action) {
  try {
    const ls = yield call(api.fetchPracticeListen)
    console.log(ls)
    yield put(actions.getPracticeListenSuccess(ls.data))
  }
  catch(err) {
    yield put(actions.getPracticeListenFailure)
  }
}
function *mySaga() {
  yield takeLatest(actionTypes.FETCH_COURSE_REQUEST, fetchCourse)
  yield takeLatest(actionTypes.CREATE_COURSE_REQUEST, createCourse)

  yield takeLatest(actionTypes.FETCH_PRACTICE_LISTEN_REQUEST, fetchPracticeListen)
}

export default mySaga