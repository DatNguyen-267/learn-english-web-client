import * as actionTypes from '../../constants/actionTypes'

const initialState = {
  data: [],
  isLoading: false,
}
export default function writeQuestionReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FIND_WRITE_QUESTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FIND_WRITE_QUESTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FIND_WRITE_QUESTION_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
   
    default: 
      return state
  }
}