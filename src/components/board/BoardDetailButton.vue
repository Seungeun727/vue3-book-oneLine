<template>
  <div class="btn-container">
    <router-link
      :to="{ name: 'BoardEdit', params: { id }}">
      수정
    </router-link>
    <button 
      type="button"
      class="btn btn--white"
      @click="moveList()">
      목록
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  methods: {
    moveList() {
      this.$router.push('/board');
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-container {
  width: 100px;
  height: 50px;
}

a {
  text-decoration: none;
  color: map-get($blue-colors, color3);
  font-size: $font-size-small;
}
</style>