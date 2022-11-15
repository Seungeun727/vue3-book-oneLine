import axios from 'axios';

const user = {
  namespaced: true,
  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {
    // eslint-disable-next-line no-unused-vars
    regsiterUser({ commit }, signInfo) {
      console.log("userInfo payload", signInfo);
      axios.post(`${process.env.VUE_APP_API_URL}/user/register`, JSON.stringify(signInfo), {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log("Register User response failed.", err.response);
      });
    },
  },
};

export default user;