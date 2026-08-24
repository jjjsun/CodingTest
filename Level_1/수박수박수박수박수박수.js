//첫 성공
function solution(n) {
  const word = "수박";
  return n % 2 == 0 ? (word * n) / 2 : word * ((n - 1) / 2) + "수";
}

//더 간단하게 (repeat과 slice사용)
function solution(n) {
  return "수박".repeat(n).slice(0, n);
}
//n = 3일때. 수박수박수박 생성하고, 앞에서부터 n=3글자만 따와서 출력

//repeat을 통해서 같은 수 반복하는법 배우기.
