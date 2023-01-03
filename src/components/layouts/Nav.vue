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
        class="btn--light-blue">
        회원가입
      </router-link>
      <router-link 
        to="/login"
        class="btn--light-blue">
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
        class="btn--light-blue"
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
@mixin inner-box() {
  padding: 7px 15px;
  width: 260px;
  height: 40px;
  line-height: 40px;
  $font-size: 16px;
  font-weight: 550;
}
#nav {
  position: absolute;
  top: 0;
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid $light-gray;
  background-color: $white;
  .inner--left {
    @include inner-box();
    margin-right: 50px auto;
  }
  
  .inner--right {
    @include inner-box();
    margin-right: 15px auto;
    text-align: right;
  }
}

.router-link-exact-active {
  color: $font-color;
  border-bottom: 3px solid $main-color;
  padding-bottom: 20px;
}

.left-content {
  margin-right: 15px;
}
</style>