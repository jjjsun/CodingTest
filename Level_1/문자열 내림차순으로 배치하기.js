//문자 나와서 문자열로 해결하는 문제다? -> 그러면, split, join 기억하기.
//join과 split으로 문자를 문자열로 나누고 조립하기! (배열)
//그리고 오름차순정렬 = sort()
//내림차순 정렬 = reverse()

function solution(s) {
  const arr = s.split("");
  //정렬한번 한뒤에 역순으로 정렬
  arr.sort();
  arr.reverse();
  const result = s.join("");
  return result;
}

//더 간단하게
function solution(s) {
  return s.split("").sort().reverse().join("");
}
