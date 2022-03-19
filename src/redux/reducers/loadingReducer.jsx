import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  isRequest: false,
  isLoading: false,
}

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOADING_REQUEST:
      return {
        ...state,
        isRequest: true,
      }
    case actionTypes.LOADING:
      return {
        ...state,
        isRequest: false,
        isLoading: true,
      }
    case actionTypes.UNLOADING: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state
  }
}