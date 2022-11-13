<template>
  <div class="container">
    <CustomForm 
      :schema="schema" />
  </div>
</template>

<script>
import CustomForm from './CustomForm.vue';
export default {
  components: {
    CustomForm
  },
  data: () => {
    const schema = {
      fields: [
        { 
          label: '이름',
          name: 'name',
          as: 'input',
          type: 'text',
          rules: "required|name"
        },
        { 
          label: '이메일',
          name: 'email',
          as: 'input',
          type: 'text',
          rules: "email"
        },
        { 
          label: '아이디',
          name: 'id',
          as: 'input',
          type: 'text',
          rules: "required|id"
        },
        { 
          label: '비밀번호',
          name: 'password',
          as: 'input',
          type: 'password',
        },
        { 
          label: '비밀번호 재확인',
          name: 'passwordCheck',
          as: 'input',
          type: 'password',
        },
      ]
    };
    return {
      schema
    }
  }
}
</script>

<style lang="scss" scoped></style>