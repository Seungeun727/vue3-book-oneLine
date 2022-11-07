<template>
  <div>
    <Form
      :initial-values="formValues">
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
    </Form>
    <button
      class="btn-group btn btn--black" 
      type="submit" 
      @click="modifyForm(formValues)">
      수정
    </button>
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
      console.log(postId);
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
    } 
  },
};
</script>
<style lang="scss" scoped>
input {
  width: 450px;
  border: 0;
  border-bottom: 1px solid $light-gray;
  margin-bottom: 5px;
}

textarea {
  width: 450px;
  height: 120px;
  border: 1px solid $light-gray;
  outline: none;
}
</style>