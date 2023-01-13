<template>
  <transition
    name="modal"
    class="modal">
    <div class="modal-background">
      <div class="modal-card">
        <form id="mypage-edit">
          <button
            type="button"
            class="btn--close"
            @click.self="closeModal">
            <FontAwesomeIcon :icon="['fas', 'xmark']" />
          </button> 
          <div class="form-inner">
            <div class="main-title">
              <h2 class="main-text">
                기본 정보 수정
              </h2>
            </div>
            <div class="field">
              <label>이름</label>
              <input 
                id="name"
                v-model="name"
                name="name"
                :placeholder="userInfo.user_name">
              <span class="error-status">{{ errors.name }}</span>
            </div>
            <button
              v-if="name !== ''"
              type="button"
              class="btn--outline--circle"
              @click="resetField('name')">
              <FontAwesomeIcon :icon="['fas', 'xmark']" />
            </button>
            <div class="field">
              <label>아이디</label>
              <input
                id="uid"
                v-model="id"
                name="id"
                readonly="readonly"
                :placeholder="userInfo.user_id"
                disabled>
            </div>
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
                class="btn--outline--blue"
                @click="cancleEdit()">
                취소
              </button>
              <button 
                type="button"
                class="btn--blue"
                :disabled="name === ''"
                @click="onSubmit({id, name, email})">
                변경
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { useForm } from 'vee-validate';
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
    background-color: darken($box-color, 5%);
    box-shadow: 2px 2px #00000015;
    width: 550px;
    height: 650px;
    position: absolute;
    padding: 5px 15px;
    top: 15%;
    left: 40%;
    bottom: 450px;
    border-radius: 10px;
    z-index: 2;
  }
}

#mypage-edit {
  width: 500px;
  height: 600px;
  background-color: $white;
  padding: 5px 15px;
  margin: 10px;
  .form--inner {
    padding: 30px;
  }
}

.btn.btn--outline--circle {
  position: relative;
  left: 460px;
  bottom: 55px;
}
.btn--close {
  width: 100px;
  height: 50px;
  float: right;
}
.btn-group {
  position: absolute;
  float: right;
  bottom: 200px;
  right: 80px;
}

.field {
  margin-bottom: 20px;
}
label {
  color: $main-color;
  font-size: 1rem;
  font-weight: 550;
}
</style>