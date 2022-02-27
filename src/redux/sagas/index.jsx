
import {  takeLatest ,call, put, fork, all } from 'redux-saga/effects'
import { authSaga, checkLoggedIn } from './authSaga'
import courseSaga from './courseSaga'

// function* fetchPracticeListen(action) {
//   try {
//     const ls = yield call(api.fetchPracticeListen)
//     console.log(ls)
//     yield put(actions.getPracticeListenSuccess(ls.data))
//   }
//   catch(err) {
//     yield put(actions.getPracticeListenFailure(err))
//   }
// }
// function* fetchListenCourse(action) {
//   try {
//     const id = action.id
//     const ls = yield call(api.fetchLsCourse,{id})
//     console.log(ls)
//     yield put(actions.getListenCourseSuccess(ls.data))
//   }
//   catch(err) {
//     yield put(actions.getListenCourseFailure(err))
//   }
// }
function *mySaga() {
  yield all([
    courseSaga(),
    authSaga(),
    checkLoggedIn(),
  ])
}

export default mySaga