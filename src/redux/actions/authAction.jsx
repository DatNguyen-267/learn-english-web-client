import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../../constants/actionTypes";

export const login_request = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload
    }
}
export const login_success = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
export const login_failure = (error) => {
    return {
        type: LOGIN_FAILURE,
        error
    }
}
export const logout = (payload) => {
    return {
        type: LOGOUT,
        payload
    }
}