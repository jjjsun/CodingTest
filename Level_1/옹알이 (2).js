function solution(babbling) {
  let count = 0;
  const canSpeak = ["aya", "ye", "woo", "ma"];
  for (let word of babbling) {
    if (
      word.includes("ayaaya") ||
      word.includes("yeye") ||
      word.includes("woowoo") ||
      word.includes("mama")
    ) {
      continue;
    }

    for (const sound of canSpeak) {
      word = word.replaceAll(sound, " ");
    }

    if (word.replaceAll(" ", "").length === 0) {
      count++;
    }
  }
  return count;
}
//2번이상쓰인건 즉시 건너뛰기해서 안보고 넘어가도록 하고
//공백으로 대체해서 엉뚱한 글자들이 자석처럼 새로운 단어로 둔갑하는 버그가 나타나지 않도록.
