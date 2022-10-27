<template>
  <div class="container">
    <div> 
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
</style>