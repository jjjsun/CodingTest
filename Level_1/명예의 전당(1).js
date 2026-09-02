function solution(k, score) {
  let scoreBoard = [];
  let result = [];
  for (let i = 0; i < score.length; i++) {
    scoreBoard.push(score[i]);
    scoreBoard.sort((a, b) => b - a);
    if (scoreBoard.length > k) {
      scoreBoard.pop();
    }
    result.push(scoreBoard[scoreBoard.length - 1]);
  }
  return result;
}

//마지막에 result.push(scoreBoard[-1]) 이라고 해서, 계속 null값만 나왔는데,
//자바스크립트는 python처럼 [-1]로 마지막 요소를 가져올수없어서 접근하면 undefined가 채워짐.
//그래서 마지막 요소를 가져오려면, 길이-1로. 즉, scoreBoard[scoreBoard.length - 1]로 해야함

//map 활용하여 더 간단하게
function solution(k, score) {
  const scoreBoard = [];
  return score.map((s) => {
    scoreBoard.push(s);
    scoreBoard.sort((a, b) => b - a);
    if (scoreBoard.length > k) scoreBoard.pop();
    return scoreBoard.at(-1);
  });
}

// .at(정수): JS는 Python과 다르게 arr[-1]로 쓰면 프로퍼티 키로 인식하기 때문에 undefined를 반환해서 안됨.
//그래서 끝에서 부터 요소 갖고오기 편하도록 도입됨
// 즉, scoreBoard.at(-1) 하면 scoreBoard배열 맨뒤에 하나를 가져오는거지.
