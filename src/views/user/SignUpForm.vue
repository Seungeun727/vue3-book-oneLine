<template>
  <div class="form-container">
    <UserMessageModal
      v-if="isShow == true"
      :content="signUpMsg"
      @close="modalClose">
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
        <span class="sub-title">{{ '방문자님 오신 것을 환영합니다. 회원정보를 입력해주세요.' }}</span>
      </template>
      <template #main />
      <template #footer>
        <button class="btn btn--black btn--large">
          회원가입
        </button>
      </template>
    </CustomForm>
  </div>
</template>

<script>
import CustomForm from '../common/CustomForm.vue';
import UserMessageModal from '@/components/modal/UserMessageModal.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  components: {
    CustomForm,
    UserMessageModal
  },
  setup() {
    const isShow = ref(false);
    const store = useStore();
    const router = useRouter();
    
    const signUpCheck = () => store.commit('user/signUpCheck');
    const signUpMsg = computed(() => store.state.user.signUpStatus);
    
    const registerUser = (signInfo) =>  {
      isShow.value = true;
      store.dispatch('user/regsiterUser', signInfo);
      router.push({ name: 'Home'});
    };    
    
    const modalClose = () => {
      isShow.value = false;
    };
    return {
      isShow,
      signUpCheck,
      signUpMsg,  
      registerUser,
      modalClose
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
          rules: 'required|name',
          placeholder: '이름 입력'
        },
        { 
          label: '이메일',
          name: 'email',
          as: 'input',
          type: 'text',
          rules: 'required|email',
          placeholder: '이메일 주소(예시: hong@gmail.com)'
        },
        { 
          label: '아이디',
          name: 'id',
          as: 'input',
          type: 'text',
          rules: 'required|id',
          status: false,
          fail: ['이미 사용중인 아이디입니다.', '중복 확인은 필수입니다.', '사용 가능한 아이디입니다.'],
          placeholder: '아이디 입력(5자-20자)'
        },
        { 
          label: '비밀번호',
          name: 'password',
          as: 'input',
          type: 'password',
          rules: 'required|password',
          placeholder: '비밀번호 입력(8자-20자)'
        },
        { 
          label: '비밀번호 재확인',
          name: 'passwordCheck',
          as: 'input',
          type: 'password',
          rules: 'confirmed:@password',
          placeholder: '비밀번호 재입력'
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
  height: 900px;
}
.title {
  font-size: $font-size;
}
.sub-title {
  padding-top: 3px;
  margin-bottom: 10px;
  display: block;
}
</style>