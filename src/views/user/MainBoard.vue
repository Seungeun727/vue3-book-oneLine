<template>
  <div class="container">
    <span class="title">전체 게시물</span>
    <button 
      type="text"
      @click="moreBoard">
      더보기
    </button>
    <div 
      v-for="post in posts"
      :key="post.board_no"
      class="board">
      <router-link
        class="inner--left"
        :to="{ name: 'BoardDetail', params: { id: `${post.board_no}`}}">
        {{ post.board_text }}
      </router-link>
      <div class="inner--right">
        {{ post.createdAt }}
      </div>
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
  padding: 30px;
  .board {
    border-bottom: 1px solid $light-gray;
    line-height: 35px;
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
}
.title {
  font-size: $font-size;
}

a {
  display: block;
  text-decoration: none;
  color: $font-color;
  flex-wrap: wrap;
}

</style>