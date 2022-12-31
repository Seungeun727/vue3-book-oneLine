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

function userInfo() {
  return instance.get('user/mypage');
}

function updateUserInfo(userInfo) {
  return instance.put('user/mypage/edit', userInfo);
}

function userPost() {
  return instance.get('user/mypage/article');
}
export default { 
  signUp, 
  login, 
  logout,
  userInfo, 
  userPost,
  updateUserInfo 
};