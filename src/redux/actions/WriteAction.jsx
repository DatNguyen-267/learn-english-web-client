import * as actionTypes from './../../constants/actionTypes'
// FETCH ALL
export const getWriteLessonRequest = (payload) => {
  return {
    type: actionTypes.FETCH_WRITE_LESSON_REQUEST,
    payload,
  }
}
export const getWriteLessonSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_WRITE_LESSON_SUCCESS,
    payload
  }
}
export const getWriteLessonFailure = (error) => {
  return {
    type: actionTypes.FETCH_WRITE_LESSON_FAILURE,
    error
  }
}
export const findWriteQuestionRequest = (payload) => {
  return {
    type: actionTypes.FIND_WRITE_QUESTION_REQUEST,
    payload,
  }
}
export const findWriteQuestionSuccess = (payload) => {
  return {
    type: actionTypes.FIND_WRITE_QUESTION_SUCCESS,
    payload
  }
}
export const findWriteQuestionFailure = (error) => {
  return {
    type: actionTypes.FIND_WRITE_QUESTION_FAILURE,
    error
  }
}

// FETCH ALL WRITE GRAMMAR
export const getWriteGrammarRequest = () => {
  return {
    type: actionTypes.FETCH_WRITE_GRAMMAR_REQUEST,
  }
}
export const getWriteGrammarSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_WRITE_GRAMMAR_SUCCESS,
    payload
  }
}
export const getWriteGrammarFailure = (error) => {
  return {
    type: actionTypes.FETCH_WRITE_GRAMMAR_FAILURE,
    error
  }
}

// FIND ONE GRAMMAR
export const findWriteGammmarRequest = (id) => {
  return {
    type: actionTypes.FIND_WRITE_GRAMMAR_REQUEST,
    id
  }
}
export const findWriteGammmarSuccess = (payload) => {
  return {
    type: actionTypes.FIND_WRITE_GRAMMAR_SUCCESS,
    payload
  }
}
export const findWriteGammmarFailure = (error) => {
  return {
    type: actionTypes.FIND_WRITE_GRAMMAR_FAILURE,
    error
  }
}
