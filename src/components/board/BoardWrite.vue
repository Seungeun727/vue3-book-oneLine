<template>
  <div class="container">
    <div class="form">
      <div class="content">
        <span class="main-title">책 등록</span>
        <ValidateForm 
          @get-child="submitForm" />
        <div class="btn-group">
          <button 
            class="btn btn--white"
            type="button" 
            @click="cancleForm()">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ValidateForm from './ValidateForm.vue';
export default {
  name: 'BoardWrite',
  components: {
    ValidateForm
  },
  methods: {
    submitForm(formData) {
      axios.post(`${process.env.VUE_APP_API_URL}` + "/board/write/" + 4, 
      JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log("submitForm Success", res.data);
      }).catch((err) => {
        console.log("submitForm Error", err.response);
      })
    },
    cancleForm() {
      this.$router.push({ name: 'BoardList'});
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
.btn-group {
  float: right;
}
</style>