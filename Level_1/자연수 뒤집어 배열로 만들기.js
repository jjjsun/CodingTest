function solution(n) {
  return String(n).split("").reverse().map(Number);
}

//map(): 배열의 모든 원소 하나씩 꺼내서 원하는 값으로 변환하고, 그결과로 동일한 길이의 새로운 배열로 반환
// ex.
// const number = [1, 3, 5, 7];
// const double = number.map(num => num * 2);
// console.log(doubled);  // [2, 6, 10 , 14];
