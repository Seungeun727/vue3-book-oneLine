<template>
  <div class="container">
    <div class="cotent">
      <span class="title">
        나의 기록
      </span>
    </div>
    <div
      v-if="state.myPost.length !== 0" 
      class="card-container">
      <user-board-item
        v-for="post in state.myPost"
        :key="post.board_no" 
        :post="post" />
      <button>
        더보기
      </button>
    </div>
    <div v-else>
      <button>작성한 기록이 없습니다.</button>
    </div>
  </div>
</template>

<script>
import UserBoardItem from './userBoardItem.vue';
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';
export default {
  components: {
    UserBoardItem
  },
  setup() {
    const state = reactive({
      myPost: computed(() => store.state.mypage.userPost),
    });
    const store = useStore();
    store.dispatch('mypage/userBoardList');

    return {
      state,
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
.card-container {
  display: flex;
  flex-direction: row;
  width: 900px;
  height: 350px;
}
</style>