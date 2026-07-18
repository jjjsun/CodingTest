// 조금 많이 어려웠다..복습 필요해..
//ceil 소수점 올림 기능 사용해서 2.3일걸리는거 3일로 계산! Math.ceil()
function solution(progresses, speeds) {
  const answer = [];

  const days = [];
  for (let i = 0; i < progresses.length; i++) {
    const remainingProgress = 100 - progresses[i];
    const requiredDays = Math.ceil(remainingProgress / speeds[i]);
    days.push(requiredDays);
  }

  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      maxDay = days[i];
      count = 1;
    }
  }
  answer.push(count);

  return answer;
}
