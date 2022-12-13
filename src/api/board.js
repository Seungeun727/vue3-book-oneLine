import instance from '../api/index';

function writeBoard(params) {
  return instance.post('/board/write', params)
}

export { 
  writeBoard,
};