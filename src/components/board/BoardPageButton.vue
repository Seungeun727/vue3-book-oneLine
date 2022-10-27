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
      <button>{{ num }}</button>
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
  computed: {
    ...mapState('board', ['totalPage']),
    ...mapMutations('board', ['totalPages']),
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
  height: 20px;
}
</style>