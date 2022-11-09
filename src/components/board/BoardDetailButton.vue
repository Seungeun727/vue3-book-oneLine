<template>
  <div class="btn-container">
    <router-link
      :to="{ name: 'BoardEdit', params: { id }}">
      수정
    </router-link>
    <button
      type="button"
      @click="openModal()">
      삭제
    </button>
    <ModalMessage
      v-if="isShow">
      <template #header>
        <h1>삭제</h1>
      </template>
      <template #body>
        <p>{{ message }}</p>
        <button @click="deletePost()">
          확인
        </button>
        <button @click="cancleModal()">
          취소
        </button>
      </template>
    </ModalMessage> 
    <button 
      type="button"
      class="btn btn--white"
      @click="moveList()">
      목록
    </button>
  </div>
</template>

<script>
import axios from 'axios';
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
      message: '게시물을 삭제하시겠습니까?'
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
      this.isshow = false;
    },
    deletePost() {
      const postId = this.$route.params.id;
      axios.post(`${process.env.VUE_APP_API_URL}` + "/board/delete/" + postId, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
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
  width: 100px;
  height: 50px;
}

a {
  text-decoration: none;
  color: map-get($blue-colors, color3);
  font-size: $font-size-small;
}
</style>