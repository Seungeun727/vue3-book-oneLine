import instance from './index';

function signUp(signInfo) {
  return instance.post('/user/signUp', signInfo)
}

function login(userInfo) {
  return instance.post('/user/signin', userInfo)
}

export { signUp, login };