import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: {
    name:'',
    list_part:['1','2']
  },
  isLoading: false,
}
export default function grammarTopicReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FIND_TOPIC_GRAMMAR_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FIND_TOPIC_GRAMMAR_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FIND_TOPIC_GRAMMAR_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
   
    default: 
      return state
  }
}