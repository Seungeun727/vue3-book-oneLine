<template>
  <div class="containers">
    <TheHeader />
    <div id="main">
      <router-view />
    </div>
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

#main {
  margin-top: 80px;
}
</style>