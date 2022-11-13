import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: [],
  isLoading: false,
}
export default function speakGrammarReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_SPEAK_GRAMMAR_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_SPEAK_GRAMMAR_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FETCH_SPEAK_GRAMMAR_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case actionTypes.FIND_SPEAK_GRAMMAR_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FIND_SPEAK_GRAMMAR_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FIND_SPEAK_GRAMMAR_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
   
    default: 
      return state
  }
}