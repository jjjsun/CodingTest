// function solution(citatitions) {
//     let result = 0;
//     citatitions.sort((a,b) => a-b);
//     for (let i = 0; i < citatitions.length; i++){
//         let h = i;
//         let count = 1;
//         let another = 0;

//         for (let j = 0; j < citatitions.length; j++){
//             if (citatitions[i] <= citatitions[j]){
//                 count += 1;
//             }
//             else {
//                 another += 1;
//             }
//         }
//         if (another <= h && h <= count && h >= result){
//             result = h;
//         }
//     }
//     return result;
// }

// function solution(citations) {
//     citations.sort((a,b) => a - b)
//     let max = 0;
//     for (let i = 0; i < citations.length; i++){
//         let up = 0;
//         let down = 0;
//         for (let j = 0 ; j < citations.length; j++){
//             if (citations[j] >= citations[i]){
//                 up++;
//             } else {
//                 down++;
//             }
//         }
//         if (up>= citations[i] && down <= citations[i]){
//             if (max <= citations[i]){
//                 max = citations[i];
//             }
//         }
//     }
//     return max;

// }

function solution(citations) {
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) {
      return i;
    }
  }
  //만약 모든 논문 인용횟수가 전체 논문 편수보다 크면, 전체 논문 편수가 정답임
  return citations.length;
}

//여기도 굉장히 복잡했는데, 한줄로 나열하고, 한번만 더 생각하면 답나오네...
//복잡하게 생각하지말고 어떻게 하면 간단하게 풀까를 고민해보자.
