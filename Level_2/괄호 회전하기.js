function solution(s) {
  let result = 0;
  let checklist = s.split("");
  const pair = { ")": "(", "]": "[", "}": "{" };

  for (let i = 0; i < s.length; i++) {
    let checkStack = [];
    let isValid = true;
    for (let j = 0; j < s.length; j++) {
      if (checklist[j] == "(" || checklist[j] == "[" || checklist[j] == "{") {
        checkStack.push(checklist[j]);
      } else {
        if (checkStack.length === 0) {
          isValid = false;
          break;
        }
        let popped = checkStack.pop();
        if (pair[checklist[j]] !== popped) {
          isValid = false;
          break;
        }
      }
    }
    if (isValid && checkStack.length === 0) {
      result++;
    }
    let change = checklist[0];
    checklist.shift();
    checklist.push(change);
  }
  return result;
}
