<template>
  <div class="container">
    <div class="inner">
      <div class="page-area">
        총 <span class="page-count">{{ pageInfo.totalPostCount }}</span>건의 게시물이 있습니다.
      </div> 
      <button 
        class="btn btn--black"
        @click="addBoard()">
        등록
      </button>
    </div>
    <div>
      <BoardItem 
        :posts="posts" />
    </div>
    <BoardPageButton
      @child="getPosts" />
  </div>
</template>

<script>
import BoardItem from '@/components/board/BoardItem.vue';
import BoardPageButton from '@/components/board/BoardPageButton.vue';
import { mapState } from 'vuex';

export default {
  name: 'BoardList',
  components: {
    BoardItem,
    BoardPageButton
  },
  computed: {
    ...mapState('board', ['posts']),
    ...mapState('board', ['pageInfo']),
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
  .inner {
    width: 942px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.page-area {
  width: 350px;
  font-size: 0.9rem;
  .page-count {
    color: $dark-pink;
    font-weight: 550;
    line-height: 45px;
  }
}

</style>