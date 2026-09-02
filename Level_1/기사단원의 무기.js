//첫 시도 -> 성공
function solution(number, limit, power) {
  let result = 0;
  let countArr = new Array(number).fill(0);
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        countArr[i - 1] += 1;
      }
    }
  }
  for (let i = 0; i < number; i++) {
    if (countArr[i] <= limit) {
      result += countArr[i];
    } else {
      result += power;
    }
  }
  return result;
}

//더 간단하게 해볼까
function solution(number, limit, power) {
  let result = 0;
  let countArr = new Array(number).fill(0);
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        countArr[i - 1] += 1;
      }
    }
  }
  return countArr.reduce((acc, cur) => {
    return acc + (cur <= limit ? cur : power);
  }, 0);
}
//reduce활용해서, acc(누적값). cur(현재값) 해서, 돌면되네!
//그리고 삼항연산자 사용해서 limit보다 cur값이 크면, power로 더하고, 아니면, 원래 cur값으로 더하고. 처음 시작값은 0으로해서.

//배열 선언없이 바로 누적하기
function solution(number, limit, power) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    result += count <= limit ? count : power;
  }
  return result;
}
//그러네. 그냥 배열따로 선언안하고 바로 result에 값 더해도 되네.
