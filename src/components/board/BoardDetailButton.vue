<template>
  <div class="btn-container">
    <div
      v-if="state.user === postId"
      class="user-option">
      <router-link
        class="btn--text"
        :to="{ name: 'BoardEdit', params: id }">
        수정
      </router-link>
      <button
        type="text"
        class="btn--white"
        @click="openModal()">
        삭제
      </button>
    </div>
    <ModalMessage
      v-if="state.isShow"
      @close="cancleModal">
      <template #header /> 
      <template #body>
        <span v-if="state.visible == false">
          {{ state.user }}님 게시글 삭제 하시겠습니까?
        </span>
        <span v-else>
          {{ state.message }}
        </span>
      </template>
      <template #footer>
        <button 
          class="btn--red"
          @click="deletePost()">
          확인
        </button>
        <button 
          class="btn--white"
          @click="cancleModal()">
          취소
        </button>
      </template>
    </ModalMessage> 
    <button 
      type="button"
      class="btn--black"
      @click="moveList()">
      목록
    </button>
  </div>
</template>

<script>
import { deleteBoard } from '@/api/board';
import { computed, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ModalMessage from '../modal/ModalMessage.vue';
export default {
  components: {
    ModalMessage,
  },
  props: {
    id: {
      type: Number,
      default: 1
    },
    postId: {
      type: String,
      default: '',
    }
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const store = useStore();

    const state = reactive({
      visible: false,
      isShow: false,
      message: '',
      user: computed(() => store.getters['user/getUser']),
    });
    const moveList = () => {
      router.push('/board');
    }

    const deletePost = () => {
      const postId = route.params.id;
      deleteBoard(postId)
      .then((res) => {
        console.log("deletePost Success", res.data);
        state.visible = true;
        state.message = res.data.message;
      })
      .catch((err) => {
        console.log("deletePost Error", err.response);
      })
    };

    const openModal = () => {
      state.isShow = true;
    };
    const cancleModal = () => {
      state.isShow = false;
    };
    return {
      state,
      moveList,
      openModal,
      cancleModal,
      deletePost
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-container {
  width: 900px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .user-option {
    display: flex;
    flex-direction: row;
  }
}
</style>