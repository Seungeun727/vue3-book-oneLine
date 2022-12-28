<template>
  <div>
    <div class="user-info">
      <span class="user-text">{{ state.userId }}님, 안녕하세요.</span>
    </div>
    <div class="check">
      <div class="check-point">
        <label>기록</label>
        <span class="number-count">{{ state.userPost.length }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    store.dispatch('mypage/userBoardList');

    const state = reactive({
      userId: computed(() => store.getters['user/getUser']),
      userPost: computed(() => store.state.mypage.userPost),
    });
    return {
      state
    }
  }
};
</script>

<style lang="scss" scoped>
  .user-info {
    // background: green;
    margin-bottom: 15px;
    .user-text {
      // background: blue;
      font-size: 1.5rem;
    }
  }


.check-point {
  width: 200px;
  height: 100px;
  background: $white;
  border-radius: .2rem;
  text-align: center;
  padding: 5px 0;
  font-size: 1.5rem;

  .number-count {
    color: $main-color;
    font-weight: 550;
  }
}

.check {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
