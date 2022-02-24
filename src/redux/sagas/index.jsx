
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import { authSaga, checkLoggedIn } from './authSaga'
import courseSaga from './courseSaga'


function *mySaga() {
  yield all([
    courseSaga(),
    authSaga(),
    checkLoggedIn(),
  ])
}

export default mySaga