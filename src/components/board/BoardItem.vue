<template>
  <div>
    <div 
      v-for="post in posts"
      :key="post.no">
      {{ post }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardItem',
  props: {
    posts: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped></style>