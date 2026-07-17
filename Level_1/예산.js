//오름차순 정렬해서, 요청예산 적은 팀부터 금액 주고, budget < d[i] 이면 종료.

// 또다시 sort의 함정에 빠졌다!!!!
// 숫자 정렬할때는 10이 2보다 1이앞에 있어서 그냥 sort()하면 10 2  순으로 배치될수있다
// 그러니!!!! 숫자 정렬할때는 무조건, num.sort((a,b) => a-b) 또는 num.sort((a,b) => b-a)
// 외워!! 무조건 숫자 정렬나오면, 무조건 이대로만!!!
// function solution(d, budget) {
//     d.sort();
//     let result = 0;
//     for (let i = 0; i < d.length; i++){
//         if (d[i] <= budget){
//             budget -= d[i];
//             result++;
//         }
//     }
//     return result;
// }

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i] <= budget) {
      budget -= d[i];
      result++;
    }
  }
  return result;
}
