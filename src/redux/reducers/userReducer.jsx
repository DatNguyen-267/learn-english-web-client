import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: undefined
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}