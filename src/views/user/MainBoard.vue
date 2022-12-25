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
    <div 
      v-for="post in posts"
      :key="post.board_no"
      class="board">
      <span>{{ post.board_title }}</span>
      <router-link
        class="inner--left"
        :to="{ name: 'BoardDetail', params: { id: `${post.board_no}`}}">
        {{ post.createdAt }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('board', ['posts']),
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts(pageInfo) {
      pageInfo = 0;
      this.$store.dispatch("board/getBoardList", pageInfo)
    },
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
    border-bottom: 1px solid $light-gray;
    line-height: 25px;
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
}
.title {
  font-size: 1.1rem;
  font-weight: 550;
}

a {
  text-decoration: none;
  color: $font-color;
}

.btn-text {
  display: block;
  width: 50px;
  height: 30px;
  border: 0;
  outline: 0;
  padding: 5px;
  background: 0;
  line-height: 30px;
  color: $main-color;
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
}

.inner--left {
  font-weight: 500;
}
</style>