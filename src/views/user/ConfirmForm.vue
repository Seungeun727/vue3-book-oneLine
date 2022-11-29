<template>
  <div class="confirm-container">
    <div class="inner">
      <label>아이디</label>
      <input
        id="user-id" 
        v-model="value"
        name="id"
        as="input"
        @change="changeId(value)">
      <button
        v-if="state.visible == true"
        type="button"
        class="btn"
        @click="resetId()">
        <FontAwesomeIcon
          icon="fa-solid fa-xmark" />
      </button>
      <button
        id="reset-btn"
        type="button"
        :disabled="state.visible == true && state.isCheck == true"
        @click="duplicateIdCheck(value)">
        중복 확인
      </button>
    </div>
    <span v-if="errors.length">
      {{ errors }}
    </span>
  </div>
</template>

<script>
import { useField } from 'vee-validate';
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const state = reactive({
      visible: false,
      isCheck: computed(() => store.state.user.status),
    });
    const store = useStore();
    const { value, errors } = useField('id', 'required|id');
    
    const duplicateIdCheck = (value) => {
      store.dispatch('user/checkId', value);
    };

    const changeId = (value) => {
      (console.log(value));
      if(value.length > 0) {
        return state.visible = true;
      } else if (value.length == "") {
        return state.visible = true;
      } else {
        return state.visible = false;
      }
    };
    
    const resetId = () => {
      const inputEl = document.querySelector('#user-id').value = "";
      const btnEl = document.querySelector('#reset-btn').disabled = false;
      return { inputEl, btnEl,  };
    };
        
    return {
      state,
      value,
      errors,
      duplicateIdCheck,
      changeId,
      resetId,
    }
  },
}
</script>

<script lang="scss" scoped></script>