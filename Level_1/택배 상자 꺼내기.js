function solution(n, w, num) {
  let h = Math.ceil(n / w);
  let store = Array.from({ length: h }, () => Array(w).fill(0));

  for (let i = 1; i <= n; i++) {
    const floor = Math.floor((i - 1) / w);
    const col = floor % 2 === 0 ? (i - 1) % w : w - 1 - ((i - 1) % w);
    store[floor][col] = i;
  }

  let count = 0;
  let targetFloor = 0;
  let targetCol = 0;
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (store[r][c] === num) {
        targetFloor = r;
        targetCol = c;
        break;
      }
    }
  }

  for (let r = targetFloor; r < h; r++) {
    if (store[r][targetCol] !== 0) {
      count++;
    }
  }

  return count;
}

// 테스트 1 〉	통과 (0.15ms, 43.7MB)
// 테스트 2 〉	통과 (0.21ms, 43.8MB)
// 테스트 3 〉	통과 (0.22ms, 43.4MB)
// 테스트 4 〉	통과 (0.14ms, 43.5MB)
// 테스트 5 〉	통과 (0.15ms, 43.7MB)
// 테스트 6 〉	통과 (0.14ms, 43.8MB)
// 테스트 7 〉	통과 (0.14ms, 43.6MB)
// 테스트 8 〉	통과 (0.17ms, 43.6MB)
// 테스트 9 〉	통과 (0.15ms, 43.5MB)
// 테스트 10 〉	통과 (0.15ms, 43.4MB)
// 테스트 11 〉	통과 (0.13ms, 43.5MB)
// 테스트 12 〉	통과 (0.14ms, 43.7MB)
// 테스트 13 〉	통과 (0.14ms, 43.7MB)
// 테스트 14 〉	통과 (0.14ms, 43.4MB)
// 테스트 15 〉	통과 (0.15ms, 43.9MB)
// 테스트 16 〉	통과 (0.14ms, 43.6MB)
// 테스트 17 〉	통과 (0.15ms, 43.9MB)
// 테스트 18 〉	통과 (0.17ms, 43.6MB)
// 테스트 19 〉	통과 (0.14ms, 43.5MB)
// 테스트 20 〉	통과 (0.16ms, 43.7MB)
// 테스트 21 〉	통과 (0.14ms, 43.5MB)
// 테스트 22 〉	통과 (0.15ms, 43.7MB)
// 테스트 23 〉	통과 (0.15ms, 43.8MB)
// 테스트 24 〉	통과 (0.12ms, 43.5MB)
// 테스트 25 〉	통과 (0.14ms, 43.6MB)

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
