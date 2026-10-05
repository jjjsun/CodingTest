//첫 시도 → 일부test코드 통과. but, 더효율적인 경로를 놓침
// function solution(x, y, n) {
//     let result = 0;
//     while (y >= x){
//         let nonCheck = 0;
//         if (y == x){
//             break;
//         }
//         if ((y / 2) % x == 0){
//             result++;
//             y /= 2;
//             nonCheck++;
//         }
//         if ((y / 3) % x == 0){
//             result++;
//             y /= 3;
//             nonCheck++;
//         }
//         if ((y - n) % x == 0){
//             result++;
//             y -= n;
//             nonCheck++;
//         }
//         if (nonCheck == 0){
//             break;
//         }
//     }
//     return (result !== 0 ? result : -1);
// }

function solution(x, y, n) {
  const queue = [[x, 0]]; //[현재값, 연산횟수]
  const visited = new Set([x]); //중복안됨

  let idx = 0;
  while (idx < queue.length) {
    const [cur, count] = queue[idx++];
    //도착하면 바로 반환 (BFS니까 이게 최소 횟수)
    if (cur === y) return count;

    // 3가지 연산 적용
    for (const next of [cur + n, cur * 2, cur * 3]) {
      //y 이하이고, 아직 방문안한 숫자만 큐에 넣기
      if (next <= y && !visited.has(next)) {
        visited.add(next);
        queue.push([next, count + 1]);
      }
    }
  }
  //큐가 비었는데 y에 도달 못했을때
  return -1;
}
