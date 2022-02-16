import { LOGIN_FAILURE, LOGIN, LOGIN_SUCCESS } from "../../constants/actionTypes";

export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}
export const login_success = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
export const login_falure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload
    }
}