import axios from "axios";
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
let accessToken = cookies.get('accessToken');

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (err) {
    return Promise.reject(err);
  }
)
export default instance;
