<template>
  <div class="my-container">
    <div class="inner">
      <aside class="menu">
        <router-link :to="{ name: 'profile'}">
          <FontAwesomeIcon :icon="['fas', 'user' ]" />
          <span class="page-name">프로필 설정</span>
        </router-link>
        <router-link :to="{ name: 'Article'}">
          <FontAwesomeIcon :icon="['fas', 'book-open' ]" />
          <span class="page-name">나의 책</span>
        </router-link>
      </aside>
      <div class="user">
        <MyPageContent />
      </div>
      <div class="profile">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MyPageContent from '../../components/MyPageContent.vue';
export default {
  components: {
    MyPageContent
  }
}
</script>

<style lang="scss" scoped>
@mixin border {
  border: 2px solid $box-color;
  background-color: $white;
  border-radius: 20px;
  box-shadow: 2px 2px #00000010;
}
.my-container {
  width: 1200px;
  height: 1100px;
  margin: 0 auto;
  padding-top: 40px;
  .inner {
    display: grid;
    grid-template-columns: 350px 700px ;
    grid-template-rows: repeat(2, 350px) ;
    gap: 20px;
  }
}

.menu {
  @include border;
  grid-area: 1/1/2/2;
}

.profile {
  @include border;
  grid-area: 2/2/3/3;
}
.user {
  @include border;
  grid-area: 1/2/2/3;
  padding: 30px;
}

a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: $light-gray;
}

.router-link-exact-active {
  font-weight: 550;
  background-color: $box-color;
  color: $main-color;
  border-radius: 20px;
}

.page-name {
  padding-left: 5px;
  font-weight: 550;
  color: $font-color;
}
</style>