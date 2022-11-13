import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: [],
  isLoading: false,
}
export default function speakLessonReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_SPEAK_LESSON_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_SPEAK_LESSON_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FETCH_SPEAK_LESSON_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
   
    default: 
      return state
  }
}