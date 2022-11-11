<template>
  <transition 
    name="modal" 
    class="modal">
    <div class="modal-background">
      <div class="modal-card">
        <button 
          class="btn btn--close"
          @click.self="$emit('close')">
          x
        </button>
        <div class="modal-inner">
          <div class="modal-header">
            <slot name="header">
              <h2>알림</h2>
            </slot>
          </div>
          <div class="modal-body">
            <p v-if="visible == false">
              게시글 {{ message }}하시겠습니까?
            </p>
            <p v-else>
              {{ message }}
            </p>
          </div>
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.modal-background {
  background-color: #0000004b;
  width: 100%;
  height: 100%;
  .modal-card {
    position: absolute;
    right: 50%;
    bottom: 450px;
    width: 240px;
    height: 180px;
    border-radius: 10px;
    box-shadow: 2px 2px #00000015;
    border: 1px solid $light-gray;
    z-index: 2;
    padding-left: 15px;
    background-color: $white;
  }
}

.modal-inner {
  text-align: center;
}

.btn--close {
  outline: 0;
  float: right;
  font-size: 1.2rem;
}
</style>