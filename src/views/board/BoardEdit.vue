<template>
  <div class="container">
    <div class="form">
      <div class="content">
        <ValidateForm
          v-for="post in state.post"
          :key="post.board_no"
          :post="post" 
          @get-child="submitForm">
          <template #title>
            북로그를 수정해보세요.
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
import { updateBoard } from '@/api/board';
import ValidateForm from '@/components/board/ValidateForm.vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';
export default {
  name: 'BoardEdit',
  components: {
    ValidateForm
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      post: computed(() => store.state.board.post)
    });
    const postId = parseInt(route.params.id);
    store.dispatch('board/getUserPost', { postId });
    
    
    const submitForm = (formData) => {
      updateBoard(formData, postId)
      .then((res) => {
        console.log("submitForm updateBoard Success", res.data);
        router.go(-1);
      }).catch((err) => {
        console.log("submitForm updateBoard Error", err.response);
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