import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data:[],
  isLoading: false,
}
export default function storeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FIND_STORE_WORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FIND_STORE_WORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FIND_STORE_WORD_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
   
    default: 
      return state
  }
}