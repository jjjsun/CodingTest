//첫 성공
// function solution(x, n){
//     let arr = [];
//     for (let i = 1; i <= n; i++){
//         arr.push(x * i);
//     }
//     return arr;
// }

//Array사용1
// function solution(x, n){
//     return Array.from({length: n}, (_,i) => (i+1) * x);
// }
//(_,i) : 첫번째 인자는 안쓰니까 _로 생략하고, 0부터 시작하는 인덱스 i를 가져옴

//Array사용2
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
//.map((v,i) => (i + 1) * v) : 각 자리에 인덱스 +1을 곱해서 최종 배수 배열 완성
