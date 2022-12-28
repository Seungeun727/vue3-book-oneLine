<template>
  <div class="container">
    <div class="content">
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
    <div
      v-else
      class="card-column-container">
      <span class="error-text">작성하신 기록이 없습니다.</span>
      <router-link
        class="btn-text"
        :to="{ name: 'BoardWrite'}">
        지금 등록하러 가실래요?
      </router-link>
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
  background-color: $white;
  height: 280px;
  padding: 30px;
  .title {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .card-container {
    display: flex;
    flex-direction: row;
  }
}
.card-column-container {
  font-family:'Arial, sans-serif';
  position: absolute;
  top: 60%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .error-text  {
    color: $light-gray;
    font-weight: 550;
    font-size: 1.3rem;
  }
  .btn-text {
    font-size: 1.1rem;
    color: $main-color;
    &:active {
      padding: 10px;
      border-radius: .5rem;
      background-color: map-get($blue-colors, color1);
    }
  }
}

.btn--outline--circle {
  position: absolute;
  bottom: 32%;
  right: 28%;
}
</style>