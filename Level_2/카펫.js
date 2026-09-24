//첫시도 -> 실패. 일부 약수인 테스트코드만 맞았기때문에 아예 틀린 접근법임
// function solution(brown, yellow) {
//     let numArr = [];
//     let result = [];
//     for (let i = 1; i <= brown+yellow; i++){
//         if ((brown+yellow) % i === 0){
//             numArr.push(i);
//         }
//     }
//     if (numArr.length % 2 !== 0){
//         result.push(numArr[Math.floor(numArr.length / 2)]);
//         result.push(numArr[Math.floor(numArr.length / 2)]);
//     }
//     else {
//         result.push(numArr[numArr.length / 2]);
//         result.push(numArr[numArr.length / 2 - 1]);
//     }
//     return result;
// }
// 1 2 3 4 6 8 12 16 24 48
// 10 /2 와 10/2+1

// 1 2 4 8 16
// 5/2 +1 두개

// //올바른 접근법
function solution(brown, yellow) {
  const total = brown + yellow;

  // 세로는 최소 3 이상, 가로보다 작거나 같으므로 √total까지만 검색
  for (let h = 3; h <= Math.sqrt(total); h++) {
    if (total % h === 0) {
      const w = total / h;

      if ((w - 2) * (h - 2) === yellow) {
        return [w, h];
      }
    }
  }
}
