<template>
  <div class="container">
    <div>
      <button 
        class="btn btn-add"
        @click="addBoard()">
        등록
      </button> 
      <BoardItem 
        :posts="posts" />
    </div>
    <BoardPageButton
      @child="getPosts" />
  </div>
</template>

<script>
import BoardItem from './BoardItem.vue';
import BoardPageButton from './BoardPageButton.vue';
import { mapState } from 'vuex';

export default {
  name: 'BoardList',
  components: {
    BoardItem,
    BoardPageButton
  },
  computed: {
    ...mapState('board', ['posts']),
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts(pageInfo) {
      this.$store.dispatch("board/getBoardList", pageInfo)
    },
    addBoard() {
      this.$router.push('board/write');
    }
  }
}  
</script>

<style lang="scss" scoped>
.container {
  width: 900px;
  height: 500px;
  padding-top: 70px;
  margin: 0 auto;
}

.btn {
  outline: 0;
  border: 0;
  width: 100px;
  height: 30px;
  background: 0;
}

.btn-add {
  float: right;
  margin-bottom:5px;
  background-color: $btn-color;
  color: white;
  box-shadow: 2px 2px #00000a13;
  font-size: 1.0rem;
  font-weight: 700;
}
</style>