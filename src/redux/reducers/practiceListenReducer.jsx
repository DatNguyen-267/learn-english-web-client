import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: null,
  isLoading: false,
}
export default function practiceListenReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PRACTICE_LISTEN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_PRACTICE_LISTEN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FETCH_PRACTICE_LISTEN_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
   
    default: 
      return state
  }
}