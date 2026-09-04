//첫 시도 -> 실패 (시간초과)
function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    let primeNum = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        primeNum++;
        if (primeNum > 2) break;
      }
    }
    if (primeNum == 1) count++;
  }
  return count;
}

//에라토스테네스의 체 이용
function solution(n) {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  //2부터 루트n까지만 배수 지우기
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  //남아있는 true(소수)세기
  return isPrime.filter(Boolean).length;
}

//이제는 단순히 코드를 짜는걸 넘어서 불필요한 과정은 없애고, 효율적으로 짜는 방법을 고민해보자!
