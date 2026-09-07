//첫 시도 -> 테스트코드는 성공. but 몇개 시간초과
// split하고 Number씌우고
// .sort((a,b) => b-a)로 내림차순 나열하고, join후 문자열로 바로출력
// function solution(x, y){
//     let numx = x.split("");
//     let numy = y.split("");
//     let numarr = [];
//     for(let i = 0; i < numx.length; i++) {
//         for(let j = 0; j < numy.length; j++){
//             if (numx[i] == numy[j]){
//                 numarr.push(Number(numx[i]));
//                 numy.splice(j,1);
//                 break;
//             }
//         }
//     }
//     let zeroCount = 0;
//     for (let i = 0; i < numarr.length; i++){
//         if (numarr[i] == 0){
//             zeroCount++;
//         }
//     }
//     if (numarr.length > 0 && numarr.length == zeroCount) {
//         numarr.splice(0, numarr.length);
//         numarr.push("0");
//     }

//     return numarr.length === 0 ? "-1" : numarr.sort((a,b) => b-a).join("");
// }
// y의 길이 만큼돌고, 그다음에 또 numarr만큼 도니까, 시간초과가 뜸.
// 이중 for문 + splice조합은 시간복잡도가 O(N \times M^2)여서, 시간초과가 발생하는거다.

//숫자가 0-9까지 10종류니까, 각각 몇번나왔는지 x,y에서 각각 카운트하고, 둘중 적은 카운트를 뽑아서, numarr에 넣고
// numarr에 넣을때, 큰수만들기니까, 큰수부터 push하고.
// 빈배열일때는 겹치는게 없단느거니까 0리턴
// 큰수부터 앞에 있는데, 맨앞이 0이라는건 그뒤가 다 0이니까. 0리턴

function solution(x, y) {
  let answer = "";

  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);

  for (const char of x) countX[char]++;
  for (const char of y) countY[char]++;

  for (let i = 9; i >= 0; i--) {
    const commonCount = Math.min(countX[i], countY[i]);
    answer += String(i).repeat(commonCount);
  }

  if (answer == "") return "-1";
  if (answer[0] == "0") return "0";

  return answer;
}
