<template>
  <form>
    <div class="title">
      <label for="title">제목</label>
      <input
        v-model="form.title"  
        :invalid="!validTitle"
        type="text"
        required>
      <span
        v-if="validTitle != null">
        {{ validTitle }}
      </span>
    </div>
    <div>
      <label for="author">저자</label>
      <input 
        v-model="form.author"
        type="text">  
    </div>
    <div class="date-box">
      <label for="date">등록일</label>
      <input
        id="date"
        type="text"
        :maxlength="10"
        class="date-input" 
        required
        @input="autoDate($event)">
    </div>
    <div>
      <label for="text">기록 내용</label>
      <textarea 
        v-model="form.text" />
    </div>
    <button 
      class="btn-group btn btn--black"
      type="button" 
      @click="sendParents($event)">
      제출
    </button>
  </form>
</template>

<script>
import { checkTitle, checkDate } from '../../utils/validateBoard.js';
export default {
  emits: ['get-child'],
  data() {
    return {
      form: {
        title: '',
        author: '',
        date: '',
        text: '',
      },
      errorMsg: {
        title: '',
        date: ''
      },
    }
  }, 
  computed: {
    error() {
      return Object.values(this.errorMsg)
        .map(error => error == null);
    },
    validTitle() {
      const titleMsg = checkTitle(this.form.title, this.errorMsg.title);
      return titleMsg;
    },
  },
  methods: {
    sendParents() {
      const dateEl = document.querySelector('#date');
      this.form.date = dateEl.value;
      this.$emit("get-child", this.form);
    }, 
    autoDate(e) {
      e.target.value = e.target.value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');  
      return checkDate(e.target.value);
    },  
  }
}
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
  color: $dark-pink;
}
.btn-group {
  margin-top: 30px;
  float: right;
}
</style>