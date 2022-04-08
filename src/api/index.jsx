import axios from "axios";

const URL = 'http://localhost:5000'
axios.defaults.withCredentials = true
export const fetchCourses = () => axios.get(`${URL}/courses`)
export const createCourses = (payload) => axios.post(`${URL}/courses`, payload)

// AUTH
export const postLogin = (payload) => axios.post(`${URL}/user/login`, payload)
export const register = (payload) => axios.post(`${URL}/user/register`, payload)
// USER
export const fetchUser = (token) => axios.get(`${URL}/user/infor`, {headers: {Authorization: token}})

//Listen
export const fetchPracticeListen = () => axios.get(`${URL}/listen-topic`)
export const fetchLsCourse = ({id}) => axios.get(`${URL}/listen-topic/course/${id}`)
export const fetchLsPart = ({id}) => axios.get(`${URL}/listen-topic/part/${id}`)


