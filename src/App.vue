<template>
  <div>
    <TheHeader />
    <router-view />
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
  }
}
</script>

<style>
#app {
  /* text-align: center; */
  color: #333;
  margin-top: 60px;
}
</style>