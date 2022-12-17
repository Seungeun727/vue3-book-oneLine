<template>
  <div class="btn-container">
    <router-link
      class="btn btn--white"
      :to="{ name: 'BoardEdit', params: id }">
      수정
    </router-link>
    <button
      type="text"
      class="btn btn--white"
      @click="openModal()">
      삭제
    </button>
    <ModalMessage
      v-if="isShow"
      :message="message"
      @close="cancleModal">
      <template #header /> 
      <template #footer>
        <button 
          class="btn btn--red"
          @click="deletePost()">
          확인
        </button>
        <button 
          class="btn btn--white"
          @click="cancleModal()">
          취소
        </button>
      </template>
    </ModalMessage> 
    <button 
      type="button"
      class="btn btn--black"
      @click="moveList()">
      목록
    </button>
  </div>
</template>

<script>
import { deleteBoard } from '@/api/board';
import ModalMessage from '../modal/ModalMessage.vue';
export default {
  components: {
    ModalMessage,
  },
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      isShow: false,
      message: '삭제'
    }
  },
  methods: {
    moveList() {
      this.$router.push('/board');
    },
    openModal() {
      this.isShow = true;
    },
    cancleModal() {
      this.isShow = false;
    },
    deletePost() {
      const postId = this.$route.params.id;
      deleteBoard(postId)
      .then((res) => {
        console.log("deletePost Success", res.data);
        this.message = '게시물이 삭제되었습니다.';
      })
      .catch((err) => {
        console.log("deletePost Error", err.response);
      })
    }, 
  }
}
</script>

<style lang="scss" scoped>
.btn-container {
  width: 500px auto;
  display: flex;
  flex-direction: row;
}

a.btn.btn--white {
  display: block;
  text-decoration: none;
  text-align: center;
  line-height: 35px;
  height: 33px;
  padding: 0px;
}
</style>