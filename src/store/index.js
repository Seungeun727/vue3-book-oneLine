import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import user from './user';
import mypage from './mypage';
import board from './board';

const store = createStore({
  modules: {
    user,
    board,
    mypage,
  },
  plugins: [
    createPersistedState({
      paths: ['user'],
    })
  ],
});

export default store;