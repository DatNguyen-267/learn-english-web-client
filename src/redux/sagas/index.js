import { all } from 'redux-saga/effects';
import { authSaga, checkLoggedIn } from '~/redux/sagas/authSaga';
import grammarSaga from '~/redux/sagas/grammarSaga';
import loadingSaga from '~/redux/sagas/loadingSaga';
import practiceListenSaga from '~/redux/sagas/practiceListenSaga';
import { settingSpeakSaga } from '~/redux/sagas/settingSpeakSaga';
import storeSaga from '~/redux/sagas/storeSaga';

function* mySaga() {
  yield all([
    authSaga(),
    checkLoggedIn(),
    practiceListenSaga(),
    settingSpeakSaga(),
    loadingSaga(),
    grammarSaga(),
    storeSaga(),
  ]);
}

export default mySaga;
