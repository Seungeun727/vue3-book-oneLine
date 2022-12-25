<template>
  <div id="nav">
    <div class="inner--left">
      <router-link 
        class="left-content"
        to="/">
        홈
      </router-link>
      <router-link
        class="left-content"
        :to="{ name: 'BoardList', query: {
          currentpage: 1, pagesize: 10 }}">
        게시판
      </router-link>
    </div>
    <div
      v-if="!isLogin"
      class="inner--right">
      <router-link 
        to="/signup"
        class="btn--blue--small">
        회원가입
      </router-link>
      <router-link 
        to="/login"
        class="btn--blue--small">
        로그인
      </router-link>
    </div>
    <div
      v-else
      class="inner--right">
      <router-link to="/user/mypage">
        마이페이지
      </router-link>
      <button
        type="button"
        class="btn--blue--small"
        @click="logout">
        로그아웃
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'Nav',
  setup() {
    const store = useStore();

    const logout = () => {
      store.dispatch('user/logout');
    };
    return {
      isLogin: computed(() => store.getters['user/isLogin']),
      logout
    }
  }
}
</script>

<style lang="scss" scoped>

#nav {
  position: absolute;
  top: 0;
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 550;
  border-bottom: 1px solid $light-gray;
  background-color: $white;
  .inner--left {
    margin-right: 50px auto;
    padding-left: 5px;
    width: 260px;
    height: 40px;
    $font-size: $font-size-small;
    line-height: 40px;
  }
  
  .inner--right {
    margin-right: 10px auto;
    padding-left: 5px;
    width: 260px;
    height: 40px;
    line-height: 40px;
    $font-size: $font-size-small;
  }
}

.router-link-exact-active {
  color: $font-color;
  border-bottom: 3px solid $main-color;
  padding-left: 3px;
}

.btn--blue--small {
  margin-left: 10px;
  color: $font-color;
  border: 0;
  outline: 0;
  background: 0;
  color: $font-color;
  font-size: 16px;
  font-weight: 550;
  &:focus  {
    padding: 10px;
    background-color: map-get($blue-colors, color1);
    border-radius: 10px;
  }
}

.left-content {
  margin-right: 15px;
}
</style>