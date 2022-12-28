<template>
  <div class="card">
    <router-link
      class="wrapper" 
      :to="{ name: 'BoardDetail', params: { id: post.board_no }}">
      <img class="image">
      <div class="content">
        <span>{{ post.board_title }}</span>
        <span>{{ post.board_text }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 220px;
  .wrapper {
    margin: 5px;
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 30px;
  }
}

.content {
  margin: 5px;
  width: 200px;
  height: 80px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-radius: .2rem;
  display: none;
}

img {
  width: 200px;
  height: 200px;
  background-color: $box-color;
  border-radius: .5rem;
  &:active + .content {
    display: block;
    border-radius: .5rem;
    background-color: map-get($blue-colors, color6);
    color: $white;
  }
}
</style>