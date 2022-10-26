import axios from "axios";
const board = {
  namespaced: true,
  state: () => ({
    posts: [],
  }),
  getters: {},
  mutations: {
    setBoardList(state, payload) {
      return state.posts = payload;
    }
  },
  actions: {
    getBoardList({commit}) {
      axios.get(`${process.env.VUE_APP_API_URL}/board`)
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        commit('setBoardList', res.data);
      }).catch((err) => {
        console.log(err.response);
      })
    },
  }
};

export default board;