// //최소공배수 = 두 수의 곱 / 최대공약수
// function solution(arr) {
//     arr.sort((a,b) => a - b);
//     const len = arr.length;

//     let result = arr[0];

//     for (let i = 1; i < len; i++){
//         const num1 = result;   //이전까지 계산된 최소공배수
//         const num2 = arr[i];   //이번에 새로 합칠 숫자
//         const twoMultiple = num1 * num2;

//         let arr1 = [];
//         let arr2 = [];

//         //num1의 약수구하기
//         for (let j = 1; j <= num1; j++){
//             if (num1 % j === 0){
//                 arr1.push(j);
//             }
//         }

//         //num2의 약수구하기
//         for (let k = 1; k <= num2; k++){
//             if (num2 % k === 0){
//                 arr2.push(k);
//             }
//         }
//         arr1.sort((a,b) => b - a);
//         arr2.sort((a,b) => b - a);

//         let MaximumCommonDenial = 1;
//         for (const num of arr2){
//             if (arr1.includes(num)){
//                 MaximumCommonDenial = num;
//                 break;   //내림차순이라 겹치는 수가 최대공약수임!
//             }
//         }

//         result = twoMultiple / MaximumCommonDenial;
//     }
//     return result;
// }
// 정확성  테스트
// 테스트 1 〉	통과 (0.17ms, 43.4MB)
// 테스트 2 〉	통과 (2.32ms, 41.7MB)
// 테스트 3 〉	통과 (2.80ms, 41.8MB)
// 테스트 4 〉	통과 (2.35ms, 41.8MB)
// 테스트 5 〉	통과 (0.16ms, 43.3MB)
// 테스트 6 〉	통과 (20.01ms, 49.8MB)
// 테스트 7 〉	통과 (3.56ms, 42.2MB)
// 테스트 8 〉	통과 (2.05ms, 41.9MB)
// 테스트 9 〉	통과 (1.87ms, 43.3MB)
// 테스트 10 〉	통과 (43.69ms, 50.1MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

//더 간단하게 (유클리드 호제법 원리 사용)
function solution(arr) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return arr.reduce((acc, cur) => lcm(acc, cur));
}
