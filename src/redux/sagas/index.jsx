
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import { authSaga, checkLoggedIn } from './authSaga'
import courseSaga from './courseSaga'
import practiceListenSaga from './practiceListenSaga'


function *mySaga() {
  yield all([
    courseSaga(),
    authSaga(),
    checkLoggedIn(),
    practiceListenSaga(),
  ])
}

export default mySaga