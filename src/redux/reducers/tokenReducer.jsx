import * as actionTypes from './../../constants/actionTypes'

const initialState = ''


export default function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_TOKEN:
      return action.payload
    default:
      return state
  }
}