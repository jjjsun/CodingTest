function solution(s) {
  let isUpper = true;
  let result = "";
  for (const str of s) {
    if (str === " ") {
      result += " ";
      isUpper = true;
    } else {
      if (isUpper) {
        result += str.toUpperCase();
        isUpper = false;
      } else {
        result += str.toLowerCase();
      }
    }
  }
  return result;
}
