function solution(n, a, b) {
  let roundNumber = 1;
  while (true) {
    if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
      return roundNumber;
    } else {
      if (a % 2 === 0 ? (a = a / 2) : (a = (a + 1) / 2));
      if (b % 2 === 0 ? (b = b / 2) : (b = (b + 1) / 2));
      roundNumber++;
    }
  }
}

//Math.ceil(소수점 무조건 반올림)
// Math.ceil(1/2)는 1
// Math.ceil(2/2)는 1
// Math.ceil(3/2)는 2
// Math.ceil(4/2)는 2
// 그래서, 12와 34로 나눔. 23이 같은조라는 문제가 발생되지않도록
