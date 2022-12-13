<template>
  <div class="container">
    <div class="form">
      <div class="content">
        <span class="main-title">책 등록</span>
        <ValidateForm 
          @get-child="submitForm" />
      </div>
    </div>
  </div>
</template>

<script>
import { writeBoard } from '@/api/board';
import ValidateForm from './ValidateForm.vue';
export default {
  name: 'BoardWrite',
  components: {
    ValidateForm
  },
  methods: {
    submitForm(formData) {
      writeBoard(formData)
      .then((res) => {
        console.log("submitForm Success", res.data);
      }).catch((err) => {
        console.log("submitForm Error", err.response);
      })
    }, 
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 800px;
  background-color: $white;
  height: 800px;
  .form {
    width: 600px;
    height: 700px;
    margin: 30px auto;
    
    .main-title {
      display: inline-block;
      font-size: $font-size;
      margin-bottom: 15px;
    }
  }
}
.content {
  padding: 20px;
}
</style>