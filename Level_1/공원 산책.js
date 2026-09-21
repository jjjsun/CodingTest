function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;

  let curR = 0,
    curC = 0;

  //현재 위치 찾기(S찾기)
  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (park[r][c] === "S") {
        curR = r;
        curC = c;
      }
    }
  }

  const directions = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  for (const route of routes) {
    const [dir, distStr] = route.split(" ");
    const dist = Number(distStr);
    const [dr, dc] = directions[dir];

    //한걸음씩 검사하고 되면 true그대로 나가서 걸음 추가하기.
    //장애물있다면 false로 바꾼다음 나가서 걸음 미추가.
    let isValid = true;

    for (let step = 1; step <= dist; step++) {
      const nextR = curR + dr * step;
      const nextC = curC + dc * step;

      if (
        nextR < 0 ||
        nextR >= H ||
        nextC < 0 ||
        nextC >= W ||
        park[nextR][nextC] == "X"
      ) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      curR += dr * dist;
      curC += dc * dist;
    }
  }
  return [curR, curC];
}
