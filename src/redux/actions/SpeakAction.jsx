import * as actionTypes from './../../constants/actionTypes'
// FETCH ALL
export const getSpeakLessonRequest = (payload) => {
  return {
    type: actionTypes.FETCH_SPEAK_LESSON_REQUEST,
    payload,
  }
}
export const getSpeakLessonSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_SPEAK_LESSON_SUCCESS,
    payload
  }
}
export const getSpeakLessonFailure = (error) => {
  return {
    type: actionTypes.FETCH_SPEAK_LESSON_FAILURE,
    error
  }
}
export const findSpeakQuestionRequest = (payload) => {
  return {
    type: actionTypes.FIND_SPEAK_QUESTION_REQUEST,
    payload,
  }
}
export const findSpeakQuestionSuccess = (payload) => {
  return {
    type: actionTypes.FIND_SPEAK_QUESTION_SUCCESS,
    payload
  }
}
export const findSpeakQuestionFailure = (error) => {
  return {
    type: actionTypes.FIND_SPEAK_QUESTION_FAILURE,
    error
  }
}

// FETCH ALL SPEAK GRAMMAR
export const getSpeakGrammarRequest = () => {
  return {
    type: actionTypes.FETCH_SPEAK_GRAMMAR_REQUEST,
  }
}
export const getSpeakGrammarSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_SPEAK_GRAMMAR_SUCCESS,
    payload
  }
}
export const getSpeakGrammarFailure = (error) => {
  return {
    type: actionTypes.FETCH_SPEAK_GRAMMAR_FAILURE,
    error
  }
}

// FIND ONE GRAMMAR
export const findSpeakGammmarRequest = (id) => {
  return {
    type: actionTypes.FIND_SPEAK_GRAMMAR_REQUEST,
    id
  }
}
export const findSpeakGammmarSuccess = (payload) => {
  return {
    type: actionTypes.FIND_SPEAK_GRAMMAR_SUCCESS,
    payload
  }
}
export const findSpeakGammmarFailure = (error) => {
  return {
    type: actionTypes.FIND_SPEAK_GRAMMAR_FAILURE,
    error
  }
}
