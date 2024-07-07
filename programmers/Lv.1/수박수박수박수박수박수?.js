function solution(n) {
  var answer = "수";
  for (let i = 1; i < n; i++) {
    i % 2 !== 0 ? (answer = answer + "박") : (answer = answer + "수");
  }
  return answer;
}

console.log(solution(3));
