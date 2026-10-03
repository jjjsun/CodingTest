// 3진법 → 10진법 : parseInt(0021, 3);
// 10진법 → 3진법 : 13.toString(3);

function solution(n, k) {
  let baseChange = n.toString(k);
  let checklistNumArr = baseChange.split("0");
  let result = [];
  for (let i = 0; i < checklistNumArr.length; i++) {
    let isPrime = true;
    let checkNum = checklistNumArr[i];
    if (Number(checkNum) === 1 || checkNum === "") {
      isPrime = false;
      continue;
    }
    for (let j = 2; j <= parseInt(Math.sqrt(checkNum)); j++) {
      if (checkNum % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      result.push(checkNum);
    }
  }
  return result.length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (97.38ms, 51.2MB)
// 테스트 2 〉	통과 (0.10ms, 44MB)
// 테스트 3 〉	통과 (0.12ms, 43.9MB)
// 테스트 4 〉	통과 (0.10ms, 44MB)
// 테스트 5 〉	통과 (0.10ms, 44.1MB)
// 테스트 6 〉	통과 (0.08ms, 44MB)
// 테스트 7 〉	통과 (0.09ms, 44MB)
// 테스트 8 〉	통과 (0.08ms, 44.1MB)
// 테스트 9 〉	통과 (0.11ms, 43.9MB)
// 테스트 10 〉	통과 (0.11ms, 43.8MB)
// 테스트 11 〉	통과 (91.28ms, 50.9MB)
// 테스트 12 〉	통과 (0.11ms, 43.9MB)
// 테스트 13 〉	통과 (0.12ms, 43.7MB)
// 테스트 14 〉	통과 (0.10ms, 44MB)
// 테스트 15 〉	통과 (0.12ms, 43.9MB)
// 테스트 16 〉	통과 (0.09ms, 44MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
