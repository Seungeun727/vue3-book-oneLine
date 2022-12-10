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
    // eslint-disable-next-line no-unused-vars
    getToken(state) {
      let accessToken = cookies.get('accessToken');
      return accessToken;
    },
    isLogin(state) {
      return state.isAuth !== null;
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
      state.isAuth = true;
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
        commit('login', res.data.acces_token);
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