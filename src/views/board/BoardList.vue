<template>
  <div class="list-container">
    <div class="inner">
      <div class="page-area"> 
        <span class="page-count"> 
          총 <span class="page-color">
            {{ pageInfo.totalPostCount }} 
          </span>
          건의 게시물이 있습니다.
        </span>
        <button 
          class="btn btn--black"
          @click="addBoard()">
          등록
        </button>
      </div>
      <div class="list">
        <table>
          <tr>
            <th>번호</th>
            <th width="150px">
              제목
            </th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
          <BoardItem
            v-for="post in posts"
            :key="post.board_no" 
            :post="post" />
        </table>
      </div>
      <BoardPageButton
        @child="getPosts" />
    </div>
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
.list-container {
  width: 1200px;
  height: 100%;
  padding-top: 70px;
  margin: 0 auto;
  .page-area {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
        
    .page-color {
      color: $dark-pink;
      font-weight: 550;
      line-height: 45px;
    }
  }
}

.list {
  width: 100%;
  height: 600px;
}
table {
  width: 100%;
  height: 500px;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
  tr {
    width: 900px;
  }
  
  th {
    width: 100%;
    height: 45px;
    color: $font-color;
    font-weight: 600;
    padding: 5px;
  }
}


</style>