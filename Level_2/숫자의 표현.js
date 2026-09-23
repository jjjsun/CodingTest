function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let num = i;
    let sum = 0;
    while (sum <= n) {
      sum += num;
      if (sum === n) {
        result++;
        break;
      } else {
        num++;
      }
    }
  }
  return result;
}

//효율성 테스트
// 테스트 1 〉	통과 (2.56ms, 48.2MB)
// 테스트 2 〉	통과 (5.08ms, 48.8MB)
// 테스트 3 〉	통과 (2.29ms, 48.4MB)
// 테스트 4 〉	통과 (0.99ms, 44MB)
// 테스트 5 〉	통과 (3.74ms, 48.7MB)
// 테스트 6 〉	통과 (3.44ms, 48.4MB)

function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; sum < n; j++) {
      sum += j;
    }
    if (sum === n) result++;
  }
  return result;
}

//효율성 테스트
// 테스트 1 〉	통과 (1.38ms, 44MB)
// 테스트 2 〉	통과 (2.24ms, 49.2MB)
// 테스트 3 〉	통과 (3.62ms, 49.3MB)
// 테스트 4 〉	통과 (2.68ms, 48.7MB)
// 테스트 5 〉	통과 (2.82ms, 48.9MB)
// 테스트 6 〉	통과 (2.42ms, 48.9MB)
