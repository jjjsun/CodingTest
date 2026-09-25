//가장 최적은: 가장 무거운 사람 태울때 무게 여유되면 가장 가벼운 사람 같이 끼워보내기
function solution(people, limit) {
  let result = 0;
  people.sort((a, b) => a - b);

  //가장 가벼운 사람 인덱스
  let left = 0;
  //가장 무거운 사람 인덱스
  let right = people.length - 1;

  while (left <= right) {
    //가장 가벼운 사람 + 가장 무거운 사람이 같이 탈 수 있는 경우
    if (people[left] + people[right] <= limit) {
      left++; //가벼운 사람 같이 채움
    }

    //무거운 사람은 짝이 있든 없든 이번 보트에 무조건 탑승
    right--;
    result++;
  }
  return result;
}
