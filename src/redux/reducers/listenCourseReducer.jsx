import * as actionTypes from './../../constants/actionTypes'

const initialState = {
  data: {
    name:'',
    list_part:['1','2']
  },
  isLoading: false,
}
export default function listenCourseReducer(state = initialState, action) {
  switch (action.type) {
   
    case actionTypes.FETCH_LISTEN_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_LISTEN_COURSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }
    case actionTypes.FETCH_LISTEN_COURSE_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default: 
      return state
  }
}