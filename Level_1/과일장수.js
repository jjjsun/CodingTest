function solution(k, m, score) {
  let result = 0;
  score = score.sort((a, b) => b - a);
  const boxCount = Math.floor(score.length / m);
  for (let i = 1; i <= boxCount; i++) {
    result += score[m * i - 1] * m;
  }
  return result;
}
//배열 위치 풀면서 계속 헷갈렸다. 체크하면서 배열위치 계속 확ㅇ니하기.
//배열 위치 헷갈리면 원래 숫자대로 하고.
