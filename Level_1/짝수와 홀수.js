//첫 성공
// function solution(num){
//     return num % 2 === 0 ? "Even" : "Odd"
// }

//Truthy/Falsy 특성 사용
// function solution(num) {
//     return num % 2 ? "Odd" : "Even";
// }

//비트 and 연산자 사용
//이진수 맨 뒷자리가 1이면 홀수, 0이면 짝수인점 활용
function solution(num) {
  return num & 1 ? "Odd" : "Even";
}
