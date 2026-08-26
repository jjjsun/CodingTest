function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

//문자열 뒤집기는 .reverse()
//10진법 -> 3진법은 바꾸려는 숫자.toString(바꾸려는 진법수)
// ex. 13.toString(3) : 10진법수인 10을 3진법으로 바꾸자
//3진법 -> 10진법은 parseInt(바꾸려는 숫자, 진법수);
// ex. parseInt(0021, 3) : 3진법수인 0021을 10진법으로 바꾸자
