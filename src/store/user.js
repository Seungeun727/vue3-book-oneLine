import { signUp, login } from '../api/auth';
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
      state.token = accessToken;
    },
    isLogin(state) {
      return state.isLogin !== null;
    }
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
      cookies.set('accessToken', accessToken);
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
      login(loginInfo)
      .then((res) => {
        console.log("loginUser response success", res.data);
        commit('setUser', res.data.userInfo);
        commit('login', res.data.access_token);
        if(res.status === 201) {
          router.push({ name: 'Home'});
        }
      })
      .catch((err) => {
        console.error("loginUser response failed", err.response);
      })
    }
  },
};

export default user;