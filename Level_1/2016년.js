function solution(a, b) {
  let result = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let count = 0;
  for (let i = 1; i < a; i++) {
    if (i == 2) {
      count += 29;
    } else if (i <= 7) {
      if (i % 2 == 0) {
        count += 30;
      } else {
        count += 31;
      }
    } else {
      if (i % 2 != 0) {
        count += 30;
      } else {
        count += 31;
      }
    }
  }
  count += b - 1;
  return result[count % 7];
}

//더 간단하게
function solution(a, b) {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let totalDays = b - 1;
  for (let i = 0; i < a - 1; i++) {
    totalDays += months[i];
  }
  return days[totalDays % 7];
}
