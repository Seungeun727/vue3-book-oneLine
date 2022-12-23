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
      <div class="profile">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@mixin border {
  border: 2px solid #ebedf3;
  border-radius: 20px;
  box-shadow: 2px 2px #00000010;
}
.my-container {
  background-color: $white;
  width: 1200px;
  height: 1100px;
  margin-left: 120px;
  padding-top: 70px;
  .inner {
    display: grid;
    grid-template-columns: 400px 200px;
    grid-template-rows: 350px 00px;
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

a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: $light-gray;
}

.router-link-exact-active {
  font-weight: 550;
  background-color: #ebedf3;
  color: $main-color;
  border-radius: 20px;
}

.page-name {
  padding-left: 5px;
  font-weight: 550;
  color: $font-color;
}
</style>