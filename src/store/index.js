import { createStore } from "vuex";
import user from './user';
import board from './board';

const store = createStore({
  modules: {
    user,
    board,
  }
});

export default store;