<template>
  <div id="main-content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Board',
  components: {},
};
</script>

<style lang="scss" scoped>
#main-content {
  height: 100%;
  width: 100%;
}
</style>