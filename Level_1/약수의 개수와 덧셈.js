//첫 성공
// function solution(left, right) {
//     let result = 0;
//     for (let i = left; i <= right; i++){
//         let count = 1;
//         for (let j = 1; j < i; j++){
//             if (i % j === 0) count++;
//         }
//         if (count % 2 === 0) result += i;
//         else result -= i;
//     }
//     return result;
// }

//더 간단하게 (Math.sqrt 제곱근이 정수인지 판별하여 더 깔끔하게)
function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    result += Number.isInteger(Math.sqrt(i)) ? -i : i;
  }
  return result;
}
