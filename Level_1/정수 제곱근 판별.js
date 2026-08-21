// function solution(n) {
//     const x = Math.sqrt(n);

//     if (Number.isInteger(x)) {
//         return (x+1) ** 2;
//     }
//     return -1;
// }

//Math.sqrt(n): n의 제곱근 구하는 제곱근 함수
//Math.sqrt(121) -> 11

//Number.isInteger(x): 값이 정수인지(true) 소수점있는 실수인지(false) 판별

//더 간단 버전
function solution(n) {
  const x = Math.sqrt(n);
  return Number.isInteger(x) ? (x + 1) ** 2 : -1;
}
