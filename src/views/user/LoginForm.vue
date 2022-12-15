<template>
  <div class="container">
    <div class="inner">
      <form>
        <div class="input-area">
          <label>아이디</label>
          <input
            v-model="id" 
            name="id"
            type="text"
            placeholder="아이디">
          <button
            type="button"
            class="btn btn--outline--circle"
            @click="resetField(values['id'] = '')">
            <FontAwesomeIcon
              icon="fa-solid fa-xmark" /> 
          </button> 
          <span>
            {{ errors.id }}
          </span>
        </div>
        <div class="input-area">
          <label>비밀번호</label>
          <input 
            v-model="password" 
            type="password"
            placeholder="비밀번호">
          <span>
            {{ errors.password }}
          </span>
          <button
            type="button"
            class="btn btn--outline--circle"
            @click="resetField(values['password'] = '')">
            <FontAwesomeIcon
              icon="fa-solid fa-xmark" /> 
          </button> 
        </div>
        <div class="btn-area">
          <button
            type="button"
            class="btn btn--white btn--large"
            @click="moveSignUp">
            회원가입
          </button>
          <button
            type="submit"
            class="btn btn--blue btn--large"
            :disabled="isValid || meta.valid == false"
            @click="submitLogin(values)">
            로그인
          </button>
        </div>
        <div 
          class="sub-button-area">      
          <button
            type="button"
            class="btn">
            {{ findUser[0] }}
          </button>
          <span>{{ findUser[1] }}</span>  
          <button
            type="button"
            class="btn">
            {{ findUser[2] }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useForm } from 'vee-validate';
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter} from 'vue-router';
export default {
  setup() {
    const findUser = reactive(['아이디 찾기', '비밀번호 찾기']);
    const store = useStore();
    const router = useRouter();
    
    const { values, meta, errors, useFieldModel } = useForm({
      validationSchema: {
        id: 'required|id',
        password: 'required|password',
      }
    });

    const id = useFieldModel('id');
    const password = useFieldModel('password');
    
    const isValid = computed(() => {
      return id == undefined || password == undefined;
    });

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
      values,
      errors,
      meta,
      id,
      password,
      findUser,
      isValid,
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