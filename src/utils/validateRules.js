import { defineRule } from 'vee-validate';

defineRule("required", (value) => {
  if(!value || !value.length) {
    return '필수 입력란입니다.';
  }
  return true;
});

defineRule("name", (value) => {
  if (!value || value.length < 2) {
    return '이름 2글자 이상 입력해주세요.';
  }
  const regexName = /^[가-힣a-zA-Z]+$/;
  if (!regexName.test(value)) {
    return '이름을 다시 확인해주세요.';
  }
  return true;
})

defineRule("email", (value) => {
  if(!value || !value.length) {
    return true;
  }
  // eslint-disable-next-line no-useless-escape
  const regexEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (!regexEmail.test(value)) {
    return '이메일 형식에 어긋납니다.';
  }
  return true;
})

defineRule("id", (value) => {
  const regexId = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,20}$/;
  if (!regexId.test(value)) {
    return '아이디는 5~20자의 영문 소문자, 숫자로만 사용합니다';
  }
  return true;
})