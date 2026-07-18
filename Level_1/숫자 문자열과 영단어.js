//영단어를 배열안에 넣고, 그 영단어 나오면, split 쪼개기 한다음에 그 쪼개고난 다음 자리에 join을 그 영단어에 맞는 숫자로

function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = s;
  for (let i = 0; i < numbers.length; i++) {
    answer = answer.split(numbers[i]).join(i);
  }

  return Number(answer);
}
