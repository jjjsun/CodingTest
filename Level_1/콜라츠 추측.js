//첫 성공
// function solution(num){
//     let result = 0;
//     if (num === 1) {
//         return 0;
//     }
//     while(num !== 1){
//         num = num % 2 == 0 ? num / 2 : num * 3 + 1;
//         result++;
//     }
//     if (result >= 500) {
//         return -1;
//     }
//     return result;
// }

//더 간단하게
function solution(num) {
  let result = 0;
  while (num !== 1 && result < 500) {
    num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    result++;
  }

  return num === 1 ? result : -1;
}
