import instance from '../api/index';

function boardList(pageInfo) {
  console.log(pageInfo);
  return instance.get('/board', { params: pageInfo})
}

function userPost(postId) {
  return instance.get('/board/' + postId)
}

function writeBoard(params) {
  return instance.post('/board/write', params)
}

function updateBoard(postData, postId,) {
  return instance.post('/board/update/' + postId, postData)
}

function deleteBoard(userId) {
  return instance.post('/board/delete/' + userId)
}

export {
  boardList, 
  userPost,
  writeBoard,
  updateBoard,
  deleteBoard
};