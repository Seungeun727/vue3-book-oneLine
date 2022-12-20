<template>
  <div class="card">
    <img class="image">
    <span>{{ post.board_no }}</span>
    <span>{{ post.board_text }}</span>
    <span>{{ post.board_title }}</span>
    <span>{{ post.createdAt }}</span>
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
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  img {
    width: 300px;
    height: 250px;
  }
}

</style>