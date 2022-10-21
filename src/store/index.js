import { createStore } from "vuex";
import board from './board';

const store = createStore({
  moudles: {
    board,
  }
});

export default store;