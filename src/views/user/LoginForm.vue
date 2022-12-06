<template>
  <div class="container">
    <div class="inner">
      <form>
        <div>
          <input
            v-model="loginData.id" 
            type="text"
            placeholder="아이디"> 
        </div>
        <div>
          <input 
            v-model="loginData.password" 
            type="password"
            placeholder="비밀번호">
        </div>
        <button
          type="button" 
          @click="submitLogin(loginData)">
          로그인
        </button>
        <button
          type="button" 
          @click="moveSignUp">
          회원가입
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const loginData = reactive({
      id: '',
      password: '',
    });
    const store = useStore();

    const submitLogin = (loginData) => {
      if(loginData.id !== '' || loginData.password !== '') {
        store.dispatch('user/loginUser', loginData);
      }
    };
 
    return {
      loginData,
      submitLogin
    }
  }
}
</script>

<style lang="scss" scoped>
</style>