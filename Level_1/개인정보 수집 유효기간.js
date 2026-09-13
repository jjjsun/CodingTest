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
