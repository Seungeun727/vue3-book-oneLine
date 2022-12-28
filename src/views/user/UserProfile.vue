<template>
  <div>
    <div class="card">
      <MyPageContent />
      <router-link
        :to="{ name: 'MyPageEdit' }"
        class="move-page">
        <span class="profile-title">나의 회원 정보 수정</span>
        <FontAwesomeIcon :icon="['fas', 'angle-right']" />
      </router-link>
      <div class="move-page">
        <span class="profile-title">패스워드 변경</span>
        <FontAwesomeIcon :icon="['fas', 'angle-right']" />
      </div>
    </div> 
  </div>
</template>

<script>
import MyPageContent from '@/components/MyPageContent.vue';
export default {
  components: {
    MyPageContent
  },
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