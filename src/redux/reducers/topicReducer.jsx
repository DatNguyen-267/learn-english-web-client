import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: undefined,
  error: '',
}

export default function topicReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_TOPIC_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
      case actionTypes.GET_TOPIC_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}