<template>
  <div class="container">
    <div class="inner">
      <span class="title">로그인</span>
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
            :maxlength="20"
            :class="{ valid: !isValid && meta.valid, invalid: errors[field.name] !== undefined && values[field.name] !== ''}">
          <span 
            v-if="values[field.name] !== ''"
            class="error-status">
            {{ errors[field.name] }}
          </span>
          <button
            v-if="values[field.name] !== ''"
            type="button"
            class="btn btn--outline--circle"
            @click="resetField(field.name)">
            <i class="fas fa-xmark" />
          </button> 
        </div>
        <div class="btn-area">
          <button
            type="button"
            class="btn btn--white--medium"
            @click="moveSignUp">
            회원가입
          </button>
          <button
            type="button"
            class="btn btn--blue--medium"
            :disabled="isValid || meta.valid == false"
            @click="submitLogin(values)">
            로그인
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useForm, useField } from 'vee-validate';
import { computed } from 'vue';
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
    const store = useStore();
    const router = useRouter();
    
    const { values, meta, errors } = useForm({
      initialValues: {
        id: '', 
        password: ''
      }
    });
    const id = useField('id', 'required|id');
    const password = useField('password', 'required|password');
    
    const isValid = computed(() => {
      return id == undefined || password == undefined;
    });

    const submitLogin = (loginData) => {
      if(loginData.id !== '' || loginData.password !== '') {
        console.log(loginData);
        store.dispatch('user/loginUser', loginData);
      }
    };

    const resetField = (input) => {
      return values[input] = '';
    };
    const moveSignUp = () => {
      router.push({ name: 'Sign'});
    };

    return {
      values,
      errors,
      meta,
      isValid,
      resetField,
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
  top: 50px;
  position: absolute;
  .inner {
    position: relative;
    padding-left: 25px;
    text-align: center;
  }
}

.title {
  display: block;
  margin-bottom: 8px;
  font-size: $font-size;
}
input {
  width: 340px;
}
.input-area {
  position: relative;
  height: 70px;
  margin-bottom: 15px;
}
.btn-area {
  margin-top: 2px;
}
.btn.btn--outline--circle {
  position: absolute;
  left: 350px;
  bottom: 20px;
  color: $white;
  background-color: $main-color;
}
</style>