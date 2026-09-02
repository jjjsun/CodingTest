//첫 시도 -> 실패
// function solution(a, b, n) {
//     let result = 0;
//     let newBottle = n;
//     while(newBottle >= a){
//         result += (n / a) * b;
//         newBottle = (n % a) + result;
//     }
//     return result;
// }

function solution(a, b, n) {
  let result = 0;
  while (n >= a) {
    const newBottle = Math.floor(n / a) * b;
    result += newBottle;
    n = (n % a) + newBottle;
  }
  return result;
}
