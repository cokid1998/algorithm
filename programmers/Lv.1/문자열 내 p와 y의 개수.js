// p와 y의 개수가 같으면 true 아니면 false
// 대소문자는 구분하지 않음
// p와 y가 모두 존재하지 않는경우 true를 리턴
function solution(s) {
  let string = s.toLowerCase();
  let yCount = 0;
  let pCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "y") yCount++;
    else if (string[i] === "p") pCount++;
  }

  if (pCount === yCount) {
    return true;
  } else if (pCount !== yCount) {
    return false;
  } else if (pCount === 0 || yCount === 0) {
    return true;
  }
}

console.log(solution("pPoooyY")); //true
console.log(solution("Pyy")); // false

// 다른 사람 풀이
// 문자열을 대문자로 바꾼 뒤 문자 "P"와 "Y"를 기준으로 배열을 만들고 만들어진 배열의 길이를 비교한다.
// 입력이 "pPoooyY"일 경우 생성되는 배열 = ["", "", "OOOYY"] , ["PPOOO", "", ""]
// 입력이 "Pyy"일 경우 생성되는 배열 = ["", "YY"] , ["P", "", ""]
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
numPY("pPoooyY");
numPY("Pyy");
