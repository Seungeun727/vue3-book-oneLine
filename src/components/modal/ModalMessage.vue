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
            <slot name="body" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
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
    width: 350px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 2px 2px #00000015;
    border: 1px solid $light-gray;
    background-color: $white;
    z-index: 2;
    padding: 10px;
  }
}
</style>