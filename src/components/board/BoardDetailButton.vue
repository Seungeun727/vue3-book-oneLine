<template>
  <div>
    <router-link
      :to="{ name: 'BoardEdit', params: { id }}">
      수정
    </router-link>
    <button type="button">
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
}
</script>

<style lang="scss" scoped></style>