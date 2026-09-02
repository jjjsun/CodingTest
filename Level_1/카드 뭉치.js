function solution(card1, card2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === card1[0]) card1.shift();
    else if (goal[i] === card2[0]) card2.shift();
    else return "No";
  }
  return "Yes";
}

//다시 한번 정리
//.shift(): 배열 맨앞 제거
//.unshift(): 배열 맨앞에 추가
