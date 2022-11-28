import axios from 'axios';

const user = {
  namespaced: true,
  state: () => ({
    signUpStatus: [],
  }),
  getters: {},
  mutations: {
    signUpCheck(state, payload) {
      return state.signUpStatus = payload;
    },
  },
  actions: {
    regsiterUser({ commit }, signInfo) {
      axios.post(`${process.env.VUE_APP_API_URL}/user/register`, JSON.stringify(signInfo), {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        console.log("Resigster User response success.", res.data);
        commit('signUpCheck', res.data);
      }).catch((err) => {
        console.log("Register User response failed.", err.response); 
        commit('signUpCheck', err.response.data.signMessage);
      });
    },
    // eslint-disable-next-line no-unused-vars
    checkId({ commit }, userId) {
      console.log('user/checkId', userId);
      axios.get(`${process.env.VUE_APP_API_URL}/user/register/` + userId, {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        console.log("checkId User response success", res.data);
      }).catch((err) => {
        console.log("checkId User response failed.", err.response); 
      });
    }
  },
};

export default user;