import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: {
    name:'',
    source:'',
    amount_question:'',
    follow:'',
    list_question:['1', '2'],
    
  },
  isLoading: false,
  question_playing: 0,
  question_true: 0,
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
    case actionTypes.SET_QUESTION_PLAYING: {
      console.log("question_playing_new: ", action.value)
      return {
        ...state,
        question_playing: action.value
        
      }
    }
    case actionTypes.SET_QUESTION_TRUE: {
      return {
        ...state,  
        question_true: action.value
      }
    }
    default: 
      return state
  }
}