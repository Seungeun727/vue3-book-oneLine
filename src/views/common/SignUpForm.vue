<template>
  <div class="form-container">
    <CustomForm 
      :schema="schema"
      @child="registerUser">
      <template #header>
        <span class="title">회원가입</span>
      </template>
      <template #main />
      <template #footer>
        <button class="btn btn--black">
          회원가입
        </button>
      </template>
    </CustomForm>
  </div>
</template>

<script>
import CustomForm from './CustomForm.vue';
import { useStore } from 'vuex';
export default {
  components: {
    CustomForm
  },
  setup() {
    const store = useStore();
    
    const registerUser = (signInfo) =>  {
      store.dispatch('user/regsiterUser', signInfo);
    };

    return {
      registerUser
    }
  },
  data: () => {
    const schema = {
      fields: [
        { 
          label: '이름',
          name: 'name',
          as: 'input',
          type: 'text',
          rules: 'required|name'
        },
        { 
          label: '이메일',
          name: 'email',
          as: 'input',
          type: 'text',
          rules: 'email'
        },
        { 
          label: '아이디',
          name: 'id',
          as: 'input',
          type: 'text',
          rules: 'required|id'
        },
        { 
          label: '비밀번호',
          name: 'password',
          as: 'input',
          type: 'password',
          rules: 'required|password'
        },
        { 
          label: '비밀번호 재확인',
          name: 'passwordCheck',
          as: 'input',
          type: 'password',
          rules: 'confirmed:@password'
        },
      ]
    };
    return {
      schema,
    }
  },
}
</script>

<style lang="scss" scoped>
.form-container {
  background-color: $white;
  width: 100%;
  height: 900px;
}
.title {
  margin-bottom: 5px; 
  font-size: $font-size;
  border-bottom: 1px solid $light-gray;
}
</style>