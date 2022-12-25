<template>
  <div class="main-container">
    <div class="card-box">
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
@mixin card-box() {
  border: 1px solid $light-gray;
  background-color: $white;
}
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  .card-box {
    padding-top: 3px;
    width: 1200px;
    height: 1100px;
    margin:10px auto;
  }
}

.banner {
  @include card-box;
  height: 240px;
}

.post {
  @include card-box;
  width: 600px;
  border-radius: 20px;
}

.mypage {
  @include card-box;
  height: 235px;
}

.content {
  @include card-box;
  height: 235px;
}
</style>