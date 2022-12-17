import instance from '../api/index';

function writeBoard(params) {
  return instance.post('/board/write', params)
}

function updateBoard(userId, postData) {
  return instance.post('/board/update/' + userId, postData)
}
function deleteBoard(userId) {
  return instance.post('/baord/delete', userId)
}

export { 
  writeBoard,
  updateBoard,
  deleteBoard
};