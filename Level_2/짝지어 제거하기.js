//첫시도 -> 실패.
//1. 인덱스 누락 버그 i--가 아닌 i -=2로 해야함
//2. O(N^2)시간 복잡도. 시간초과
//재열의 중간 원소를 지우는 splice()는 빈자리 채우기 위해서 뒤에 남은 원소 다 당겨오는 O(N)연산임.
// function solution(s){
//     let word = s.split("");
//     for (let i = 0; i < word.length; i++){
//         if (word[i] === word[i+1]){
//             word.splice(i,2);
//             i--;
//         }
//     }
//     if (word.length === 0){
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }

//stack 활용
function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    //stack 맨위 글자와 현재 글자가 같으면 stack맨위 제거
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      //다르면 stack 쌓기
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}
