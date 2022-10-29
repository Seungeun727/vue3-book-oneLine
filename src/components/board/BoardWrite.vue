<template>
  <div class="container">
    <form class="form">
      <div class="content">
        <span class="main-title">책 등록</span>
        <div
          v-for="(element, value) in form" 
          :key="value">
          <label>{{ value }}</label>
          <input type="text">
        </div>
        <div>
          <label for="text">기록 내용</label>
          <textarea 
            v-model="text" />
        </div>
        <div class="btn-group">
          <button 
            class="btn btn--black"
            type="button" 
            @click="submitForm()">
            제출
          </button>
          <button 
            class="btn btn--white"
            type="button" 
            @click="cancleForm()">
            취소
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'BoardWrite',
  components: {},
  data() {
    return {
      form: {
        title: '',
        author: '',
        date: '',
      },
      text: '',
    }
  },
  methods: {
    submitForm() {
      const InputData = JSON.stringify({ 
        title: this.form.title, 
        author: this.form.author, 
        text: this.text,
        date: this.form.date 
      });
      console.log(InputData);
      axios.post(`${process.env.VUE_APP_API_URL}` + "/board/write/" + 4, InputData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log("submitForm Success", res.data);
      }).catch((err) => {
        console.log("submitForm Error", err.response);
      })
    } 
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 800px;
  height: 800px;
  background-color: $back-color;
  .form {
    width: 600px;
    height: 700px;
    background-color: $white;
    margin: 30px auto;
    
    .main-title {
      display: inline-block;
      font-size: $font-size;
      margin-bottom: 15px;
    }
  }
}

.content {
  padding: 20px;
}

input {
  border: 0;
  border-bottom: 1px solid $light-gray;

  &:focus {
    border-bottom: 1px solid $light-yellow;
  }
}

textarea {
  border: 1px solid $light-gray;
  outline: none;
  &:focus {
    border: 1px solid $light-yellow;
  }
}
.btn-group {
  margin-top: 30px;
  float: right;
}
</style>