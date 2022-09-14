
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import { authSaga, checkLoggedIn } from './authSaga'
import courseSaga from './courseSaga'
import loadingSaga from './loadingSaga'
import practiceListenSaga from './practiceListenSaga'
import { settingSpeakSaga } from './settingSpeakSaga'
import grammarSaga from './grammarSaga'
import storeSaga from './storeSaga'
import noteSaga from "./noteSaga"
function *mySaga() {
  yield all([
    authSaga(),
    checkLoggedIn(),
    practiceListenSaga(),
    settingSpeakSaga(),
    loadingSaga(),
    grammarSaga(),
    storeSaga(),
    noteSaga(),
  ])
}

export default mySaga