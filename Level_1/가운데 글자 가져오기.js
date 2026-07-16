// odd: /2,
// even: /2 & /2-1
// 홀수 2나누기해서 정수로 값 갖고 싶으면 Math.floor로 감싸주기

function solution(s) {
  let answer = "";
  let numLocation = s.length / 2;
  if (s.length % 2 == 0) {
    answer += s[numLocation - 1];
    answer += s[numLocation];
  } else {
    answer += s[Math.floor(numLocation)];
  }
  return answer;
}
