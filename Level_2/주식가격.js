function solution(prices) {
  let result = [];
  for (let i = 0; i < prices.length - 1; i++) {
    let priceDownCount = 1;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j] || j == prices.length - 1) {
        result.push(priceDownCount);
        break;
      } else {
        priceDownCount++;
      }
    }
  }
  result.push(0);
  return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 43.9MB)
// 테스트 2 〉	통과 (0.13ms, 43.6MB)
// 테스트 3 〉	통과 (1.23ms, 49.4MB)
// 테스트 4 〉	통과 (0.33ms, 44MB)
// 테스트 5 〉	통과 (0.65ms, 49.6MB)
// 테스트 6 〉	통과 (0.10ms, 44.1MB)
// 테스트 7 〉	통과 (0.23ms, 44MB)
// 테스트 8 〉	통과 (0.24ms, 43.6MB)
// 테스트 9 〉	통과 (0.11ms, 43.6MB)
// 테스트 10 〉	통과 (0.32ms, 43.9MB)
// 효율성  테스트
// 테스트 1 〉	통과 (31.41ms, 61.1MB)
// 테스트 2 〉	통과 (8.19ms, 55.6MB)
// 테스트 3 〉	통과 (27.52ms, 60.5MB)
// 테스트 4 〉	통과 (29.92ms, 57.4MB)
// 테스트 5 〉	통과 (8.39ms, 55.9MB)
// 채점 결과
// 정확성: 66.7
// 효율성: 33.3
// 합계: 100.0 / 100.0
