function solution(s) {
  let result = [];
  let word = s.split("");
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let count = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (word[j] === char) {
        result.push(i - j);
        count++;
        break;
      }
    }
    if (count === 0) result.push(-1);
  }
  return result;
}
