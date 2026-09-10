function solution(wallpaper) {
  let rowarr = [];
  let columnarr = [];
  for (let i = 0; i < wallpaper.length; i++) {
    let wall = wallpaper[i].split("");
    for (let j = 0; j < wall.length; j++) {
      if (wall[j] === "#") {
        rowarr.push(i);
        columnarr.push(j);
      }
    }
  }
  return [
    Math.min(...rowarr),
    Math.min(...columnarr),
    Math.max(...rowarr) + 1,
    Math.max(...columnarr) + 1,
  ];
}

// 배열안에서 min, max 찾기?
// Math.min(...rowarr)로, ...으로 배열전체에서 가장 작은값구하기
