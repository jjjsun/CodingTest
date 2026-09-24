function solution(k, tangerine) {
  //1. 크기별 수량 세기 (객체 활용)
  const counts = {};
  for (const size of tangerine) {
    counts[size] = (counts[size] || 0) + 1;
  }

  //2. 개수만 뽑아서 내림차순
  const sortedCounts = Object.values(counts).sort((a, b) => b - a);

  //3. 가장 수량이 많은 귤부터 담기
  let kinds = 0;
  for (const count of sortedCounts) {
    k -= count;
    kinds++;

    if (k <= 0) break;
  }
  return kinds;
}
