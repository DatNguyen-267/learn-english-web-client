import * as actionTypes from './../../constants/actionTypes'

// FIND STORE WORD BY ID USER 
export const findStoreWordRequest = (id) => {
  return {
    type: actionTypes.FIND_STORE_WORD_REQUEST,
    id
  }
}
export const findStoreWordSuccess = (payload) => {
  return {
    type: actionTypes.FIND_STORE_WORD_SUCCESS,
    payload
  }
}
export const findStoreWordFailure = (error) => {
  return {
    type: actionTypes.FIND_STORE_WORD_FAILURE,
    error
  }
}
// FIND STORE Question BY ID USER 
export const findStoreQuestionRequest = (id) => {
  return {
    type: actionTypes.FIND_STORE_QUESTION_REQUEST,
    id
  }
}
export const findStoreQuestionSuccess = (payload) => {
  return {
    type: actionTypes.FIND_STORE_QUESTION_SUCCESS,
    payload
  }
}
export const findStoreQuestionFailure = (error) => {
  return {
    type: actionTypes.FIND_STORE_QUESTION_FAILURE,
    error
  }
}

