import axios from "axios";

const axiosToken = axios.create({
    baseURL: 'http://localhost:5000',
})
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access_token') ?
    JSON.parse(localStorage.getItem('access_token')) : null
}, function (error) {
  return Promise.reject(error);
});
export default axiosToken