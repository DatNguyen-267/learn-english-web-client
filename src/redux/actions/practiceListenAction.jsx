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

// Fetch Course listen
export const getListenCourseRequest = (id) => {
  return {
    type: actionTypes.FETCH_LISTEN_COURSE_REQUEST,
    id
  }
}
export const getListenCourseSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_LISTEN_COURSE_SUCCESS,
    payload
  }
}
export const getListenCourseFailure = (error) => {
  return {
    type: actionTypes.FETCH_LISTEN_COURSE_FAILURE,
    error
  }
}

// Fetch Part listen
export const getListenPartRequest = (id) => {
  return {
    type: actionTypes.FETCH_LISTEN_PART_REQUEST,
    id
  }
}
export const getListenPartSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_LISTEN_PART_SUCCESS,
    payload
  }
}
export const getListenPartFailure = (error) => {
  return {
    type: actionTypes.FETCH_LISTEN_PART_FAILURE,
    error
  }
}

export const setQuestionPlaying = (value) => {
  return {
    type: actionTypes.SET_QUESTION_PLAYING,
    value
  }
}

export const setQuestionTrue = (value) => {
  return {
    type: actionTypes.SET_QUESTION_TRUE,
    value
  }
}