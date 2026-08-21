function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      sum += absolutes[i];
    } else {
      sum -= absolutes[i];
    }
  }
  return sum;
}

//더 간단하게
function solution(absolutes, signs) {
  return absolutes.reduce((arr, cur, i) => arr + (signs[i] ? cur : -cur), 0);
}
