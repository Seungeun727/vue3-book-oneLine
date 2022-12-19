<template>
  <div id="wrapper">
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

<style lang="scss">
#wrapper {
  margin-top: 50px;
  color: #333;
  min-height: 100%;
  padding-bottom: 130px;
}

#main {
  width: 100%;
  height: auto;
}
</style>