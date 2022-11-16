<template>
  <transition 
    name="fade" 
    class="modal">
    <div 
      class="modal-card error"
      :class="{ error: state.isError === false, success: content.status == true }">
      <div class="modal-inner">
        <div class="modal-header">
          <slot name="header" />
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <slot name="footer" />
      </div>
    </div>
  </transition>
</template>

<script>
import { toRefs, computed, reactive } from 'vue';
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const { content } = toRefs(props);

    let state = reactive({
      isError: computed(() => content.status == false),
    })

    return { 
      state,
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  right: 45%;
  bottom: 350px;
  width: 280px;
  height: 50px;
  z-index: 3;
  margin: 0 auto;
}
.modal-card {
  border-radius: 30px;
  box-shadow: 2px 2px #00000028;
  border: 1px solid $light-gray;
  z-index: 2;
  padding-left: 15px;
  .modal-inner {
    line-height: 50px;
    padding-left: 3px;
  }
}
.error {
  background-color: darken($dark-pink, 2%);
  color: $white;
}

.success {
  background-color: darken(green, 2%);
  color: $white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>