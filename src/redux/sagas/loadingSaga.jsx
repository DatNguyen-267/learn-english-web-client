
import { takeEvery, takeLatest, call, take, put, fork, all, delay } from 'redux-saga/effects'
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../actions/index'

export default function* loadingSaga() {
  yield takeLatest(actionTypes.UNLOADING_REQUEST, unloadFunc)
}

function* unloadFunc() {
  yield delay(1000)
  yield put(actions.unLoadingSuccess())
}
