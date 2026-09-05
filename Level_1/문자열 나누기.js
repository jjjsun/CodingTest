function solution(s) {
  let word = s.split("");
  let x = "";
  let result = 0;
  let xCount = 0;
  let notxCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (!x) {
      x = s[i];
    }
    if (s[i] === x) {
      xCount++;
    } else {
      notxCount++;
    }
    if (xCount === notxCount) {
      result++;
      x = "";
      xCount = 0;
      notxCount = 0;
    }
  }
  if (x) {
    result++;
  }
  return result;
}

// 로직을 어디서 부터 체크하면서 나눠가야하는지 한번 더 생각해보기
