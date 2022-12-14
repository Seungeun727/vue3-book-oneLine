import authApi from '../api/auth';
import { useCookies } from 'vue3-cookies';
import router from '../routes';
const { cookies } = useCookies();
const user = {
  namespaced: true,
  state: () => ({
    signUpStatus: [],
    userInfo: [],
    token: null,
    isLogin: null,
  }),
  getters: {
    getUser(state) {
      return state.userInfo;
    },
    getToken(state) {
      let accessToken = cookies.get('accessToken');
      return state.token = accessToken;
    },
    isLogin(state) {
      return state.isLogin !== null;
    },
  },   
  mutations: {
    signUpCheck(state, payload) {
      return state.signUpStatus = payload;
    },
    setUser(state, userInfo) {
      state.userInfo = userInfo;
    },
    login(state, accessToken) {
      state.token = accessToken;
      state.isLogin = true;
    },
    logout(state) {
      state.userInfo = [];
      state.token = null;
      state.isLogin = null;
      cookies.remove('accessToken');
    }
  },
  actions: {
    regsiterUser({ commit }, signInfo) {
      authApi.signUp(signInfo).then((res) => {
        console.log("Resigster User response success.", res.data);
        commit('signUpCheck', res.data);
      }).catch((err) => {
        console.log("Register User response failed.", err.response); 
        commit('signUpCheck', err.response.data.signMessage);
      });
    },
    loginUser({ commit }, loginInfo) {
      authApi.login(loginInfo)
      .then((res) => {
        console.log("loginUser response success", res.data);
        commit('setUser', res.data.userInfo);
        commit('login', res.data.access_token);
        if(res.status === 201) {
          cookies.set('accessToken', res.data.access_token);
          router.push({ name: 'Home'});
        }
      })
      .catch((err) => {
        console.error("loginUser response failed", err.response);
      })
    },
    logout({ commit }, logout) {
      console.log(logout);
      commit('logout');
      authApi.logout()
      .then((res) => {
        console.log("logout response success", res.data);
        router.push({ name: 'Login'})
      })
      .catch((err) => {
        console.log("logout response err", err.response.data);
      })
    }
  },
};

export default user;