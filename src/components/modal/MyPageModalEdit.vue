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
              id="name"
              v-model="name"
              name="name"
              :placeholder="userInfo.user_name">
            <span>{{ errors.name }}</span>
          </div>
          <button
            type="button"
            class="btn btn--outline--circle"
            @click="resetField('name')">
            <FontAwesomeIcon
              :icon="['fas', 'xmark']" /> 
          </button>
          <div class="field">
            <label>아이디</label>
            <input
              id="uid"
              v-model="id"
              name="id"
              readonly="readonly"
              :placeholder="userInfo.user_id">
            <span>{{ errors.id }}</span>
          </div>
          <button
            type="button"
            class="btn btn--outline--circle"
            @click="resetField('id')">
            <FontAwesomeIcon
              :icon="['fas', 'xmark']" /> 
          </button>
          <div class="field"> 
            <label>이메일</label>
            <input
              type="text"
              readonly="readonly"
              :placeholder="userInfo.user_email"
              disabled>
          </div>
          <div class="btn-group">
            <button 
              type="button"
              @click="cancleEdit()">
              취소
            </button>
            <button 
              type="button"
              :disabled="name === ''"
              @click="onSubmit({id, name, email})">
              변경
            </button>
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import { useForm, } from 'vee-validate';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import authApi from '@/api/auth';
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  }, 
  emits: ['close', 'update'],
  setup(props, context) {
    const router = useRouter();
    const state = reactive({
      isShow: false,
    })
    
    const { values, errors, useFieldModel } = useForm({
      validationSchema: { name: 'required|name', id: 'required|id' },
      initialValues: { name: '', id: '' }
    });

    const [ name, id ] =useFieldModel(['name', 'id']);

    const closeModal = () => {
      context.emit('close', state.isShow);
    };
    
    const resetField = (inputName) => {
      values[inputName] = '';
    };

    const onSubmit = (formData) => {
      const maskName = formData.name.replace(/(?<=.{1})./gi, "*");
      const userData = { name: maskName };
      authApi.updateUserInfo(userData)
      .then((res) => {
        console.log("updateUserInfo success", res.data);
        context.emit('update', userData);
      })
      .catch((err) => {
        console.log("updateUserInfo fail", err);
      });
    };

    const cancleEdit = () => {
      router.go(-1);
    };

    return {
      name,
      id,
      errors,
      closeModal,
      resetField,
      onSubmit,
      cancleEdit
    }
  }
}
</script>
<style lang="scss" scoped></style>