function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      answer.push(arr[i + 1]);
    }
  }
  return answer;
}

//26-07-17 복습용
//조금 더 효율적인 방법 활용.
//arr 앞뒤를 비교하는것이 아니라, answer배열에서 값이 없으면 push하는 형식
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
