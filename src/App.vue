<template>
  <div>
    <TheHeader />
    <router-view />
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from './components/layouts/TheHeader';
import TheFooter from './components/layouts/TheFooter';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }, 
}
</script>

<style lang="scss" scoped>
#app {
  color: #333;
  margin-top: 60px;
  padding-bottom: 130px;
  position: relative;
  min-height: 100%;
}
</style>