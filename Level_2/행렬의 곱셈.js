function solution(arr1, arr2) {
  let result = [];
  let colLen = arr2[0].length;
  for (let i = 0; i < arr1.length; i++) {
    let num1 = arr1[i];
    let curRow = [];

    for (let j = 0; j < colLen; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += num1[k] * arr2[k][j];
      }
      curRow.push(sum);
    }

    result.push(curRow);
  }
  return result;
}

// 행열의 곱셈은 가로세로곱하기

// 정확성  테스트
// 테스트 1 〉	통과 (0.70ms, 49.2MB)
// 테스트 2 〉	통과 (5.77ms, 50.9MB)
// 테스트 3 〉	통과 (4.03ms, 51.3MB)
// 테스트 4 〉	통과 (0.45ms, 43.5MB)
// 테스트 5 〉	통과 (1.89ms, 50.9MB)
// 테스트 6 〉	통과 (18.69ms, 49.9MB)
// 테스트 7 〉	통과 (0.43ms, 44.1MB)
// 테스트 8 〉	통과 (0.23ms, 43.9MB)
// 테스트 9 〉	통과 (0.21ms, 43.8MB)
// 테스트 10 〉	통과 (3.55ms, 50.4MB)
// 테스트 11 〉	통과 (0.77ms, 49.8MB)
// 테스트 12 〉	통과 (0.28ms, 43.8MB)
// 테스트 13 〉	통과 (2.06ms, 50.5MB)
// 테스트 14 〉	통과 (4.18ms, 51.4MB)
// 테스트 15 〉	통과 (1.15ms, 49.9MB)
// 테스트 16 〉	통과 (13.82ms, 49.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
