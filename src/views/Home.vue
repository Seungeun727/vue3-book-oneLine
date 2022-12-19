<template>
  <div class="main-container">
    <div class="banner">
      <span>banner</span>
    </div>
    <div class="post">
      <main-board />
    </div>
    <div class="content">
      <span>content2</span>
    </div>
    <div class="mypage">
      <span>content1</span>
    </div> 
  </div>
</template>

<script>
import MainBoard from './user/MainBoard.vue';
export default {
  name: 'Home',
  components: {
    MainBoard
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 300px 500px 300px;
  gap: 20px;
}


.banner {
  border: 1px solid $light-gray;
  grid-area: 1/1/2/3;
}

.post {
  border: 1px solid $light-gray;
  border-radius: 20px;
  grid-area: 2/1/3/2;
}

.mypage {
  border: 1px solid $light-gray;
  grid-area: 3/1/4/3;
}

.content {
  border: 1px solid $light-gray;
  grid-area: 2/2/3/2;
}
</style>