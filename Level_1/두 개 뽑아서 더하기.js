function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  arr.sort((a, b) => a - b);
  let result = [];
  result.push(arr[0]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      result.push(arr[i + 1]);
    }
  }
  return result;
}
