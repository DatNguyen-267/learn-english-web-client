import { FETCH_USER, GET_TOKEN, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, RESET_TOKEN } from "../../constants/actionTypes";

export const login_request = (payload) => {return {type: LOGIN_REQUEST, payload}}
export const login_success = (payload) => {return {type: LOGIN_SUCCESS,payload}}
export const login_failure = (payload) => {return {type: LOGIN_FAILURE,payload}}
export const logout = (payload) => {return {type: LOGOUT,payload}}
export const getToken = (payload) => {return {type: GET_TOKEN,payload}}
export const resetToken = (payload) => {return {type: RESET_TOKEN,payload}}