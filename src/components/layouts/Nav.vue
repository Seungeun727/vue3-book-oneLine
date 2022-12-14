<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link>
    <router-link
      :to="{ name: 'BoardList', query: {
        currentpage: 1, pagesize: 10 }}">
      Board
    </router-link>
    <div
      v-if="!isLogin"
      class="inner--right">
      <router-link to="/signup">
        회원가입
      </router-link>
      <router-link to="/login">
        로그인
      </router-link>
    </div>
    <div
      v-else
      class="inner--right">
      <router-link to="/mypage">
        마이페이지
      </router-link>
      <button
        type="text"
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
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 25px;
  background-color: #fefefe;
  z-index: 2;
  box-shadow: 1px 1px #00000a25;
}

a {
  text-decoration: none;
  color: $font-color;
  margin-right: 15px;
  font-size: 18px;
}

.router-link-exact-active {
  color: $white;
  padding: 10px;
  border-radius: 50%;
  background-color: $nav-color;
}

.inner--right {
  display: block;
  margin-right: 10px;
  float: right;
}
</style>