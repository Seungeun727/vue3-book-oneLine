<template>
  <form class="form-container">
    <div class="main-title">
      <span class="title">
        <span class="user">
          <FontAwesomeIcon 
            :icon="['fas', 'book-open' ]" />
          {{ userId }}님,</span> 
        오늘 북로그는 무슨 내용인가요?
      </span>
      <span class="sub-title">북로그는 독서를 기록하고 좋은 책은 우리와 함께 공유해요!</span>
    </div>
    <div class="form-content">
      <label>제목</label>
      <input 
        v-model="values.title"
        type="text" 
        name="title"
        placeholder="책 제목을 작성해주세요.">
      <label>저자</label>
      <input 
        v-model="values.author"
        type="text" 
        name="author"
        placeholder="책 저자를 작성해주세요.">
      <label>시작 날짜</label>
      <input 
        v-model="values.date"
        type="text" 
        name="date"
        placeholder="YYYY/MM/DD"
        :class="{ invalid: meta.valid == false && values.date.length > 1}"
        @input="formatDate($event)">
      <span class="error-status">{{ dateError[0] }}</span>
      <label>기록</label>
      <textarea
        v-model="values.text"
        type="text" 
        name="memo" />
    </div>
    <div class="btn-group">
      <button 
        class="btn--white--small"
        type="button" 
        @click="cancleForm()">
        취소
      </button>
      <button
        class="btn--blue--small" 
        type="button" 
        @click="onSubmit(values)">
        지금 등록할래요!
      </button>
    </div>
  </form>
</template>
<script>
import { useRouter } from 'vue-router';
import { checkDate } from '../../utils/validateBoard.js';
import { useForm, useField } from 'vee-validate';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  emits: ['get-child'],
  setup(props, context) {
    const router = useRouter();
    const store = useStore();
    const { values, errors } = useForm({
      initialValues: {
        title: '',
        author: '',
        text: '',
        date: '',
      },
    });
    const { meta, errors: dateError } = useField('date', checkDate);

    const onSubmit = (formData) => {
      if(formData.title !== '' || formData.text !== '') {
        context.emit('get-child', formData);
      }
    };
    const cancleForm = () => {
      router.push({ name: 'BoardList'});
    };

    const formatDate = (e) =>{
      e.target.value = e.target.value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');  
    };
    
    return {
      meta,
      values,
      errors,
      dateError,
      userId:computed(() => store.getters['user/getUser']),
      onSubmit,
      cancleForm,
      formatDate
    }
  }  
};
</script>
<style lang="scss" scoped>
.form-container {
  padding: 40px;
  .title {
    width: 250px;
    font-size: 1.4rem;
    font-weight: 550;
    .user {
      color: $main-color;
    }
  }
  .sub-title {
    display: block;
    margin-top: 8px;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 550;
    color: map-get($gray-colors, color4);
  }

  .form-content {
    padding-top: 30px;
  }
}

.btn--blue--small {
  outline: 0;
  border: 0;
  width: 220px;
  background-color: $main-color;
  padding: 10px;
  border-radius: .2rem;
  box-shadow: 2px 2px 2px #0000000b;
  color: $white;
  margin: 3px 5px;
}

.btn--white--small {
  outline: 0;
  border: 0;
  width: 220px;
  background-color: $white;
  padding: 10px;
  border-radius: .2rem;
  color: $light-gray;
  box-shadow: 2px 2px 2px #0000000b;
  margin: 3px 5px;
}
input, textarea {
  border: 0;
}
</style>