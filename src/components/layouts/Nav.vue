<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link>
    <router-link
      :to="{ name: 'BoardList', query: {
        currentpage: 1, pagesize: 10 }}">
      Board
    </router-link> 
  </div>
</template>

<script>
export default {
  name: 'Nav',
  components: {}
}
</script>

<style lang="scss" scoped>

#nav {
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 25px;
  background-color: #fefefe;
  z-index: 2;
  box-shadow: 1px 1px #00000a25;
}

a {
  text-decoration: none;
  color: $font-color;
  margin-right: 15px;
  font-size: 18px;
}

.router-link-exact-active {
  color: $white;
  padding: 10px;
  border-radius: 50%;
  background-color: $nav-color;
}
</style>