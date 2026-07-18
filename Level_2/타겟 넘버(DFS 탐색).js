function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    // 종료조건
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    //더하는 경우
    dfs(index + 1, sum + numbers[index]);
    //빼는 경우
    dfs(index + 1, sum - numbers[index]);
  }
  dfs(0, 0);

  return answer;
}

//이 문제는 dfs에 대해서 전혀 감을 못잡아서 답을 찾고 이해하는 방향으로 진행함.
//다시한번 직접 구현하는거 해봐야함.
