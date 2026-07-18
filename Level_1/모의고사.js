// 첫번째 도전 - 틀린방식. 맞지만, 복잡한 수작업이고, 시간초과 될 가능성 있음.
// function solution(answers) {
//     let result = [];
//     let p1Count = 0;
//     let p2Count = 0;
//     let p3Count = 0;

//     //1번 수포자 완전탐색
//     for (let i = 0; i < answers.length; i++){
//         if (i % 5 == 1 && answers[i] == 2){
//             p1Count++;
//         }
//         else if (i % 5 == 2 && answers[i] == 3){
//             p1Count++;
//         }
//         else if (i % 5 == 3 && answers[i] == 4){
//             p1Count++;
//         }
//         else if (i % 5 == 4 && answers[i] == 5){
//             p1Count++;
//         }
//         else {
//             if (answers[i] == 1){
//                 p1Count++;
//             }
//         }
//     }
//     //2번 수포자
//     for (let i = 0; i < answers.length; i++) {
//         if (i % 2 == 0 && answers[i] == 2){
//             p2Count++;
//         }
//         else if (i % 8 == 1 && answers[i] == 1){
//             p2Count++;
//         }
//         else if (i % 8 == 3 && answers[i] == 3){
//             p2Count++;
//         }
//         else if (i % 8 == 5 && answers[i] == 4){
//             p2Count++;
//         }
//         else if (i % 8 == 7 && answers[i] == 5){
//             p2Count++;
//         }
//     }
//     //3번 수포자
//     for (let i = 0; i < answers.length; i++) {
//         if (i % 10 == 0 || i % 10 == 1){
//             if (answers[i] == 3){
//                 p3Count++;
//             }
//         }
//         else if (i % 10 == 2 || i % 10 == 3){
//             if (answers[i] == 1){
//                 p3Count++;
//             }
//         }
//         else if (i % 10 == 4 || i % 10 == 5){
//             if (answers[i] == 2){
//                 p3Count++;
//             }
//         }
//         else if (i % 10 == 6 || i % 10 == 7){
//             if (answers[i] == 4){
//                 p3Count++;
//             }
//         }
//         else if (i % 10 == 8 || i % 10 == 9){
//             if (answers[i] == 5){
//                 p3Count++;
//             }
//         }
//     }
//     if (p1Count > p2Count){
//         if (p1Count > p3Count){
//             result.push(1);
//         }
//         else if (p1Count == p3Count){
//             result.push(1);
//             result.push(3);
//         }
//         else {
//             result.push(3);
//         }
//     }
//     else if (p1Count < p2Count) {
//         if (p2Count > p3Count){
//             result.push(2);
//         }
//         else if (p2Count == p3Count){
//             result.push(2);
//             result.push(3);
//         }
//         else {
//             result.push(3);
//         };
//     }
//     else {
//         if (p2Count == p3Count){
//             result.push(1);
//             result.push(2);
//             result.push(3);
//         }
//         else if (p2Count < p3Count){
//             result.push(3);
//         }
//         else {
//             result.push(1);
//             result.push(2);
//         }
//     }

//     return result;

// }

function solution(answers) {
  let result = [];

  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) scores[0]++;
    if (answers[i] === p2[i % p2.length]) scores[1]++;
    if (answers[i] === p3[i % p3.length]) scores[2]++;
  }
  const maxScore = Math.max(...scores);

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      result.push(i + 1);
    }
  }
  return result;
}
