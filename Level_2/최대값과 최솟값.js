// function solution(s) {
//     let numArr = s.split(" ");

//     const maxNum = Math.max(...numArr);
//     const minNum = Math.min(...numArr);

//     const result = minNum + " " + maxNum;
//     return result;
// }

function solution(s) {
  let numArr = s.split(" ");

  const maxNum = Math.max(...numArr);
  const minNum = Math.min(...numArr);

  return `${minNum} ${maxNum}`;
}

//헷갈리는 부분
// split후에 나오는 값의 타입은?
// 문자열이 아니라 배열.
// ex.
// let s = "1 2 3 4";
// let numArr = s.split(" ");

// console.log(numArr);
// => ["1", "2", "3", "4"];

// console.log(Array.isArray(numArr)); // true (배열)
// console.log(typeof numArr); // "object" (객체)
// console.log(typeof numArr[0]); // "string" (알맹이는 문자열)
