process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]); //a=가로, b=세로
  const row = "*".repeat(a); //가로 한줄 완성
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

//process.stdin : 백준이나 터미널 환경처럼 사용자가 직접 입력한 텍스트를 받아오는 Node.js 표준 입력 문법
