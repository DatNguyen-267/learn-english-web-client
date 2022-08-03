import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '~/api';
import * as actionTypes from '~/constants/actionTypes';
import * as actions from '~/redux/actions/index';

export default function* practiceListenSaga() {
  yield takeLatest(actionTypes.FETCH_GRAMMAR_REQUEST, fetchGrammar);
  yield takeLatest(actionTypes.FIND_TOPIC_GRAMMAR_REQUEST, findTopicGammmar);
}

function* fetchGrammar(action) {
  try {
    const ls = yield call(api.fetchGrammar);
    console.log(ls);
    yield put(actions.getGrammarSuccess(ls.data));
  } catch (err) {
    yield put(actions.getGrammarFailure(err));
  }
}

function* findTopicGammmar(action) {
  try {
    const id = action.id;
    const ls = yield call(api.findTopicGrammar, { id });
    console.log(ls);
    yield put(actions.findTopicGammmarSuccess(ls.data));
  } catch (err) {
    yield put(actions.findTopicGammmarFailure(err));
  }
}
