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
      <Field
        v-slot="{ field ,errorMessage }"
        v-model="formValues.author"
        :rules="validateAuthor"
        name="author"
        type="text">
        <label>author</label>
        <input 
          v-bind="field">
        <span 
          v-if="errorMessage">
          {{ errorMessage }}
        </span>
      </Field>
      <Field
        v-slot="{ field, errorMessage }"
        :rules="validateDate"
        name="date"
        type="text">
        <label>시작 날짜</label>
        <input 
          id="dates"
          v-model="formValues.date"
          v-bind="field"
          @input="checkDate($event)"> 
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
      @click="onSubmit(formValues)">
      제출
    </button>
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate';
import { checkDate } from '../../utils/validateBoard.js';

export default {
  components: {
    Form,
    Field,
  },
  emits: ['get-child'],
  data() {
    return {
      formValues: {
      title: '',
      author: '',
      text: '',
      date: '',
      },
    }
  },
  methods: {
    onSubmit(formData) {
      const dateEl = document.querySelector('#dates');
      // console.log(dateEl, formData);
      this.formValues.date = dateEl.value;
      this.$emit("get-child", formData);
    },
    validateTitle(value) {
      if (!value && value =="") {
        return '제목 입력란은 필수입니다.';
      }
      return true;
    },
    validateAuthor(value) {
      if(!value && value == "") {
        return '저자 입력란은 필수입니다.';
      }
      return true;
    },
    validateContent(value) {
      if(!value && value == undefined) {
        return '내용 입력란은 필수입니다.';
      }
      return true;
    },
    checkDate(e) {
      e.target.value = e.target.value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');  
    },
    validateDate(date) {
      return checkDate(date);
    },
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

span {
  width: 180px;
  display: block;
  font-size: 0.8em;
}
.btn-group {
  float: right;
}
</style>