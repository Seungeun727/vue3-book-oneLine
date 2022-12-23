<template>
  <div>
    <div class="card">
      <span class="profile-title">내 기본 정보</span>
      <div class="wrapper">
        <img class="profile-img">
        <div class="content">
          <label>이름</label>
          <span class="content-info" />
        </div>
        <div class="content">
          <label>이메일</label>
          <span class="content-info" />
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
export default {
}
</script>

<style lang="scss" scoped>
.card {
  padding: 30px;
  background-color: $white;
  .profile-title {
    font-size: 1.2rem;
    font-weight: 600;
  }
}

.wrapper {
  margin-top: 10px;
  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: $light-gray;
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

.content-info {
  color: $font-color;
  font-weight: 550;
}

.move-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>