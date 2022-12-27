<template>
  <div class="container">
    <div class="form">
      <div class="content">
        <ValidateForm
          :post="state.post"
          @get-child="submitForm">
          <template #title>
            오늘 북로그는 무슨 기록인가요?
          </template>
          <template #subtitle>
            북로그는 독서를 기록하고 좋은 책은 우리와 함께 공유해요!
          </template>
        </ValidateForm>
      </div>
    </div>
  </div>
</template>

<script>
import { writeBoard } from '@/api/board';
import ValidateForm from '@/components/board/ValidateForm.vue';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
export default {
  name: 'BoardWrite',
  components: {
    ValidateForm
  },
  setup() {
    const router = useRouter();
    const state = reactive({ post: []});
    const submitForm = (formData) => {
      writeBoard(formData)
      .then((res) => {
        console.log("submitForm Success", res);
        router.go(-1);
      }).catch((err) => {
        console.log("submitForm Error", err.response);
      })
    };
    return { 
      state,
      submitForm,
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  height: 1100px;
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