<template>
  <div>
    <span>기본 프로필</span>
    <div class="profile">
      <img class="profile-img">
      <div class="content">
        <div class="contnent-inner">
          <label>이름: </label>
          <span class="content-info">
            {{ state.userInfo.user_name }}
          </span>
          <button
            type="button" 
            @click="showModal()">
            수정
          </button>
        </div>
        <div class="contnent-inner">
          <label>아이디: </label>
          <span class="content-info">
            {{ state.userInfo.user_id }}
          </span>
          <button 
            type="button" 
            @click="showModal()">
            수정
          </button>
        </div>
        <div class="contnent-inner">
          <label>이메일: </label>
          <span class="content-info">
            {{ state.userInfo.user_email }}
          </span>
          <button
            type="button" 
            @click="showModal()">
            수정
          </button>
        </div>
      </div>
    </div>
    <MyPageModalEdit 
      v-if="state.isModal"
      @close="closeChildModal()" />
  </div>
</template>

<script>
import MyPageModalEdit from '@/components/modal/MyPageModalEdit.vue';
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';

export default {
  components: {
    MyPageModalEdit
  },
  setup() {
    const store = useStore();
    store.dispatch('mypage/getUserInfo');
    const state = reactive({
      isModal: false,
      userInfo: computed(() => store.state.mypage.userInfo)
    });

    const showModal = () => {
      state.isModal = true;
    };

    const closeChildModal = (resultData) => {
      state.isModal = resultData;
    }
    return {
      state,
      showModal,
      closeChildModal,
    };
  }
};
</script>

<style lang="scss" scoped></style>