function solution(video_len, pos, op_start, op_end, commands) {
  const [Vmin, Vsec] = video_len.split(":");
  const totalVideo = Number(Vmin) * 60 + Number(Vsec);

  const [Pmin, Psec] = pos.split(":");
  let totalPos = Number(Pmin) * 60 + Number(Psec);

  const [OSmin, OSsec] = op_start.split(":");
  const totalOpstart = Number(OSmin) * 60 + Number(OSsec);

  const [OEmin, OEsec] = op_end.split(":");
  const totalOpend = Number(OEmin) * 60 + Number(OEsec);

  //시작점이 오프닝일때 오프닝 종료 위치로 이동
  if (totalPos >= totalOpstart && totalPos < totalOpend) {
    totalPos = totalOpend;
  }
  for (const command of commands) {
    //조건1. 명령이 next일때
    if (command === "next") {
      totalPos += 10;
      if (totalPos > totalVideo) {
        totalPos = totalVideo;
      }
    }

    //조건2. 명령이 prev일때
    else if (command === "prev") {
      totalPos -= 10;
      if (totalPos < 0) {
        totalPos = 0;
      }
    }

    //조건3. 이동후에 위치가 오프닝 구간일 때
    if (totalPos >= totalOpstart && totalPos < totalOpend) {
      totalPos = totalOpend;
    }
  }

  const min = String(Math.floor(totalPos / 60)).padStart(2, "0");
  const sec = String(totalPos % 60).padStart(2, "0");

  return `${min}:${sec}`;
}
