import { signUp, login } from '../api/auth';

const user = {
  namespaced: true,
  state: () => ({
    signUpStatus: [],
    userInfo: [],
    token: null,
  }),
  getters: {},   
  mutations: {
    signUpCheck(state, payload) {
      return state.signUpStatus = payload;
    },
    setUser(state, userInfo) {
      return state.userInfo = userInfo;
    },
    login(state, accessToken) {
      return state.token = accessToken;
    } 
  },
  actions: {
    regsiterUser({ commit }, signInfo) {
      signUp(signInfo).then((res) => {
        console.log("Resigster User response success.", res.data);
        commit('signUpCheck', res.data);
      }).catch((err) => {
        console.log("Register User response failed.", err.response); 
        commit('signUpCheck', err.response.data.signMessage);
      });
    },
    loginUser({ commit }, loginInfo) {
      login(loginInfo).then((res) => {
        console.log("loginUser response success", res);
        commit('setUser', res.data.userInfo);
        commit('login', res.data.accessToken);
      }).catch((err) => {
        console.error("loginUser response failed", err.response);
      })
    }
  },
};

export default user;