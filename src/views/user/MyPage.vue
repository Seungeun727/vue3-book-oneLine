<template>
  <div class="my-container">
    <div class="inner">
      <aside class="menu">
        <router-link :to="{ name: 'profile'}">
          <i class="fas fa-user" />
          <span class="page-name">기본 프로필</span>
        </router-link>
        <router-link :to="{ name: 'Article'}">
          <i class="fas fa-book-open" />
          <span class="page-name">나의 책</span>
        </router-link>
      </aside>
      <div 
        v-if="!isRoute"
        class="user">
        <router-view />
      </div>
      <div
        v-else
        class="profile">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const router = useRoute();
    console.log(router.meta);
    const isRoute = computed(() => router.meta.name !== undefined);
    return {
      isRoute
    }
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
    grid-template-columns: 350px 700px;
    grid-template-rows: repeat(2, 350px);
    gap: 20px;
  }
}

.menu {
  @include border;
  grid-area: 1/1/2/2;
  .page-name {
    padding-left: 5px;
    font-weight: 550;
    color: $font-color;
  }
}

.profile {
  @include border;
  grid-area: 1/2/3/3;
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
</style>