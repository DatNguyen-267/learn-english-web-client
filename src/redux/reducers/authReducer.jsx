import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  isLogging: false,
  isLogged: false,
  currentUser: undefined,
  error: '',
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLogging: true,
        error: '',
      }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        isLogging: false,
        currentUser: action.payload,
        error: '',
      }
    }
    case actionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        isLogging: false,
        error: action.payload,
      }
    }
    case actionTypes.LOGOUT: {
      return {
        ...state,
        isLogged: false,
        currentUser: undefined,
      }
    }
    default:
      return state
  }
}