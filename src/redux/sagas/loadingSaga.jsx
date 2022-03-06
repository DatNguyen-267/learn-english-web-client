import * as api from '../../api'
import {  takeLatest ,call, put, fork, all, take, delay } from 'redux-saga/effects'
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../actions/index'


export function* loadingSaga(){
  yield fork(watchLoading)
}

function* watchLoading() {
  while(true) {
    yield take(actionTypes.LOADING_REQUEST)
    yield delay(1000)
    yield put(actions.loading())
    yield delay(1500)
    yield put(actions.unloading())
  }
}

