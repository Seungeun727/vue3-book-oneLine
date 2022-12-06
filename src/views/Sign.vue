<template>
  <div class="container">
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from './user/SignUpForm.vue';
export default {
  components: {
    SignUpForm
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: $white;
  padding-top: 100px;
}
</style>