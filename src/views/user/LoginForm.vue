<template>
  <div class="container">
    <div class="inner">
      <form>
        <div 
          v-for="field in schema"
          :key="field.name"
          class="input-area">
          <input 
            v-model="values[field.name]"
            :name="field.name"
            :type="field.type"
            :rules="field.rules"
            :placeholder="field.placeholder"
            :class="{ valid: !isValid && meta.valid}">
          <span class="error-status">
            {{ errors[field.name] }}
          </span>
          <button
            type="button"
            class="btn btn--outline--circle"
            @click="resetField(values[field.name] = '')">
            <FontAwesomeIcon
              :icon="['fas', 'xmark']" /> 
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
            type="button"
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
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const findUser = reactive(['아이디 찾기', '비밀번호 찾기']);
    const store = useStore();
    const router = useRouter();
    
    const { values, meta, errors, useFieldModel } = useForm({
      validationSchema: {
        id: 'required|id',
        password: 'required|password',
      },
      initialValues: {
        id: '', 
        password: ''
      }
    });

    const id = useFieldModel('id');
    const password = useFieldModel('password');
    
    const isValid = computed(() => {
      return id == undefined || password == undefined;
    });

    const submitLogin = (loginData) => {
      if(loginData.id !== '' || loginData.password !== '') {
        console.log(loginData);
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
  position: relative;
  height: 70px;
  margin-bottom: 20px;
}
.btn-area {
  margin-top: 2px;
}
.sub-button-area {
  text-align: center;
  color: $font-color;
}

.error-status {
  display: block;
  color: $dark-pink;
  font-size: $font-size-small;
  font-weight: 500;
}

.success-status {
  color: green;
  display: block;
  font-size: $font-size-small;
  font-weight: 500;
}

.valid {
  border-color: green;
}
.btn.btn--outline--circle {
  position: absolute;
  left: 400px;
  bottom: 25px;
}
</style>