import * as actionTypes from './../../constants/actionTypes'
// FETCH
export const getPracticeListenRequest = () => {
  return {
    type: actionTypes.FETCH_PRACTICE_LISTEN_REQUEST,
  }
}
export const getPracticeListenSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_PRACTICE_LISTEN_SUCCESS,
    payload
  }
}
export const getPracticeListenFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRACTICE_LISTEN_FAILURE,
    error
  }
}