<template>
  <form class="form-container">
    <div class="main-title">
      <span class="title">
        <span class="user">
          <FontAwesomeIcon :icon="['fas', 'book-open']" />
          {{ userId }}님,</span> 
        <slot name="title" />
      </span>
      <span class="sub-title">
        <slot name="subtitle" />
      </span>
    </div>
    <div>
      <div class="form-content">
        <label>제목</label>
        <input 
          v-model="values.title"
          type="text" 
          name="title"
          :placeholder="isPost ? '제목을 작성해주세요.' : post.board_title">
        <label>저자</label>
        <input 
          v-model="values.author"
          type="text" 
          :placeholder="isPost ? '저자를 작성해주세요.' : post.board_author"
          name="author">
        <label>시작 날짜</label>
        <input 
          v-model="values.date"
          type="text" 
          name="date"
          :placeholder="isPost == 0 ? '날짜를 작성해주세요.' : post.createdAt"
          :class="{ invalid: meta.valid == false && values.date.length > 1}"
          @input="formatDate($event)">
        <span class="error-status">{{ dateError[0] }}</span>
        <label>기록</label>
        <textarea
          v-model="values.text"
          type="text" 
          :placeholder="post.length == 0 ? '내용을 작성해주세요.' : post.board_text"
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
          v-if="isPost"
          class="btn--blue--small" 
          type="button" 
          @click="onSubmit(values)">
          지금 등록할래요! 
        </button>
        <button
          v-else
          class="btn--blue--small" 
          type="button" 
          @click="onSubmit(values)">
          지금 수정할래요! 
        </button>
      </div>
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
  props: {
    post: {
      type: Object,
      default: () => {},
    }
  },
  emits: ['get-child'],
  setup(props, context) {
    const router = useRouter();
    const store = useStore();
    const { values, errors } = useForm({ initialValues: { title: '', author: '', text: '', date: '' }});
    const { meta, errors: dateError } = useField('date', checkDate);
    const isPost = computed(() => props.post.length == 0);
    
    const onSubmit = (formData) => {
      console.log(formData);
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
      isPost,
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