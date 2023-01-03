<template>
  <div class="btn-container">
    <button
      type="button"
      class="btn--page"
      :disabled="pageStop"
      @click="prevBtn()">
      <i class="fas fa-chevron-left" />
    </button>
    <div 
      v-for="num in totalPage"
      :key="num">
      <button
        v-if="currentPage == num"
        type="button" 
        :class="isActive"
        @click="pageBtn">
        {{ num }}
      </button>
      <button
        v-else
        type="button" 
        @click="pageBtn">
        {{ num }}
      </button>
    </div>
    <button
      type="button"
      class="btn--page"
      @click="nextBtn()">
      <i class="fas fa-chevron-right" />
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
      isActive: "btn--black",
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
  align-items: center;
  margin-top: 40px;
}

.btn--page {
  margin-top: 5px;
  padding: 8px;
  border: 1px solid $light-gray;
  border-radius: .3rem;
  color: map-get($gray-colors, color4);
}

</style>