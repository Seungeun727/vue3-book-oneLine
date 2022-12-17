<template>
  <div id="wrapper">
    <TheHeader />
    <div id="main">
      <router-view />
    </div>
    <TheFooter /> 
  </div>
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

<style lang="scss">
#wrapper {
  color: #333;
  margin-top: 30px;
  padding-bottom: 130px;
  position: relative;
  min-height: 100vh;
}

#main {
  position: absolute;
  left: 25%;
}
</style>