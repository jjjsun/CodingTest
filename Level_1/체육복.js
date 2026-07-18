//학생번호랑 -1한거랑 해서 index 값이 너무 헷갈렸다..

function solution(n, lost, reserve) {
  let student = [];
  for (let i = 1; i <= n; i++) {
    student[i] = 1;
  }
  for (let i = 0; i < reserve.length; i++) {
    student[reserve[i]]++;
  }
  for (let i = 0; i < lost.length; i++) {
    student[lost[i]]--;
  }
  for (let i = 1; i <= n; i++) {
    if (student[i] === 0) {
      if (student[i - 1] === 2) {
        student[i - 1]--;
        student[i]++;
      } else if (student[i + 1] === 2) {
        student[i + 1]--;
        student[i]++;
      }
    }
  }
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (student[i] >= 1) {
      result++;
    }
  }
  return result;
}
