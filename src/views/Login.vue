<template>
  <div class="login-container">
    <LoginForm :schema="schema" />
  </div>
</template>

<script>
import LoginForm from './user/LoginForm.vue';
export default {
  components: {
    LoginForm
  },
  setup() {
    const schema = [
      { 
        name: 'id',
        as: 'input',
        type: 'text',
        rules: 'required|id',
        placeholder: '아이디',
      },
      { 
        name: 'password',
        as: 'input',
        type: 'password',
        rules: 'required|password',
        placeholder: '비밀번호(8~20자)'
      },
    ];

    return {
      schema
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  box-shadow: 2px 2px 4px 2px #0f0f0f20;
  border-radius: 30px;
  background-color: $white;
  width: 500px;
  height: 500px;
  top: 100px;
  left: 35%;
  position: absolute;
}
</style>