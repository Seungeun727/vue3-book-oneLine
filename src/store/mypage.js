import authApi from "@/api/auth";

const mypage = {
  namespaced: true,
  state: () => ({
    userPost: []
  }),
  getters: {

  },
  mutations: {
    setUserPost(state, posts) {
      state.userPost = posts;
    }
  },
  actions: {
    userBoardList({ commit }) {
      authApi.userPost().then((res) => {
        commit('setUserPost', res.data);
      })
      .catch((err) => {
        console.log("mypage userPost", err.response.data);
      })
    }
  }
};

export default mypage;