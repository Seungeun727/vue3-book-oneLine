<template>
  <div class="btn-container">
    <button
      type="button"
      class="btn btn-prev"
      :disabled="pageStop"
      @click="prevBtn()">
      Prev
    </button>
    <div 
      v-for="num in totalPage"
      :key="num">
      <button
        type="button" 
        class="btn btn-page"
        @click="pageBtn">
        <span
          v-if="currentPage == num"
          :class="isActive">
          {{ num }}
        </span>
        <span
          v-else>
          {{ num }}
        </span>
      </button>
    </div>
    <button
      type="button"
      class="btn btn-next"
      @click="nextBtn()">
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'BoardPageButton',
  emits: {'child': null},
  data() {
    return {
      pageSize: 10,
      limit: 0,
      isActive: "change",
    }
  },
  computed: {
    ...mapGetters('board', ['totalPage']),
    pageStop() {
      return this.limit == 1 ? true : false;
    },
    currentPage() {
      return parseInt(this.$route.query.currentpage);
    }
  },
  methods: {
    pageBtn(e) {
      const currentPage = parseInt(e.target.textContent);
      const pageInfo = { currentPage, pageSize: this.pageSize };
      this.$emit('child', pageInfo);
      this.$router.push({ name: 'BoardList', query: { currentpage: currentPage, pagesize: 10}});
    },  
    prevBtn() {
      let currentPage = this.currentPage;
      if(currentPage > 1) {
        currentPage -= 1;
      } else {
        currentPage = 1;
        this.limit = 1;
      }
      const pageInfo = { currentPage, pageSize: this.pagesize };
      this.$store.dispatch("board/getBoardList", pageInfo);
      this.$router.push({ name: 'BoardList', query: { currentpage: currentPage, pageSize: 10}});
    },
    nextBtn() {
      this.limit = 0;
      let currentPage = this.currentPage;
      if(currentPage >= this.totalPage) {
        currentPage = this.totalPage;
      } else {
        currentPage += 1;
      }
      const pageInfo = { currentPage, pageSize: this.pageSize };
      this.$store.dispatch("board/getBoardList", pageInfo);
      this.$router.push({ name: 'BoardList', query: { currentpage: currentPage, pagesize: this.pageSize}});
    }
  },
  
}
</script>

<style lang="scss" scoped>
.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
}

.btn .btn-page {
  padding: 8px;
}

.change {
  display: block;
  width: 30px;
  padding: 6px;
  color: $white;
  background-color: $btn-color;
  border-radius: 30px;
  font-size: 1.0rem;
  &:hover {
    background-color: map-get($blue-colors, color3);
    border-radius: 30px;
  }
}
</style>