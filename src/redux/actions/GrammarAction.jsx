import * as actionTypes from './../../constants/actionTypes'
// FETCH ALL
export const getGrammarRequest = () => {
  return {
    type: actionTypes.FETCH_GRAMMAR_REQUEST,
  }
}
export const getGrammarSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_GRAMMAR_SUCCESS,
    payload
  }
}
export const getGrammarFailure = (error) => {
  return {
    type: actionTypes.FETCH_GRAMMAR_FAILURE,
    error
  }
}

// FIND ONE TOPIC
export const findTopicGammmarRequest = (id) => {
  return {
    type: actionTypes.FIND_TOPIC_GRAMMAR_REQUEST,
    id
  }
}
export const findTopicGammmarSuccess = (payload) => {
  return {
    type: actionTypes.FIND_TOPIC_GRAMMAR_SUCCESS,
    payload
  }
}
export const findTopicGammmarFailure = (error) => {
  return {
    type: actionTypes.FIND_TOPIC_GRAMMAR_FAILURE,
    error
  }
}

