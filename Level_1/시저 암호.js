//가장 직관적으로 풀기. 대문자/소문자 다 적어놓고 includes로 찾기
function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  return s
    .split("")
    .map((char) => {
      if (char === " ") return " ";

      if (upper.includes(char)) {
        const nextIdx = (upper.indexOf(char) + n) % 26;
        return upper[nextIdx];
      }
      if (lower.includes(char)) {
        const nextIdx = (lower.indexOf(char) + n) % 26;
        return lower[nextIdx];
      }
    })
    .join("");
}

//아스키코드 메서드 활용
function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char === " ") return " ";

      const code = char.charCodeAt(0);

      //대문자는 65 ~ 90
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + n) % 26) + 65);
      }

      //소문자는 97 ~ 122
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
    })
    .join("");
}
