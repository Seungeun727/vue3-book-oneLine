import axios from "axios";
const board = {
  namespaced: true,
  state: () => ({
    posts: [],
    post: [],
    pageInfo: [],
  }),
  getters: {
    totalPage(state) {
      return state.pageInfo.totalPage;
    } 
  },
  mutations: {
    setBoardList(state, payload) {
      return state.posts = payload;
    },
    setUserPost(state, payload) {
      return state.post = payload;
    },
    setPageInfo(state, payload) {
      return state.pageInfo = payload;
    },
  },
  actions: {
    getBoardList({commit}, pageInfo) {
      axios.get(`${process.env.VUE_APP_API_URL}/board`, 
      { params: pageInfo 
      }).then((res) => {
        console.log(res.data);
        commit('setBoardList', res.data.posts);
        commit('setPageInfo', res.data.pageInfo);
      }).catch((err) => {
        console.log(err.response);
      })
    },
    getUserPost({commit}, payload) {
      axios.get(`${process.env.VUE_APP_API_URL}/board/` + payload.postId,
      ).then((res) => {
        commit('setUserPost', res.data);        
      }).catch((err) => {
        console.log(err.response);
      })
    }
  }
};

export default board;