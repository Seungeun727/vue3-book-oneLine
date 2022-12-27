<template>
  <div class="container">
    <div class="first-content">
      <span class="title">전체 게시물</span>
      <router-link
        :to="{ name: 'BoardList'}"
        class="btn-text">
        더보기
      </router-link>
    </div>
    <router-link
      v-for="post in state.posts"
      :key="post.board_no"
      class="board"
      :to="{ name: 'BoardDetail', params: { id: `${post.board_no}`}}">
      <span class="inner--left">{{ post.board_title }}</span>
      {{ post.createdAt }}
    </router-link>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const state = reactive({
      posts: computed(() => store.state.board.posts),
      pageInfo: 0
    });

    store.dispatch('board/getBoardList', state.pageInfo);
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 350px;
  padding: 30px;
  background-color: $white;
  border-radius: 20px;
  .board {
    padding: 3px;
    line-height: 25px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
}

.btn-text {
  display: block;
  width: 60px;
  height: 25px;
  border: 0;
  outline: 0;
  background: 0;
  line-height: 30px;
  color: $main-color;
  font-size: 1.1rem;
  &:active {
    background-color: #007bff53;
    border-radius: 20px;
  }
}

.first-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
  margin-bottom: 8px;
  border-bottom: 2px solid $light-gray;
  .title {
    font-weight: 550;
    font-size: 1.1rem;
  }
}

a:hover {
  color: $main-color;
}
</style>