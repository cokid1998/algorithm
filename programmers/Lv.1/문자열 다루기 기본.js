function solution(s) {
  const isNumber = (s) => {
    let tmp = [...s];
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      }
    }
    return true;
  };
  return (s.length === 6 || s.length === 4) && isNumber(s);
}
console.log(solution("1e22"));
// "1e22" -> 주의 e가 문자 e가 아닌 지수 로그 e로판단 될 수 있으므로 isNaN이 아닌 parseInt로 해야함
