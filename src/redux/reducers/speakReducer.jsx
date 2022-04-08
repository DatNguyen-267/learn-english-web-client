import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  speak: null,
  speakSlow: null,
}


export default function speakReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_SPEAK_SUCCESS:;
      return { ...state, speak: action.payload }
    case actionTypes.SET_SPEAK_SLOW_SUCCESS:
      return { ...state, speakSlow: action.payload }
    default:
      return state
  }
}