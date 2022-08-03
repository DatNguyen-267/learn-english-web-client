import { delay, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '~/constants/actionTypes';
import * as actions from '~/redux/actions/index';

export default function* loadingSaga() {
  yield takeLatest(actionTypes.UNLOADING_REQUEST, unloadFunc);
}

function* unloadFunc() {
  yield delay(500);
  yield put(actions.unLoadingSuccess());
}
