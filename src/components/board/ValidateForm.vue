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
        <label>작성자</label>
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
        v-slot="{ field, errorMessage }"
        v-model="formValues.text" 
        name="content"
        :rules="validateContent">
        <textarea v-bind="field" />
        <span 
          v-if="errorMessage">
          {{ errorMessage }}
        </span>
      </Field>
      <div class="btn-group">
        <button
          class="btn btn--black" 
          type="submit" 
          @click="onSubmit(formValues)">
          제출
        </button>
        <button 
          class="btn btn--white"
          type="button" 
          @click="cancleForm()">
          취소
        </button>
      </div>
    </Form>
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
      if(!value && value == "") {
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
    cancleForm() {
      this.$router.push({ name: 'BoardList'});
    }
  },
};
</script>
<style lang="scss" scoped>
span {
  width: 180px;
  display: block;
  font-size: 0.8em;
}
.btn-group {
  float: right;
  position: absolute;
  right: 770px;
}
</style>