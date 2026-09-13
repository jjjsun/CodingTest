function solution(today, terms, privacies) {
  let result = [];
  const date = today.split(".");
  const year = date[0];
  const month = date[1];
  const day = date[2];
  const checkDate = Number(year) * 12 * 28 + Number(month) * 28 + Number(day);

  const termObj = {};

  for (const item of terms) {
    const [type, month] = item.split(" ");
    termObj[type] = Number(month);
  }

  for (let i = 0; i < privacies.length; i++) {
    const [dateStr, type] = privacies[i].split(" ");
    const periodMonth = termObj[type];
    const privacyDateArr = dateStr.split(".");
    const privacyYear = privacyDateArr[0];
    const privacyMonth = privacyDateArr[1];
    const privacyDay = privacyDateArr[2];
    const privacyDate =
      Number(privacyYear) * 12 * 28 +
      Number(privacyMonth) * 28 +
      Number(privacyDay) +
      Number(periodMonth) * 28;

    if (checkDate >= privacyDate) {
      result.push(i + 1);
    }
  }
  return result;
}

//날짜 공식
//총일수: (Year * 12 * 28) + (Month * 28) + day
//객체만드는것 어려워함.

// 테스트 17 〉	통과 (0.39ms, 44MB)
// 테스트 18 〉	통과 (1.83ms, 43.7MB)
// 테스트 19 〉	통과 (0.27ms, 43.7MB)
// 테스트 20 〉	통과 (0.30ms, 43.9MB)

//더 간단하게
function solution(today, terms, privacies) {
  let result = [];
  const date = today.split(".");
  const deadlineDate =
    Number(date[0]) * 12 * 28 + Number(date[1]) * 28 + Number(date[2]);

  const termObj = {};

  for (const item of terms) {
    const [type, month] = item.split(" ");
    termObj[type] = Number(month);
  }

  for (let i = 0; i < privacies.length; i++) {
    const [dateStr, type] = privacies[i].split(" ");
    const periodMonth = termObj[type];
    const privacyDateArr = dateStr.split(".");
    const privacyDate =
      Number(privacyDateArr[0]) * 12 * 28 +
      Number(privacyDateArr[1]) * 28 +
      Number(privacyDateArr[2]) +
      Number(periodMonth) * 28;

    if (deadlineDate >= privacyDate) {
      result.push(i + 1);
    }
  }
  return result;
}

// 테스트 17 〉	통과 (0.29ms, 43.8MB)
// 테스트 18 〉	통과 (0.27ms, 43.6MB)
// 테스트 19 〉	통과 (0.27ms, 43.6MB)
// 테스트 20 〉	통과 (0.27ms, 43.9MB)
