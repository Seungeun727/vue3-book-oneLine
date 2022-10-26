import { createStore } from "vuex";
import board from './board';

const store = createStore({
  modules: {
    board,
  }
});

export default store;