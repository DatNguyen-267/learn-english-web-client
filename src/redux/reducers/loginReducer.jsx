import * as actionTypes from './../../constants/actionTypes'

const initialState = {
    isLogging: false,
    isLogged: false,
    currentUser: undefined
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLogging: true,
            }
        case actionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isLogged: true,
                isLogging: false,
                currentUser: action.payload,
            }
        }
        case actionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                isLogging: false,
            }
        }
        case actionTypes.LOGOUT: {
            return {
                ...state,
                isLogged: false,
                currentUser: undefined,
            }
        }
        default: 
            return state
    }
}