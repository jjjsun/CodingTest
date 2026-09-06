//2개 이상맞으면, 7-count. 아니면 6등.

function solution(lottos, win_nums) {
  let result = [];
  let countZero = 0;
  let correct = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] == 0) {
      countZero++;
    } else {
      if (win_nums.includes(lottos[i])) {
        correct++;
      }
    }
  }
  const getRank = (count) => (count >= 2 ? 7 - count : 6);

  const maxRank = getRank(correct + countZero);
  const minRank = getRank(correct);
  return [maxRank, minRank];
}

//함수만들어서 삼항연산자 사용하기
