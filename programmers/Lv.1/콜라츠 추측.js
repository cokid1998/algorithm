function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (num === 1) return 0;
    if (count === 500) return -1;
    if (!(num % 2)) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    count++;
  }

  return count;
}

// 코드 리팩토링
function solution(num) {
  let count = 0;
  while (num !== 1 && count !== 500) {
    !(num % 2) ? (num /= 2) : (num = num * 3 + 1);
    count++;
  }

  return num === 1 ? count : -1;
}
// num이 1인경우 0리턴
// -> count에 0을 초기값으로 할당
// -> num이 1인경우 while이 작동하지 않으므로 num이 1일 때 초기값으로 넣어둔 count 0이 그대로 리턴

// num이 500이상이면 -1리턴
// -> while의 중단 조건은 count가 500이상이 되면 멈춤
// -> count가 500이상이 돼서 중단된 경우 num이 1로 변화되다 중단됐다는 뜻임 즉 num은 1이 아님(num !== 1)
// -> 때문에 num === 1이 아니면 -1을 리턴하는 로직이 논리적으로 맞게 됨
