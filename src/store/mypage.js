import authApi from "@/api/auth";

const mypage = {
  namespaced: true,
  state: () => ({
    userInfo: [],
    userPost: []
  }),
  getters: {

  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
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
    },
    getUserInfo({ commit }) {
      authApi.userInfo().then((res) => {
        console.log("mypage userInfo res.data", res.data);
        commit('setUserInfo', res.data);
      })
      .catch((err) => {
        console.log("mypage userInfo", err.response.data);
      })
    }
  }
};

export default mypage;