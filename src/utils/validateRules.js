/* eslint-disable no-unused-vars */
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
});

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
});

defineRule("id", (value) => {
  const regexId = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,20}$/;
  if (!regexId.test(value)) {
    return '아이디는 5~20자의 영문 대소문자, 숫자, 특수문자로만 사용합니다';
  }
  return true;
});

defineRule("password", (value) => {
  const regex = {
    repeat: /(\w)\1\1/,
    space: /\s/g,
    pwd: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
  };
  if(regex.space.test(value)) {
    return '비밀번호는 공백이 없어야 합니다.';
  } else if (regex.repeat.test(value)) {
    return '비밀번호의 연속된 문자는 취약하므로 재설정해야 합니다.';
  } else if(!regex.pwd.test(value)) {
    return '비밀번호는 8~20자 영어 대소문자, 숫자, 특수문자를 포함해야 합니다.';
  } 
  return true;
});

defineRule("confirmed", (value, [target], ctx) => {
  if(value === "") {
    return '비밀번호는 8~20자의 영어 대소문자, 숫자, 특수문자를 포함해야 합니다.';
  } else if(value !== ctx.form.password) {
    return '작성하신 비밀번호를 다시 확인해주세요.';
  }
  return true;
});