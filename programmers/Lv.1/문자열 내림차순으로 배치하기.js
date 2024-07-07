function solution(s) {
  let answer = [...s].sort().reverse().join("");

  return answer;
}

solution("Zbcdefg");
