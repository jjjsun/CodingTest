function solution(board, moves) {
  let arr = [];
  let result = 0;
  for (let i = 0; i < moves.length; i++) {
    const col = moves[i] - 1;
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] !== 0) {
        const doll = board[row][col];
        board[row][col] = 0;

        if (arr.length > 0 && arr[arr.length - 1] == doll) {
          arr.pop();
          result += 2;
        } else {
          arr.push(doll);
        }
        break;
      }
    }
  }
  return result;
}

// 행/열 구분.
