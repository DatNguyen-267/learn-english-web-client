import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  login: false,
}


export default function popUpReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TURN_ON_POPUP_LOGIN:
      return { ...state, login: true }
    case actionTypes.TURN_OFF_POPUP_LOGIN:
      return { ...state, login: false }
    default:
      return state
  }
}