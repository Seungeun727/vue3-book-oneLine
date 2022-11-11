<template>
  <div class="container">
    <Form
      class="form"
      :initial-values="formValues">
      <div class="main-title">
        <span class="title">
          책 편집
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
            v-if="errorMessage"
            :class="{ valid: isValid}">
            {{ errorMessage }}
          </span>
        </Field>
        <label for="content">내용</label>
        <Field
          v-slot="{ field, errorMessage }"
          v-model="formValues.text" 
          name="content"
          :rules="validateContent">
          <textarea
            v-bind="field" />
          <span
            v-if="errorMessage"
            :class="{ valid: isValid }">
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
      isValid: false,
    }
  },
  methods: {
    validateTitle(value) {
      if (!value && value =="") {
        this.isValid = true;
        return '제목 입력란은 필수입니다.';
      }
      return true;
    },
    validateContent(value) {
      if(!value && value == "") {
        this.isValid = true;
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
  width: 500px;
  height: 700px;
}

.main-title { 
  height: 45px;
  font-size: $font-size;
  color: $font-color;
  padding: 5px;
}
.btn-group {
  position: absolute;
  right: 740px;
}
.valid  {
  color: $dark-pink;
}
</style>