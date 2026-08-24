//첫 성공
// function solution(price, money, count) {
//     let pay = 0;
//     for(let i = 1; i <= count; i++){
//         pay += price * i;
//     }
//     return (pay-money) <= 0 ? 0 : pay-money;
// }

//더 간단하게 (등차수열 합공식 + Math.max 사용)
function solution(price, money, count) {
  const total = (price * count * (count + 1)) / 2;
  return Math.max(0, total - money);
}
