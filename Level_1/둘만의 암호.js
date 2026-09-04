function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((char) => !skip.includes(char));

  const word = s.split("");
  for (let i = 0; i < word.length; i++) {
    const currentIdx = alphabet.indexOf(word[i]);
    const nextIdx = (currentIdx + index) % alphabet.length;
    word[i] = alphabet[nextIdx];
  }
  return word.join("");
}

//splice(a,1)  a부터 1개 삭제
//splice써서 한글자씩 빼내는 방법 써도되고,
//지금 코드처럼 filter로 skip에 포함된 문자는 false로 버리기 방법도 가능!
