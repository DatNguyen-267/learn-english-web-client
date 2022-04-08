import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  isLoading: true,
}

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ONLOADING:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.UNLOADING_REQUEST: {
      return {
        ...state,
      }
    }
    case actionTypes.UNLOADING_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state
  }
}