function solution(keymap, targets) {
  let result = [];
  for (let i = 0; i < targets.length; i++) {
    const words = targets[i].split("");
    let count = 0;
    let isPossible = true;
    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      let minPush = 101;
      for (let k = 0; k < keymap.length; k++) {
        const index = keymap[k].indexOf(word);
        if (index !== -1) {
          minPush = Math.min(index + 1, minPush);
        }
      }
      if (minPush == 101) {
        isPossible = false;
        break;
      }
      count += minPush;
    }
    result.push(isPossible ? count : -1);
  }
  return result;
}

// 확인여부체크는 true/false 이용해서 구현하기.
