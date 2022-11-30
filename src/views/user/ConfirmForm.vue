<template>
  <div class="confirm-container">
    <div class="inner">
      <label>아이디</label>
      <input
        id="user-id" 
        v-model.lazy="id"
        name="id"
        as="input"
        @change="changeId(id)">
      <button
        v-if="state.visible == true"
        type="button"
        class="btn"
        @click="resetField()">
        <FontAwesomeIcon
          icon="fa-solid fa-xmark" /> 
      </button>
      {{ state.isCheck }}
      <button
        v-if="(meta.valid == true)"
        id="reset-btn"
        type="button"
        :disabled="(state.isCheck == true && id != undefined)"
        @click="duplicateIdCheck(id)">
        중복 확인
      </button>
      <span v-if="errors.length">
        {{ errors }}
      </span>
    </div>
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
    const { value: id, errors, meta, resetField } = useField('id', 'required|id');
    
    const duplicateIdCheck = (value) => {
      store.dispatch('user/checkId', value);
    };

    const changeId = (value) => {
      console.log(value);
      if(value.length >= 0 || value == "") {
        store.commit('user/resetCheck');
        return state.visible = true;
      } else {
        return state.visible = false;
      }
    };
    
    resetField({
      id: '',
    });

    return {
      state,
      id,
      meta,
      errors,
      duplicateIdCheck,
      changeId,
      resetField,
    }
  }
}
</script>

<script lang="scss" scoped></script>