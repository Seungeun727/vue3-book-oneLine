<template>
  <div class="container">
    <div
      v-for="post in post"
      :key="post.board_no"
      class="content">
      <div
        class="content-inner">
        <span class="content-number">
          {{ post.board_no }}
        </span>
        <span class="content-title">
          {{ post.board_title }}
        </span>
        <span class="content-author">
          저자: {{ post.board_author }}
        </span>
        <div  
          class="sub-title">
          {{ post.user_name }}
          {{ post.createdAt }}
        </div>
      </div>
      <div class="content-text">
        {{ post.board_text }}
      </div>
      <div class="btn-group">
        <BoardDetailButton />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BoardDetailButton from './BoardDetailButton';
export default {
  components: {
    BoardDetailButton,
  },  
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ...mapState('board', ['post']),
  },
  created() {
    this.$store.dispatch("board/getUserPost", { postId: this.id});
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height:700px;
  padding-top: 70px;
}
.content {
  position: relative;
  width: 70%;
  height: 600px;
  margin-left: 150px;
  border-radius:0px 0px 30px 0px;
  box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.3);
  .content-inner {
    padding: 15px;
    background-color: #333;  
    color: $white;

    .content-number {
      display: inline-block;
      border: 1px solid #fffafa;
      width: 40px;
      font-size: $font-size;
      text-align: center;
      border-radius: .2rem;
    }
  }
}
.content-title {
  font-size: $font-size;
  font-weight: 650;
  margin: 5px;
}

.sub-title {
  color: $light-gray;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
}
.post-text {
  color: black;
  padding: 10px;
}
.btn-group {
  width: 350px;
  right: 0;
  bottom: 30px;
  position: absolute;
}

</style>