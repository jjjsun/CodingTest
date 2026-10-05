//정확성 test는 통과. but 효율성 테스트 실패 (phone_book 길이가 최대 1,000,000인데 삼중for문으로 시간초과뜸)
// function solution(phone_book) {
//     const len = phone_book.length;

//     let result = [];
//     for (let i = 0; i < len; i++){
//         result.push(phone_book[i].split(""));
//     }
//     for (let i = 0; i < len-1; i++){
//         let num1 = result[i];
//         for (let j = i+1; j < len; j++){
//             let CheckBoolean = true;
//             let num2 = result[j];
//             if (num1[0] === num2[0]){
//                 CheckBoolean = false;
//                 for (let k = 1; k < Math.min(num2.length, num1.length); k++){
//                     if (num1[k] !== num2[k]){
//                         CheckBoolean = true;
//                     }
//                 }
//             }
//             if (!CheckBoolean) {
//                 return false;
//                 break;
//             }
//         }
//     }
//     return true;
// }

//효율성 test통과를 위한
//사전순으로 정렬해서 바로 옆만 비교
function solution(phone_book) {
  const len = phone_book.length;
  //사전순으로 정렬해서 추가해서 한단어를 한바퀴돌면서 다 비교하지 않고,
  //옆에 이웃이랑만 비교하도록
  phone_book.sort();
  for (let i = 0; i < len - 1; i++) {
    let num1 = phone_book[i];
    let num2 = phone_book[i + 1];
    let CheckBoolean = true;
    if (num2.startsWith(num1)) {
      return false;
      break;
    }
  }
  return true;
}

// .startsWith(): 접두어 여부 바로 확인 가능한 문법 메서드
// "1195524421".startsWith("119")  //true
// "97674223".startsWith("119")  //false
