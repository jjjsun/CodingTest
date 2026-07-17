//=과 ==의 차이로 첫시도에서 실패한 문제.... =과 ==차이 확실히 알았습니다...ㅠㅠ
function solution(s) {
  let char = s.split("");
  let count = 0;
  for (let i = 0; i < char.length; i++) {
    if (char[i] == "(") {
      count++;
    } else {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  if (count == 0) {
    return true;
  } else {
    return false;
  }
}
