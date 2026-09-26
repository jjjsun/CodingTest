//첫 시도 -> 실패. 로직이 틀렸음. 무조건 1 다음 *2가 최솟값이 아님.
// function solution(n){
//     let energy = 1;
//     let distance = 1;

//     while(true){
//         let newDistance = distance * 2;
//         if (newDistance <= n){
//             distance = newDistance;
//         }
//         else {
//             energy += (n - distance);
//             break;
//         }
//     }
//     return energy;
// }

//성공 -> 뒤에서부터 거꾸로 /2하면서 최솟값 구하기. 홀수면 -1하고 에너지 +1하고.
function solution(n) {
  let energy = 0;
  let distance = n;

  while (distance > 0) {
    if (distance % 2 !== 0) {
      energy++;
      distance--;
    } else {
      distance /= 2;
    }
  }
  return energy;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 43.3MB)
// 테스트 2 〉	통과 (0.06ms, 43.4MB)
// 테스트 3 〉	통과 (0.07ms, 43.7MB)
// 테스트 4 〉	통과 (0.10ms, 43.6MB)
// 테스트 5 〉	통과 (0.07ms, 43.3MB)
// 테스트 6 〉	통과 (0.06ms, 43.6MB)
// 테스트 7 〉	통과 (0.06ms, 43.4MB)
// 테스트 8 〉	통과 (0.06ms, 43.7MB)
// 테스트 9 〉	통과 (0.07ms, 43.3MB)
// 테스트 10 〉	통과 (0.07ms, 43.4MB)
// 테스트 11 〉	통과 (0.06ms, 43.2MB)
// 테스트 12 〉	통과 (0.07ms, 43.1MB)
// 테스트 13 〉	통과 (0.06ms, 43.3MB)
// 테스트 14 〉	통과 (0.06ms, 43.4MB)
// 테스트 15 〉	통과 (0.06ms, 43.5MB)
// 테스트 16 〉	통과 (0.05ms, 43.8MB)
// 테스트 17 〉	통과 (0.06ms, 43.4MB)
// 테스트 18 〉	통과 (0.06ms, 43.6MB)
// 효율성  테스트
// 테스트 1 〉	통과 (0.10ms, 43.7MB)
// 테스트 2 〉	통과 (0.06ms, 42.6MB)
// 테스트 3 〉	통과 (0.09ms, 43.8MB)
// 테스트 4 〉	통과 (0.08ms, 42.7MB)
// 테스트 5 〉	통과 (0.07ms, 44MB)
// 테스트 6 〉	통과 (0.07ms, 43.6MB)
// 테스트 7 〉	통과 (0.07ms, 44MB)
// 테스트 8 〉	통과 (0.07ms, 43.9MB)
// 테스트 9 〉	통과 (0.10ms, 44.1MB)
// 테스트 10 〉	통과 (0.07ms, 43.7MB)
// 채점 결과
// 정확성: 60.0
// 효율성: 40.0
// 합계: 100.0 / 100.0
