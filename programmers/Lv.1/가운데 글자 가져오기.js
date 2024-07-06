function solution(s) {
  let half = Math.floor(s.length / 2);
  return s.length % 2 !== 0 ? s[half] : `${s[half - 1]}${s[half]}`;
}
solution("abcde");
