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

