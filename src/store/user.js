import axios from 'axios';

const user = {
  namespaced: true,
  state: () => ({
    signUpStatus: [],
    status: null,
  }),
 
  mutations: {
    signUpCheck(state, payload) {
      return state.signUpStatus = payload;
    },
    isCheck(state, payload) {
      return state.status = payload.status;
    },
    resetCheck(state) {
      return state.status = "";
    }
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
    checkId({ commit }, userId) {
      console.log('user/checkId', userId);
      axios.get(`${process.env.VUE_APP_API_URL}/user/register/` + userId, {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        console.log("checkId User response success", res.data);
        commit('isCheck', res.data);
      }).catch((err) => {
        console.log(err.response.data.status);
        console.log("checkId User response failed.", err.response); 
        commit('isCheck', err.response.data.status);      
      });
    }
  },
};

export default user;