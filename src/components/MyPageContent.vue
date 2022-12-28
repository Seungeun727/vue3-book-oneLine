<template>
  <div>
    <div class="user-info">
      <span class="user-text">
        {{ state.userId }}님,</span>
      안녕하세요.
    </div>
    <div class="user-content">
      <img class="profile-img">
      <span class="content-user">
        {{ state.userId }}님
      </span>
    </div>
    <div class="wrapper">
      <router-link 
        class="check-area"
        :to="{ name: 'Article' }">
        <FontAwesomeIcon :icon="[ 'fas', 'book']" />
        <span>기록 작성</span>
        <div class="point">
          <span class="number-count">{{ state.userPost.length }}</span>
        </div>
      </router-link>
      <router-link 
        class="check-area"
        :to="{ name: 'Article' }">
        <FontAwesomeIcon :icon="[ 'fas', 'book']" />
        <span>기록 작성</span>
        <div class="point">
          <span class="number-count">{{ state.userPost.length }}</span>
        </div>
      </router-link>
      <router-link 
        class="check-area"
        :to="{ name: 'Article' }">
        <FontAwesomeIcon :icon="[ 'fas', 'book']" />
        <span>기록 작성</span>
        <div class="point">
          <span class="number-count">{{ state.userPost.length }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    store.dispatch("mypage/userBoardList");
    const state = reactive({
      userId: computed(() => store.getters["user/getUser"]),
      userPost: computed(() => store.state.mypage.userPost),
    });
    return {
      state
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin flex-box($display, $flex-direction, $justify-content) {
  display: $display;
  flex-direction: $flex-direction;
  justify-content: $justify-content;
}

.user-info {
  margin-bottom: 10px;
  .user-text {
    margin-bottom: 15px;
    font-family:'Arial, sans-serif';
    font-size: 1.5rem;
    font-weight: 550;
    color: $main-color;
  }
}

.wrapper {
  @include flex-box(flex, row, center);
  justify-content: center;
  .check-area {
    @include flex-box(flex, column, space-around);
    background: $sub-color;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height: 80px;
    padding: 8px;
    border-radius: 10px;
    .number-count {
      color: $main-color;
      font-size: 1.5rem;
      font-weight: 550;
    }
  }
}

.user-content { 
  @include flex-box(flex, row, '');
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: $box-color;
  }
  .content-user {
    margin-left: 15px;
    font-size: 1.1rem;
    font-weight: 550;
  }
}
</style>
