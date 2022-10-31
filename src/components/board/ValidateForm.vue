<template>
  <form>
    <div class="title">
      <label for="title">제목</label>
      <input
        v-model="form.title"  
        :invalid="!validTitle"
        type="text"
        maxlength="40"
        required>
      <span>
        {{ errorMsg.title }}
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
        :maxlength="11"
        class="date-input" 
        required>
      <span>
        {{ errorMsg.date }}
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
        author: '',
        date: ''
      },
    }
  }, 
  computed: {
    error() {
      return Object.values(this.errorMsg)
        .map(error => console.log(error == null));
    },
    validTitle() {
      return this.checkTitle();
    },
    validDate() {
      return this.checkDate();
    }
  },
  methods: {
    checkTitle() {
      const { title } = this.form;
      if(!title && title == "") {
        this.errorMsg.title = "제목 입력은 필수입니다.";
      } else {
        this.errorMsg.title="";
        if(title.length > 40) {
          this.errorMsg.title= "제목은 40자 이내로 작성하세요.";
        } 
      }
    },
    checkDate() {
      const { date } = this.form;
      if(!date && date == "") {
        this.errorMsg.date = "날짜 입력은 필수입니다.";
      } else {
        if(date != 11 && date < 11) {
          this.errorMsg.date = "날짜는 11자입니다.";
        } else {
          this.errorMsg.date = "";
        }
      }
    },
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
.date-box {
  width: 120px;
  display: inline-block;
  .date-input {
    width: 130px;
    height: 32px;
    outline: 0;
    border: 1px solid $light-gray;
    border-radius: 5px;
    background: #fffefe;
    text-align: center;
  }
}
.date-input:not(:valid) {
  border: 1px solid $dark-pink;
}
.date-input:not(:invalid) {
  border: 1px solid green;
}

.btn-group {
  margin-top: 30px;
  float: right;
}
</style>