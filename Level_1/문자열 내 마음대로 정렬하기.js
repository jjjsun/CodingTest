function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;

    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
  });
  return strings;
}

//1(양수) -1(음수) 0
// - return 1: 양수 = a기 b보다 크니까, 순서 바꿔서 b,a로 정렬해달라
// - return -1: 음수 = a가 b보다 작으니까, 순서 바꿀필요없고, 지금 그대로 a,b로 순서 유지.a
// - return 0 = 둘이 같으니까, 순서 바꾸지 말고 가만히 둬
//여기서 나온게 m.sort((a,b) => a,b) 공식인거다!
