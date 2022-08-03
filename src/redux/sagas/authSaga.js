import { call, fork, put, take } from 'redux-saga/effects';
import { postLogin } from '~/api';
import * as actionTypes from '~/constants/actionTypes';
import * as actions from '~/redux/actions/index';

export function* checkLoggedIn() {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (isLoggedIn) {
    yield put(actions.login_success(JSON.parse(localStorage.getItem('access_token'))));
  }
}
function* handleLogin(payload) {
  try {
    const { email, password } = payload;
    let data;
    yield call(async () => {
      data = await postLogin({
        email: email,
        password: password,
      }).then((res) => res.data);
      console.log(data);
    });
    if (data.isAuth) {
      localStorage.setItem('access_token', JSON.stringify(data.user));
      yield put(actions.login_success(data.user));
      const { navigate } = payload;
      navigate('/course');
      // window.location.href('/home')
    } else {
      yield put(actions.login_failure('Tên đăng nhập hoặc mật khẩu không chính xác'));
    }
  } catch (error) {
    yield put(actions.login_failure(error));
  }
}

function* handleLogout(payload) {
  localStorage.removeItem('access_token');
  // yield delay(500)
  const { navigate } = payload;
  navigate('/login');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      // Lắng nghe Login
      const login_request_action = yield take(actionTypes.LOGIN_REQUEST);
      yield fork(handleLogin, login_request_action.payload); // non-blocking
    }
    // Đợi logout
    const logout = yield take(actionTypes.LOGOUT);
    yield call(handleLogout, logout.payload); // blocking
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
