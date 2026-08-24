//첫 성공
function solution(arr, divisor) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }
  if (result.length === 0) result.push(-1);
  return result.sort((a, b) => a - b);
}

//더 간단하게
function solution(arr, divisor) {
  const answer = arr.filter((num) => num % divisor === 0);

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// filter사용과 숫자정렬은 sort사용을((a,b) => a-b) 요렇게
