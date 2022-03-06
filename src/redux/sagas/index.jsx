
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import { authSaga, checkLoggedIn } from './authSaga'
import courseSaga from './courseSaga'
import { loadingSaga } from './loadingSaga'

// function* fetchPracticeListen(action) {
//   try {
//     const ls = yield call(api.fetchPracticeListen)
//     console.log(ls)
//     yield put(actions.getPracticeListenSuccess(ls.data))
//   }
//   catch(err) {
//     yield put(actions.getPracticeListenFailure)
//   }
// }
function *mySaga() {
  yield all([
    courseSaga(),
    authSaga(),
  ])
  // yield takeLatest(actionTypes.FETCH_PRACTICE_LISTEN_REQUEST, fetchPracticeListen)
}

export default mySaga