import * as actionTypes from '../../constants/actionTypes'

const initialState = {
  voca: undefined,
  grammar: undefined,
  isSuccess: false,
}
export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_VOCA_SUCCESS:
      return {
        ...state,
        voca: action.payload,
        isSuccess: true,
      }
    case actionTypes.GET_ALL_VOCA_FAILURE: {
      return {
        ...state,
        isSuccess: false,
      }
    }
    default: 
      return state
  }
}