<template>
  <div class="container">
    <button 
      type="button"
      class="btn btn-prev"
      @click="prevBtn">
      Prev
    </button>
    <div 
      v-for="num in totalPage"
      :key="num">
      <button
        type="button" 
        class="btn btn-page"
        @click="pageBtn">
        {{ num }}
      </button>
    </div>
    <button 
      type="button"
      class="btn btn-next"
      @click="nextBtn">
      Next
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'BoardPageButton',
  emits: {'child': null},
  data() {
    return {
      pageSize: 10,
    }
  },
  computed: {
    ...mapState('board', ['totalPage']),
    ...mapMutations('board', ['totalPages']),
  },
  methods: {
    pageBtn(e) {
      const currentPage = parseInt(e.target.textContent);
      const pageInfo = { currentPage, pageSize: this.pageSize };
      this.$emit('child', pageInfo);
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.btn {
  width: 45px;
  height: 30px;
  border: 0;
  outline: 0;
  background: 0;
  font-size: 1.0rem;
}

.btn-page {
  padding: 8px;
}

.btn-page:hover {
  background-color: $btn-color;
  border-radius: 20px;
  color: $white;
}
</style>