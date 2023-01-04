import { boardList, userPost } from "@/api/board";
import router from '../routes';
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
      console.log("store", pageInfo);
      boardList(pageInfo).then((res) => {
        commit('setBoardList', res.data.posts);
        commit('setPageInfo', res.data.pageInfo);
        router.push({ name: 'BoardList', query: { currentpage: pageInfo.currentPage, pagesize: pageInfo.pageSize}});
      }).catch((err) => {
        console.log(err.response);
      })
    },
    getUserPost({commit}, payload) {
      userPost(payload.postId)
      .then((res) => {
        commit('setUserPost', res.data);        
      }).catch((err) => {
        console.log(err.response);
      })
    }
  }
};

export default board;