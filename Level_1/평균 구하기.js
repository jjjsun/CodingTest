//어제 학습한 reduce 제대로 활용함!!
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
