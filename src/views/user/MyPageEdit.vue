<template>
  <div class="edit-container">
    <span class="main-title">기본 프로필</span>
    <div class="profile">
      <img class="profile-img">
      <div class="profile-content">
        <div class="content-inner">
          <label>이름</label>
          <span class="content-info">
            {{ state.userInfo.user_name }}
          </span>
          <button
            type="button"
            class="btn--outline--blue" 
            @click="showModal()">
            수정
          </button>
        </div>
        <div class="content-inner">
          <label>아이디</label>
          <span class="content-info">
            {{ state.userInfo.user_id }}
          </span>
        </div>
        <div class="content-inner">
          <label>이메일</label>
          <span class="content-info">
            {{ state.userInfo.user_email }}
          </span>
        </div>
      </div>
    </div>
    <MyPageModalEdit 
      v-if="state.isModal"
      :user-info="state.userInfo"
      @close="closeChildModal()"
      @update="updateUserInfo" />
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
    };

    const updateUserInfo = (updateData) => {
      state.userInfo.user_name = updateData.name;
    };
    return {
      state,
      showModal,
      closeChildModal,
      updateUserInfo
    };
  }
};
</script>

<style lang="scss" scoped>
.edit-container {
  width: 100%;
  height: 100%;
  .main-title {
    display: inline-block;
    padding: 20px;
    font-size: 1.3rem;
    font-weight: 550;
  }
  
  .profile {
    padding: 20px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
  }
}
  
.content-inner {
  padding-bottom: 10px;
  width: 300px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  border-bottom: 1px solid darken($box-color, 10%);
  .content-info {
    display: block;
    padding-left: 5px;
    color: map-get($gray-colors, color3);
    font-weight: 550;
  }
}

img {
  background-color: $box-color;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 0;
}

.btn--outline--blue {
  width: 70px;
  height: 35px;
  position: absolute;
  top: 35%;
  left: 70%;
  font-size: 1.1rem;
  border-color: $main-color;
  color: $main-color;
  &:active {
    background-color: $main-color;
    box-shadow: 2px 2px #00000017;
    color: $white;
  }
}
</style>