function solution(k, dungeons) {
  let maxCount = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(currentK, count) {
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      //최소 필요 피로도, 소모 피로도
      const [minRequire, consume] = dungeons[i];

      if (!visited[i] && currentK >= minRequire) {
        visited[i] = true;
        dfs(currentK - consume, count + 1);
        visited[i] = false;
      }
    }
  }
  dfs(k, 0);

  return maxCount;
}

//여기도 dfs에 대해서 전혀 감을 못잡아서 답을 찾고 이해하는 방향으로 진행함.
//다시한번 직접 구현하는거 해봐야함.
//dfs 감잡는 시간 필요할듯
