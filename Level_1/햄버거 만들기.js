//문제 정답은 나오지만, 시간 초과
// function solution(ingredient) {
//     let start = 0;
//     let result = 0;
//     while (true){
//         let find = 0;
//         for (let i = 0; i < ingredient.length; i++){
//             if (ingredient[i] == 1 && ingredient[i+1] == 2 && ingredient[i+2] == 3 && ingredient[i+3] == 1){
//                 ingredient.splice(i, 4);
//                 result++;
//                 find += 1;
//             }
//         }
//         if (start == find){
//             break;
//         }
//     }
//     return result;
// }
//인덱스 버그 누락. 4개지우고, 당겨온거 원소 한번에 점검못함. 즉, 비효율적.

//문제 더 간단하게 풀었지만, 여전히 시간 초과
// function solution(ingredient) {
//     let result = 0;
//     for (let i = 0; i < ingredient.length; i++){
//         if (ingredient[i] === 1 && ingredient[i+1] === 2 && ingredient[i+2] === 3 && ingredient[i+3] === 1){
//             ingredient.splice(i, 4);
//             result++;
//             i -= 4;
//         }
//     }
//     return result;
// }
//splice로 원소 지울때마다 O(N)만큼 비용이 듬.
//그리고 입력(1,000,000)대비 O(N^2)의 시간복잡도 발생

//해결 방법: stack 활용
//배열을 직접 자르지 않고, 빈 배열(stack)에 재료 하나씩 push하면서 끝에 원소 4개 확인하고 pop으로 4개 제거
function solution(ingredient) {
  let count = 0;
  const stack = [];
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.length >= 4) {
      const len = stack.length;
      if (
        stack[len - 1] === 1 &&
        stack[len - 2] === 3 &&
        stack[len - 3] === 2 &&
        stack[len - 4] === 1
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  }
  return count;
}
