<template>
  <transition 
    name="modal" 
    class="modal">
    <div class="modal-background">
      <div class="modal-card">
        <div class="modal-inner">
          <div class="modal-header">
            <slot name="header" />
          </div>
          <div class="modal-body">
            <span>{{ content }}</span>
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
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-card {
  position: absolute;
  right: 50%;
  top: 10%;
  width: 240px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 2px 2px #00000028;
  border: 1px solid $light-gray;
  z-index: 2;
  padding-left: 15px;
  opacity: .7;
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