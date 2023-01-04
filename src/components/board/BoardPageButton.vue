<template>
  <div class="btn-container">
    <button
      type="button"
      class="btn--page"
      @click="prevPageButton()">
      <i class="fas fa-chevron-left" />
    </button>
    <div 
      v-for="num in state.totalPage"
      :key="num">
      <button
        v-if="state.currentPage == num"
        type="button" 
        :class="state.isActive"
        @click="clickPageButton">
        {{ num }}
      </button>
      <button
        v-else
        type="button" 
        @click="clickPageButton">
        {{ num }}
      </button>
    </div>
    <button
      type="button"
      class="btn--page"
      @click="nextPageButton()">
      <i class="fas fa-chevron-right" />
    </button>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
export default {
  name: 'BoardPageButton',
  emits: {'child': null},
  setup(props, context) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      pageSize: 10,
      limit: 1,
      isActive: "change",
      totalPage: computed(() => store.getters['board/totalPage']),
      currentPage: computed(() => parseInt(route.query.currentpage)),
    });

    const clickPageButton = (e) => {
      const currentPage = parseInt(e.target.textContent);
      const pageInfo = { currentPage, pageSize: state.pageSize };
      context.emit('child', pageInfo);
      router.push({ name: 'BoardList', query: { currentpage: currentPage, pagesize: state.pageSize}});
    };

    const prevPageButton = () => {
      let currentPage = parseInt(route.query.currentpage);
      if(currentPage > 1) {
        currentPage -= 1;
      } else {
        currentPage = 1;
        state.limit = 1;
      }
      const pageInfo = { currentPage, pageSize: state.pageSize };
      store.dispatch("board/getBoardList", pageInfo);
    };
    const nextPageButton = () => {
      let currentPage = parseInt(route.query.currentpage);
      if(currentPage >= state.totalPage) {
        currentPage = state.totalPage;
      } else {
        currentPage += 1;
      }
      const pageInfo = { currentPage, pageSize: state.pageSize };
      store.dispatch("board/getBoardList", pageInfo);
    };

    return {
      state,
      clickPageButton,
      prevPageButton,
      nextPageButton,
    }
  }
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

.change {
  margin-top: 5px;
  padding: 8px;
  border: 1px solid $light-gray;
  border-radius: .3rem;
  background-color: map-get($gray-colors, color4);
  color: $white;
  &:hover {
    background-color: $main-color;
  }
}
</style>