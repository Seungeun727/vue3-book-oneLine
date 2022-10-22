<template>
  <div class="container">
    <form class="form">
      <h2>Title</h2>
      <div>
        <label for="title">title:</label>
        <input 
          v-model="title"
          type="text"
          placeholder="제목을 입력하세요.">
      </div>
      <div>
        <label for="author">author:</label>
        <input
          v-model="author" 
          type="text"
          placeholder="저자를 입력하세요.">
      </div>
      <div>
        <label for="text">memo:</label>
        <textarea 
          v-model="text"
          placeholder="글을 작성하세요." />
      </div>
      <button 
        type="button" 
        @click="submitForm()">
        작성
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BoardWrite',
  components: {},
  data() {
    return {
      title: '',
      author: '',
      text: '',
    }
  },
  methods: {
    submitForm() {}
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 700px;
  height: 800px;
  display: flex;
  flex-direction: column; 
  align-items:center;
  background-color: $back-color;
  .form {
    width: 600px;
    height: 600px;
    background-color: $white;
    padding: 15px;

  }
}

input, textarea {
  width: 350px;
  border: 1px solid #ccc;
  border-radius: .3rem;
}

input {
  height: 25px;
  outline: 0;
}
textarea {
  height: 40px;
}
</style>