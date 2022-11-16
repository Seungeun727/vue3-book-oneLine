<template>
  <div class="form-container">
    <UserMessageModal
      v-if="isShow"
      :content="signUpMsg">
      <template #body>
        <span v-if="signUpMsg.status == false">
          <FontAwesomeIcon icon="triangle-exclamation" />
          {{ signUpMsg.errorMsg }}
        </span>
        <span v-if="signUpMsg.status == true">
          <FontAwesomeIcon icon="circle-check" />
          {{ signUpMsg.successMsg }}
        </span>
      </template>
    </UserMessageModal>
    <CustomForm 
      :schema="schema"
      @child="registerUser">
      <template #header>
        <span class="title">회원가입</span>
      </template>
      <template #main />
      <template #footer>
        <button class="btn btn--black">
          회원가입
        </button>
      </template>
    </CustomForm>
  </div>
</template>

<script>
import CustomForm from './CustomForm.vue';
import UserMessageModal from '@/components/modal/UserMessageModal.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  components: {
    CustomForm,
    UserMessageModal
  },
  setup() {
    const isShow = ref(false);
    const store = useStore();
    
    const signUpCheck = () => store.commit('user/signUpCheck');
    const signUpMsg = computed(() => store.state.user.signUpStatus);
    
    const registerUser = (signInfo) =>  {
      isShow.value = true;
      store.dispatch('user/regsiterUser', signInfo);
    };    
    
    return {
      isShow,
      signUpCheck,
      signUpMsg,  
      registerUser,
    }
  },
  data: () => {
    const schema = {
      fields: [
        { 
          label: '이름',
          name: 'name',
          as: 'input',
          type: 'text',
          rules: 'required|name'
        },
        { 
          label: '이메일',
          name: 'email',
          as: 'input',
          type: 'text',
          rules: 'email'
        },
        { 
          label: '아이디',
          name: 'id',
          as: 'input',
          type: 'text',
          rules: 'required|id'
        },
        { 
          label: '비밀번호',
          name: 'password',
          as: 'input',
          type: 'password',
          rules: 'required|password'
        },
        { 
          label: '비밀번호 재확인',
          name: 'passwordCheck',
          as: 'input',
          type: 'password',
          rules: 'confirmed:@password'
        },
      ]
    };
    return {
      schema,
    }
  },
}
</script>

<style lang="scss" scoped>
.form-container {
  background-color: $white;
  width: 100%;
  height: 900px;
}
.title {
  margin-bottom: 5px; 
  font-size: $font-size;
  border-bottom: 1px solid $light-gray;
}
</style>