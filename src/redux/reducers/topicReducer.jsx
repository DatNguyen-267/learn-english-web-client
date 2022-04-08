import * as actionTypes from './../../constants/actionTypes'

const initialState = null

export default function topicReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_TOPIC_SUCCESS:
      return action.payload
    default:
      return state
  }
}