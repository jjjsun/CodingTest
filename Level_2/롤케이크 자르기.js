// //첫 시도 → test 코드는 성공. but, 효율성에서 실패
// function solution(topping) {
//     let result = 0;
//     const len = topping.length;
//     for (let i = 1; i < len; i++){
//         let leftCheck = new Set();
//         let rightCheck = new Set();
//         const left = topping.slice(0,i);
//         const right = topping.slice(i);

//         for (const num of left){
//             leftCheck.add(num);
//         }
//         for (const num of right){
//             rightCheck.add(num);
//         }
//         if (leftCheck.size === rightCheck.size) {
//             result++;
//         }
//     }
//     return result;
// }

//두번째 시도 -> test 코드 성공. but, 효율성에서 또다시 실패...
// function solution(topping) {
//     let result = 0;
//     const len = topping.length;
//     for (let i = 1; i < len; i++){
//         let leftCheck = new Set(topping.slice(0,i));
//         let rightCheck = new Set(topping.slice(i));
//         if (leftCheck.size === rightCheck.size){
//             result++;
//         }
//     }
//     return result;
// }

//세번째 시도 -> 성공
function solution(topping) {
  let result = 0;
  const len = topping.length;

  let right = {};
  for (const num of topping) {
    right[num] = (right[num] || 0) + 1;
  }
  let rightKinds = Object.keys(right).length;

  let left = new Set();
  for (let i = 0; i < len; i++) {
    left.add(topping[i]);
    right[topping[i]]--;
    if (right[topping[i]] == 0) {
      rightKinds--;
    }
    if (left.size === rightKinds) {
      result++;
    }
  }
  return result;
}

//new Set(배열): 중복 제거된 Set 생성
//Set.add(x): Set에 값추가 (push안됨)
//Set.has(x): Set에 값이 있는지
//Set.size: Set의 원소 개수(.length아님)
//Object.keys(obj): 객체의 키들을 배열로 반환함.
