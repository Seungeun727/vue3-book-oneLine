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
      <button
        type="button"
        class="btn btn--outline--circle">
        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
      </button>
    </div>
    <div v-else>
      <span>작성하신 기록이 없습니다.</span>
      <button>지금 등록하러 가실래요?</button>
    </div>
  </div>
</template>

<script>
import UserBoardItem from './userBoardItem.vue';
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  components: {
    UserBoardItem,
    FontAwesomeIcon
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
  padding: 30px;
  .title {
    font-size: 1.2rem;
    font-weight: 600;
  }
}
.card-container {
  display: flex;
  flex-direction: row;
  width: 900px;
  height: 350px;
}

.btn--outline--circle {
  position: absolute;
  top: 30%;
  right: 22%;
}
</style>