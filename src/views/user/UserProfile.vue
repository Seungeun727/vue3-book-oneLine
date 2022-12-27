<template>
  <div>
    <div class="card">
      <span class="profile-title">내 기본 정보</span>
      <div class="wrapper">
        <img class="profile-img">
        <div class="content">
          <div class="contnent-inner">
            <label>이름: </label>
            <span class="content-info">
              {{ userInfo.user_name }}
            </span>
          </div>
          <div class="contnent-inner">
            <label>아이디: </label>
            <span class="content-info">
              {{ userInfo.user_id }}
            </span>
          </div>
          <div class="contnent-inner">
            <label>이메일: </label>
            <span class="content-info">
              {{ userInfo.user_email }}
            </span>
          </div>
        </div>
      </div>
      <div class="move-page">
        <span class="profile-title">나의 회원 정보 수정</span>
        <FontAwesomeIcon :icon="['fas', 'angle-right']" />
      </div>
      <div class="move-page">
        <span class="profile-title">패스워드 변경</span>
        <FontAwesomeIcon :icon="['fas', 'angle-right']" />
      </div>
    </div> 
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const userInfo = computed(() => store.state.mypage.userInfo);
    store.dispatch('mypage/getUserInfo');

    return {
      userInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 30px;
  background-color: $white;
  .profile-title {
    margin: 10px 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
}

.wrapper {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  padding: 10px;
  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: $light-gray;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
  }
}

.content-info {
  padding-left: 5px;
  color: $light-gray;
  font-weight: 550;
}

label {
  display: inline-block;
}
.move-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>