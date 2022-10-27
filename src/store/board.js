import axios from "axios";
const board = {
  namespaced: true,
  state: () => ({
    posts: [],
    totalPage: 0,
  }),
  getters: {},
  mutations: {
    setBoardList(state, payload) {
      return state.posts = payload;
    },
    totalPage(state, payload) {
      return state.totalPage = payload;
    }
  },
  actions: {
    getBoardList({commit}, pageInfo) {
      axios.get(`${process.env.VUE_APP_API_URL}/board/`, 
      { params: pageInfo 
      }).then((res) => {
        commit('setBoardList', res.data.posts);
        commit('totalPage', res.data.totalPage);
      }).catch((err) => {
        console.log(err.response);
      })
    },
  }
};

export default board;