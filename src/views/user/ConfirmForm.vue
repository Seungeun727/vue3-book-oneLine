<template>
  <div class="confirm-container">
    <div class="inner">
      <label>아이디</label>
      <input
        v-model="value" 
        name="id"
        rules="required|id" 
        as="input">
      <button 
        type="button" 
        class="btn btn--blue"
        @click="duplicateIdCheck(value)">
        중복 확인
      </button>
    </div>
    <span v-if="errors">{{ errors }}</span>
  </div>
</template>

<script>
import { useField } from 'vee-validate';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const { value, errors } = useField('id', 'required|id');

    const duplicateIdCheck = (value) => {
      store.dispatch('user/checkId', value);
    };
    return {
      value,
      errors,
      duplicateIdCheck
    }
  },
}
</script>

<script lang="scss" scoped></script>