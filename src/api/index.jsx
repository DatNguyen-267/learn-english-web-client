import axios from "axios";

const URL = 'http://localhost:5000'

export const fetchCourses = () => axios.get(`${URL}/courses`)
export const createCourses = (payload) => axios.post(`${URL}/courses`, payload)

export const fetchPracticeListen = () => axios.get(`${URL}/listen-topic`)