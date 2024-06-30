function solution(n) {
  let tmp = [...(n + "")];

  tmp = +tmp.sort().reverse().join("");
  return tmp;
}

console.log(solution(118372));
