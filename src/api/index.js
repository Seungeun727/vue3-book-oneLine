import axios from "axios";
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

instance.interceptors.request.use(
  function (config) {
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
