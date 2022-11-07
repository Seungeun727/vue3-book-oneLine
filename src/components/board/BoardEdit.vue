<template>
  <div class="container">
    <Form
      class="form"
      :initial-values="formValues">
      <div class="main-title">
        <span class="title">
          게시물 수정
        </span>
      </div>
      <div class="content">
        <Field
          v-slot="{ field, errorMessage }"
          v-model="formValues.title"
          :rules="validateTitle"
          name="title"
          type="text">
          <label>제목</label>
          <input 
            v-bind="field">
          <span 
            v-if="errorMessage">
            {{ errorMessage }}
          </span>
        </Field>
        <label for="content">내용</label>
        <Field
          v-slot="{ errorMessage }"
          v-model="formValues.text" 
          as="textarea" 
          name="content"
          :rules="validateContent">
          <span 
            v-if="errorMessage">
            {{ errorMessage }}
          </span>
        </Field>
      </div>
      <div class="btn-group">
        <button
          class="btn btn--blue" 
          type="button" 
          @click="modifyForm(formValues)">
          수정
        </button>
        <button
          class="btn btn--white" 
          type="button" 
          @click="cancleForm()">
          취소
        </button>
      </div>
    </Form>
    {{ msg }}
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate';
import axios from 'axios';
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      formValues: {
        title: '',
        text: '',
      },
      msg: '',
    }
  },
  methods: {
    validateTitle(value) {
      if (!value && value =="") {
        return '제목 입력란은 필수입니다.';
      }
      return true;
    },
    validateContent(value) {
      if(!value && value == undefined) {
        return '내용 입력란은 필수입니다.';
      }
      return true;
    },
    modifyForm(formData) {
      const postId = this.$route.params.id;
      axios.post(`${process.env.VUE_APP_API_URL}` + "/board/update/" + postId,
      JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log("modifyForm Success", res.data);
      }).catch((err) => {
        console.log("modifyForm Error", err.response);
      })
    }, 
    cancleForm() {
      this.$router.go(-1);
    } 
  },
};
</script>
<style lang="scss" scoped>
.form {
  margin: 0 auto;
  border: 1px solid #ccc;
  width: 500px;
  height: 700px;
  box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.3);
}

.main-title { 
  height: 45px;
  background: #333;
  font-size: $font-size;
  color: white;
  padding: 5px;
}

.content {
  padding: 15px;
}

.btn-group {
  padding: 10px;
}
</style>