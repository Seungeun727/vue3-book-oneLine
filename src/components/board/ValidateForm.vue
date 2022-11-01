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
        v-model="form.date"
        type="text"
        :invalid="!validDate"
        :maxlength="8"
        placeholder="-제외(19000110)"
        class="date-input" 
        required>
      <span
        v-if="validTitle != null">
        {{ validDate }}
      </span>
    </div>
    <div>
      <label for="text">기록 내용</label>
      <textarea 
        v-model="form.text" />
    </div>
    <button 
      class="btn-group btn btn--black"
      type="button" 
      @click="sendParents()">
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
    validDate() {
      const dateMsg = checkDate(this.form.date, this.errorMsg.date);
      return dateMsg;
    }
  },
  methods: {
    sendParents() {
      this.$emit("get-child", this.form);
    }
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