import * as actionTypes from '../../constants/actionTypes'

const initialState = {
  data: [],
  isAddSuccess: undefined,
  isUpdateSuccess: false,
  isLoading: false,
}
export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_NOTE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAddSuccess: undefined,
        isUpdateSuccess: false,
      }
    case actionTypes.FETCH_NOTE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FETCH_NOTE_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case actionTypes.ADD_NOTE_SUCCESS: {
      return {
        ...state,
        isAddSuccess: true,
        isLoading: false,
      }
    }
    case actionTypes.ADD_NOTE_FAILURE: {
      return {
        ...state,
        isAddSuccess: false,
        isLoading: false,
      }
    }
    case actionTypes.UPDATE_NOTE_SUCCESS: {
      return {
        ...state,
        isUpdateSuccess: true,
        isLoading: false,
      }
    }
    case actionTypes.UPDATE_NOTE_FAILURE: {
      return {
        ...state,
        isUpdateSuccess: false,
        isLoading: false,
      }
    }
   
    default: 
      return state
  }
}