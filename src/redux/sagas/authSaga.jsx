import { fork, take, takeLatest, call, delay, put } from "redux-saga/effects";
import history from "../history";
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../actions/index'

export function *checkLoggedIn() {
  // yield delay(1000) // fake gọi api
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  if (isLoggedIn) {
    yield put(actions.login_success({
      id: 1, 
      name: 'test'
    }))
  }
}
function *handleLogin(payload) {
  try {
    console.log('handle login')
    localStorage.setItem('access_token', 'fake_token')
    yield put(actions.login_success({
      id: 1, 
      name: 'test'
    }))
    const {navigate} = payload
    navigate('/home')
    console.log(navigate)
  } catch (error) {
    yield put(actions.login_failure(error))
  }
}

function *handleLogout(payload) {
  console.log('handle logout')
  localStorage.removeItem('access_token')
  // yield delay(500)
  const { navigate } = payload
  navigate('/login')
}

function *watchLoginFlow() {
  while(true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'))
    if (!isLoggedIn) {
      // Lắng nghe Login
      const login_request_action = yield take(actionTypes.LOGIN_REQUEST)
      yield fork(handleLogin,login_request_action.payload) // non-blocking
    }
    // Đợi logout
    console.log('waiting logout')
    const logout = yield take(actionTypes.LOGOUT)  
    console.log('take logout')
    yield call(handleLogout, logout.payload) // blocking
  }
  
}

export function* authSaga(){
  yield fork(watchLoginFlow)
}