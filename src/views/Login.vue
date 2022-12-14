<template>
  <div class="login-container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from './user/LoginForm.vue';
export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  box-shadow: 2px 2px 4px 2px #0f0f0f20;
  border-radius: 30px;
  width: 600px;
  height: 600px;
  top: 100px;
  left: 35%;
  position: absolute;
}
</style>