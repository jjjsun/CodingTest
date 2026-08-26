//첫 시도  -> 실패
// function solution(number){
//     let result = 0;
//     number.sort((a,b) => a - b);
//     for (let i = 0; i < number.length-2; i++){
//         if (number[i] + number[i+1] + number[i+2] === 0){
//             result++;
//         }
//     }
//     return result;
// }

//삼중 for문 사용 (완전탐색)
function solution(number) {
  let result = 0;
  const len = number.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          result++;
        }
      }
    }
  }
  return result;
}
