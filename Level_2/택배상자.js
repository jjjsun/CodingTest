//보조 컨테이너는 스택.FILO
// [4,3,1,2,5]
// 21435
// 431
function solution(order) {
  //cursor: 메인 벨트에서 나올 상자번호
  let cursor = 1;
  const stack = [];
  let result = 0;
  for (const target of order) {
    //메인 벨트에서 target나올떄 까지 보조 벨트에 쌓아두기
    while (cursor <= target) {
      stack.push(cursor);
      cursor++;
    }

    //보조 벨트 맨 위가 target이면 꺼내서 싣기
    if (stack.at(-1) === target) {
      stack.pop();
      result++;
    } else {
      break; // 둘 다 안 되면 중단
    }
  }

  return result;
}

//.at(-1): 배열의 마지막 원소 뽑기(참고로 stack[stack.length - 1]이랑 같은 문법임)
