
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import { authSaga, checkLoggedIn } from './authSaga'
import courseSaga from './courseSaga'
import loadingSaga from './loadingSaga'
import practiceListenSaga from './practiceListenSaga'
import { settingSpeakSaga } from './settingSpeakSaga'


function *mySaga() {
  yield all([
    authSaga(),
    checkLoggedIn(),
    practiceListenSaga(),
    settingSpeakSaga(),
    loadingSaga(),
  ])
}

export default mySaga