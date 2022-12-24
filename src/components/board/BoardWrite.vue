<template>
  <div class="container">
    <div class="form">
      <div class="content">
        <ValidateForm 
          @get-child="submitForm" />
      </div>
    </div>
  </div>
</template>

<script>
import { writeBoard } from '@/api/board';
import ValidateForm from './ValidateForm.vue';
import { useRouter } from 'vue-router';
export default {
  name: 'BoardWrite',
  components: {
    ValidateForm
  },
  setup() {
    const router = useRouter();
    const submitForm = (formData) => {
      writeBoard(formData)
      .then((res) => {
        console.log("submitForm Success", res.data);
        router.go(-1);
      }).catch((err) => {
        console.log("submitForm Error", err.response);
      })
    };
    return { 
      submitForm,
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: $white;
  width: 100%;
  height: auto;
  left: 20%;
  .form {
    padding-top: 70px;
    margin: 0 auto;
    width: 600px;
    height: 700px;
    background-color: $white;
    .content {
      width: 600px;
      height: 750px;
      background-color: #ededf3;
      border-radius: 20px;
    }
  }
}
</style>