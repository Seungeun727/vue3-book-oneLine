<template>
  <footer id="footer">
    <div 
      id="content">
      <span class="content-title">bookLine</span>
      <span>작성자: 노승은</span>
      <span>이메일: seun2230@gmail.com</span>
    </div>
    <span class="copyright">Copyright 2022 &copy; bookLine</span>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  components: {},
};
</script>

<style lang="scss" scoped>
footer {
  border-top: 1px solid #fffdfded;
  width: 100%;
  height: 130px;
  background-color: #fffdfd;
  position: absolute;
  transform: translateY(100%);
  color: gray;
  bottom: 0;
  text-align: center;
  padding: 15px;
}

span {
  display: block;
  padding: 3px;
}

.content-title {
  font-size: 1.2rem;
  font-weight: 700;
}
</style>