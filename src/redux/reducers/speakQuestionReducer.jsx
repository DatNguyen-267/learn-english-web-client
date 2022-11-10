import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: [],
  isLoading: false,
}
export default function speakQuestionReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FIND_SPEAK_QUESTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FIND_SPEAK_QUESTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FIND_SPEAK_QUESTION_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
   
    default: 
      return state
  }
}