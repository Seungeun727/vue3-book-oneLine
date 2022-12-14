<template>
  <div class="container">
    <div class="inner">
      <form>
        <div class="input-area">
          <label>아이디</label>
          <input
            v-model="loginData.id" 
            type="text"
            placeholder="아이디"> 
        </div>
        <div class="input-area">
          <label>비밀번호</label>
          <input 
            v-model="loginData.password" 
            type="password"
            placeholder="비밀번호">
        </div>
        <div class="btn-area">
          <button
            type="button"
            class="btn btn--white btn--large"
            @click="moveSignUp">
            회원가입
          </button>
          <button
            type="button"
            class="btn btn--blue btn--large"
            :disabled="loginData.password == '' || loginData.id == ''" 
            @click="submitLogin(loginData)">
            로그인
          </button>
        </div>
        <div 
          class="sub-button-area">      
          <button
            type="button"
            class="btn"
            @click="moveSignUp">
            {{ findUser[0] }}
          </button>
          <span>{{ findUser[1] }}</span>  
          <button
            type="button"
            class="btn"
            @click="moveSignUp">
            {{ findUser[2] }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter} from 'vue-router';
export default {
  setup() {
    const loginData = reactive({ id: '', password: ''});
    const findUser = reactive(['아이디 찾기', '비밀번호 찾기']);
    const store = useStore();
    const router = useRouter();
    
    const submitLogin = (loginData) => {
      if(loginData.id !== '' || loginData.password !== '') {
        store.dispatch('user/loginUser', loginData);
      }
    };

    const moveSignUp = () => {
      router.push({ name: 'Sign'});
    };

    findUser.splice(1, 0, '|');
    return {
      findUser,
      loginData,
      submitLogin,
      moveSignUp
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 400px;
  padding: 5px;
  top: 50px;
  left: 50px;
  position: absolute;
  .inner {
    position: relative;
    padding-left: 25px;
  }
}
.input-area {
  margin-bottom: 20px;
}
.btn-area {
  margin-top: 2px;
}
.sub-button-area {
  text-align: center;
  color: $font-color;
}
</style>