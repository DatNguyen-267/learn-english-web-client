import * as actionTypes from './../../constants/actionTypes'
// FETCH
export const getCoursesRequest = () => {
  return {
    type: actionTypes.FETCH_COURSE_REQUEST,
  }
}
export const getCoursesSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_COURSE_SUCCESS,
    payload
  }
}
export const getCoursesFailure = (error) => {
  return {
    type: actionTypes.FETCH_COURSE_FAILURE,
    error
  }
}
// CREATE
export const createCourseRequest = (payload) => { 
  return {
    type: actionTypes.CREATE_COURSE_REQUEST,
    payload
  }
}
export const createCourseSuccess = (payload) => { 
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    payload
  }
}
export const createCourseFailure = (error) => { 
  return {
    type: actionTypes.CREATE_COURSE_FAILURE,
    error
  }
}