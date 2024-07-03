function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}
// indexOf함수 활용
function findKim(seoul) {
  var idx = seoul.indexOf("Kim");

  return "김서방은 " + idx + "에 있다";
}
