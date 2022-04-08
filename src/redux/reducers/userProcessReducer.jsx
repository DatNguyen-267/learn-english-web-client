import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  voca: null
}

export default function userProcessReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_VOCA_PROCESS:
      return {
        ...state,
        voca: action.payload,
      }
    default:
      return state
  }
}