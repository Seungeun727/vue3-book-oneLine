<template>
  <div class="my-container">
    <div class="inner">
      <aside class="menu">
        <span>프로필 설정</span>
        <span>나의 기록</span>
        <span>목표 설정</span>
      </aside>
      <div class="profile">
        <UserProfile />
      </div>
      <div class="post">
        <UserBoard />
      </div> 
    </div>
  </div>
</template>

<script>
import UserProfile from '../user/UserProfile.vue';
import UserBoard from '../user/UserBoard.vue';
export default {
  components: {
    UserProfile,
    UserBoard,
  }
};
</script>

<style lang="scss" scoped>
@mixin border {
  border: 1px solid $light-gray;
  border-radius: 20px;
}
.my-container {
  width: 1400px;
  height: 1100px;
  margin-left: 120px;
  padding-top: 70px;
  .inner {
    display: grid;
    grid-template-columns: 400px 300px;
    grid-template-rows: 350px 400px;
    gap: 30px;
  }
}

.menu {
  @include border;
  grid-area: 1/1/2/2;
}

.profile {
  @include border;
  grid-area: 1/2/2/4;
}

.post {
  @include border;
  grid-area: 2/2/2/4;
}
</style>