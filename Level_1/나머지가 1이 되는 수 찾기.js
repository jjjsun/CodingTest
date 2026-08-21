//첫 성공
// function solution(n) {
//     for(let i = 2 ; i < n; i++){
//         if (n % i == 1){
//             return i;
//         }
//     }
// }

//더 심플하게
function solution(n) {
  let x = 2;
  while (n % x !== 1) {
    x++;
  }
  return x;
}
