import instance from './index';

function signUp(signInfo) {
  return instance.post('/user/register', signInfo);
}

function login(userInfo) {
  return instance.post('/user/signin', userInfo);
}

function logout() {
  return instance.get('user/logout');
}

function userPost() {
  return instance.get('mypage/board');
}

function userInfo() {
  return instance.get('mypage/');
}
export default { 
  signUp, 
  login, 
  logout,
  userInfo, 
  userPost 
};