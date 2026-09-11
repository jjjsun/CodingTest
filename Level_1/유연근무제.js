// startDay = i
// i %7 == 0 일요일
// i% 7 == 6 토요일

//월요일을 시작일로 잡은것.
function solution(schedules, timelogs, startday) {
  let result = 0;
  for (let i = 0; i < timelogs.length; i++) {
    let hour = Math.floor(schedules[i] / 100);
    let min = (schedules[i] % 100) + 10;
    if (min >= 60) {
      hour++;
      min -= 60;
    }
    let saveTime = hour * 100 + min;
    let count = 0;
    let timelog = timelogs[i];
    for (let j = 0; j < timelog.length; j++) {
      const day = ((startday - 1 + j) % 7) + 1;
      if (day % 7 !== 0 && day % 7 !== 6) {
        if (timelog[j] <= saveTime) {
          count++;
        }
      }
    }
    if (count === 5) {
      result++;
    }
  }
  return result;
}

//오늘 요일계산 +1,-1안하고, 0~6으로 구분했을때는, 6일때가 토요일. 0일때가 일요일.
//즉, 일요일을 시작일로 잡은것.
function solution(schedules, timelogs, startday) {
  let result = 0;
  for (let i = 0; i < timelogs.length; i++) {
    let hour = Math.floor(schedules[i] / 100);
    let min = (schedules[i] % 100) + 10;
    if (min >= 60) {
      hour++;
      min -= 60;
    }
    let saveTime = hour * 100 + min;
    let timelog = timelogs[i];
    let count = 0;
    for (let j = 0; j < timelog.length; j++) {
      const day = (startday + j) % 7;
      if (day !== 6 && day !== 0) {
        if (timelog[j] <= saveTime) {
          count++;
        }
      }
    }
    if (count === 5) {
      result++;
    }
  }
  return result;
}
