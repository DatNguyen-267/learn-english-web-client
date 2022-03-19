import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: {
    name:'',
    source:'',
    amount_question:'',
    follow:'',
    list_question:['1','2']
  },
  isLoading: false,
}
export default function listenPartReducer(state = initialState, action) {
  switch (action.type) {
   
    case actionTypes.FETCH_LISTEN_PART_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_LISTEN_PART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FETCH_LISTEN_PART_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default: 
      return state
  }
}