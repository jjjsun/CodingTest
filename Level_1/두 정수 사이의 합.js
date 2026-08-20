//첫번째 성공
function solution(a, b) {
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

//Math 사용
function solution(a, b) {
  let sum = 0;
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

//등차수열 합 가우스 공식사용
function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
