import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: ['1', '2'],
  isLoading: false,
}
export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_COURSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FETCH_COURSE_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case actionTypes.CREATE_COURSE_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    }
    case actionTypes.CREATE_COURSE_FAILURE: {
      return {
        ...state,
      }
    }
    default: 
      return state
  }
}