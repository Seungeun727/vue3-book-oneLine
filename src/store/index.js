import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import user from './user';
import board from './board';

const store = createStore({
  modules: {
    user,
    board,
  },
  plugins: [
    createPersistedState({
      paths: ['user'],
    })
  ],
});

export default store;