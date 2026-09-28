function solution(signals) {
  //최대공약수(gcd)
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  //최소공배수(lcm)
  const lcm = (a, b) => (a * b) / gcd(a, b);

  //각 신호등 1주기 사이클
  const cycles = signals.map(([g, y, r]) => g + y + r);

  //각 주기의 최대공배수구하기.(maxTime구하기 위해서)
  const maxTime = cycles.reduce((acc, cur) => lcm(acc, cur));

  for (let t = 1; t <= maxTime; t++) {
    let allYellow = true;
    for (let i = 0; i < signals.length; i++) {
      const [g, y, r] = signals[i];
      const cycle = cycles[i];

      //t초가 주기 안에서 몇번째 초인지
      const pos = (t - 1) % cycle;

      //초록불 끝난후, 노란불 끝나지 직전 사이
      const isYellow = pos >= g && pos < g + y;

      //하나라도 노란불이 아니다? 탈락.
      if (!isYellow) {
        allYellow = false;
        break;
      }
    }
    if (allYellow) {
      return t;
    }
  }
  return -1;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.17ms, 43.4MB)
// 테스트 2 〉	통과 (0.25ms, 43.5MB)
// 테스트 3 〉	통과 (0.27ms, 43.4MB)
// 테스트 4 〉	통과 (0.47ms, 44.1MB)
// 테스트 5 〉	통과 (0.15ms, 43.7MB)
// 테스트 6 〉	통과 (0.14ms, 43.3MB)
// 테스트 7 〉	통과 (0.17ms, 43.7MB)
// 테스트 8 〉	통과 (0.15ms, 43.4MB)
// 테스트 9 〉	통과 (0.16ms, 43.4MB)
// 테스트 10 〉	통과 (0.13ms, 44.2MB)
// 테스트 11 〉	통과 (0.48ms, 44.1MB)
// 테스트 12 〉	통과 (0.13ms, 43.6MB)
// 테스트 13 〉	통과 (0.17ms, 43.6MB)
// 테스트 14 〉	통과 (0.56ms, 44.4MB)
// 테스트 15 〉	통과 (0.47ms, 44.1MB)
// 테스트 16 〉	통과 (30.62ms, 50.4MB)
// 테스트 17 〉	통과 (18.12ms, 50.7MB)
// 테스트 18 〉	통과 (44.10ms, 50.6MB)
// 테스트 19 〉	통과 (7.05ms, 50.7MB)
// 테스트 20 〉	통과 (62.82ms, 50.5MB)
// 테스트 21 〉	통과 (27.54ms, 50.9MB)
// 테스트 22 〉	통과 (7.31ms, 51.1MB)
// 테스트 23 〉	통과 (51.54ms, 50.3MB)
// 테스트 24 〉	통과 (9.54ms, 50.4MB)
// 테스트 25 〉	통과 (12.80ms, 50.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
