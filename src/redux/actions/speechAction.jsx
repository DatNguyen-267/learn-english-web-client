import * as actionTypes from './../../constants/actionTypes'
// FETCH
export const setSpeakSuccess = (payload) => {
  return {
    type: actionTypes.SET_SPEAK_SUCCESS,
    payload: payload
  }
}

export const setSpeakSlowSuccess = (payload) => {
  return {
    type: actionTypes.SET_SPEAK_SLOW_SUCCESS,
    payload: payload
  }
}