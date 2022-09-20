import axios from "axios";

const URL = "http://localhost:5000";
axios.defaults.withCredentials = true;
export const fetchCourses = () => axios.get(`${URL}/courses`);
export const createCourses = (payload) => axios.post(`${URL}/courses`, payload);

// AUTH
export const postLogin = (payload) => axios.post(`${URL}/user/login`, payload);
export const register = (payload) =>
  axios.post(`${URL}/user/register`, payload);
// USER
export const fetchUser = (token) =>
  axios.get(`${URL}/user/infor`, { headers: { Authorization: token } });

export const fetchPracticeListen = () => axios.get(`${URL}/listen-topic`);

export const fetchLsCourse = ({ id }) =>
  axios.get(`${URL}/listen-topic/course/${id}`);
export const fetchLsPart = ({ id }) =>
  axios.get(`${URL}/listen-topic/part/${id}`);

//GRAMMAR
export const fetchGrammar = () => axios.get(`${URL}/grammar-topic`);
export const findTopicGrammar = ({ id }) =>
  axios.get(`${URL}/grammar-topic/${id}`);

//STORE
export const findStoreWord = ({ id }) =>
  axios.get(`${URL}/store/id_user/${id}`);

//NOTE
export const fetchNote = () => axios.get(`${URL}/note`);
export const addNote = (payload) => axios.post(`${URL}/note/addNote`, payload);
export const updateNote = (payload) =>
  axios.post(`${URL}/note/updateNote`, payload);
// SAVE QUESTION IN EXAM
export const saveQuestion = (payload) =>
  axios.post(`${URL}/exam/save-question`, payload);
