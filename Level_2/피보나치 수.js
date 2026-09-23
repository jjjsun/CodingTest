//첫 시도 -> 실패.
//JS의 숫자 표현 한계로 값이 깨지거나 Infinity 발생.
//원인: Number.MAX_SAFE_INTEGER 초과
// function solution(n){
//     let arr = [0,1];
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i-1] + arr[i-2]);
//     }
//     return arr[n] % 1234567;
// }

//해결. 모듈러 연산(나머지 연산) 성질 이요
// 피보나치 수를 다 구한 뒤 마지막에 나눈는 것과 매 덧셈마다 123456로 나눈 나머지들 저장한 결과는 같음
// function solution(n){
//     let arr = [0, 1];
//     for (let i = 2; i <= n; i++){
//         //더할 때마다 나머지를 구해서 배열에 저장
//         arr.push((arr[i-1] + arr[i-2]) % 1234567);
//     }
//     return arr[n];
// }
//성공

//더 간단
//메모리 공간 최적화(O(1))
//100,000개의 배열 공간을 유지할 필요 없이 직전 두 값만 변수 두 개로 갱신하면 메모리 아낌.
function solution(n) {
  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const next = (a + b) % 1234567;
    a = b;
    b = next;
  }
  return b;
}
