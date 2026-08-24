//어려움. 다시 풀기
//정규표현식 test()활용
function solution(s) {
  return /^\d{4}$|^\d{6}$/.test(s);
}
// ^ : 문자열 시작
// \d : 숫자(0~9)
// {4} : 정확히 4번 반복
// $ : 문자열 끝
// | : 또는
// 즉, 문자열 시작. 숫자로만 4글자 인지 또는 숫자로만 6글자인지. 문자열 끝. s를 text해보삼

//배열 메서드 every()활용
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  return s.split("").every((char) => char >= "0" && char <= "9");
}
//arr.every(): 배열안에 모든 요소가 만족해야지만 true를 반환하는 메서드
