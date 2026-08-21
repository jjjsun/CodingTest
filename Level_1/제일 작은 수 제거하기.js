//첫 성공
// function solution(arr) {
//     if (arr.length <= 1) return [-1];

//     const min = Math.min(...arr);
//     const minIndex = arr.indexOf(min);
//     arr.splice(minIndex, 1);

//     return arr;
// }
//arr.splice(시작위치, 개수): 해당 인덱스부터 원하는 개수만큼 원소 삭제

//다른방식 - filter()사용
function solution(arr) {
  const min = Math.min(...arr);
  return arr.length <= 1 ? [-1] : arr.filter((v) => v !== min);
}
