<template>
  <div class="card">
    <router-link
      class="wrapper" 
      :to="{ name: 'BoardDetail', params: { id: post.board_no }}">
      <img class="image">
      <div class="content">
        <span>{{ post.board_no }}</span>
        <span>{{ post.board_text }}</span>
        <span>{{ post.board_title }}</span>
        <span>{{ post.createdAt }}</span>
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
  width: 300px;
  height: 250px;
}

.wrapper {
  margin-top: 10px;
  width: 250px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 250px;
    height: 200px;
    background-color: #ebedf3;
    border-radius: 15px;
    &:hover + .content {
      display: block;
      background-color: darken(#ebedf3, 30%);
      color: $white;
    }
  }
  .content {
    width: 250px;
    height: 80px;
    position: absolute;
    bottom: 0;
    text-align: center;
    z-index: 1;
    border-radius: .2rem;
    display: none;
  }
}

</style>