<template>
  <transition
    class="modal">
    <div class="modal-card">
      <button
        type="button" 
        class="btn btn--close"
        @click.self="closeModal">
        <FontAwesomeIcon
          icon="fa-solid fa-xmark" />
      </button> 
      <form id="mypage-edit">
        <div class="form-inner">
          <div class="main-title">
            <h2 class="main-text">
              기본 정보 수정
            </h2>
            <span class="sub-text" />
          </div>
          <div class="field">
            <label>이름</label>
            <input
              type="text">
          </div>
          <div class="field">
            <label>아이디</label>
            <input
              type="text">
          </div>
          <div class="field">
            <label>이메일</label>
            <input
              type="text">
          </div>
          <div class="btn-group">
            <button type="button">
              취소
            </button>
            <button type="button">
              변경
            </button>
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import { reactive } from 'vue';
export default {
  emits: ['close'], 
  setup(props, context) {
    const state = reactive({
      isShow: false,
    })
    const closeModal = () => {
      context.emit('close', state.isShow);
    };
    return {
      closeModal
    }
  }
}
</script>
<style lang="scss" scoped></style>