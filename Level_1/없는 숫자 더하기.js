function solution(numbers) {
  let answer = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
  for (let i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }
  return answer;
}
