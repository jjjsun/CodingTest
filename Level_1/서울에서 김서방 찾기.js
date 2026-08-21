//첫 성공
// function solution(seoul) {
//     for(let i = 0; i < seoul.length; i++){
//         if (seoul[i] == "Kim"){
//             return `김서방은 ${i}에 있다`
//         }
//     }
// }

//더 간단하게
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
//seoul.indexOf('Kim') : 배열에서 "Kim"이 위치한 인덱스 번호를 바로 반환
