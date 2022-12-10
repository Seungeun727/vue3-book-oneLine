import axios from "axios";
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
const token = cookies.get('accessToken');
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});
instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization ? `Bearer ${ token.access_token}` : null;
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
