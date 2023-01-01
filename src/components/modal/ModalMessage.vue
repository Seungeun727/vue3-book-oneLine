<template>
  <transition 
    name="modal" 
    class="modal">
    <div class="modal-background">
      <div class="modal-card">
        <button 
          class="btn btn--close"
          @click="closeButton">
          <i class="fas fa-xmark" />
        </button>
        <div class="modal-inner">
          <div class="modal-header">
            <slot name="header">
              <span class="main-title">알림</span>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
          <div class="modal-footer">
            <slot name="footer" />
          </div>
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
  setup(props, context) {
    const closeButton = () => {
      context.emit('close');
    };

    return {
      closeButton
    }
  }
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
    left: 40%;
    bottom: 450px;
    width: 400px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 2px 2px #00000015;
    z-index: 2;
    background-color: $white;
  }
}

.modal-inner {
  width: 100%;
  height: 140px;
  text-align: center;
  padding: 10px;
  .modal-footer {
    width: 320px;
    height: 60px;
  }
  .modal-body {
    margin-top: 8px;
    width: 380px;
    height: 40px;
  }
}

.btn--close {
  outline: 0;
  float: right;
  font-size: 18px;
}

.main-title {
  font-size: 18px;
  font-weight: 550;
}
</style>