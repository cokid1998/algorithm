function solution(n) {
  var answer = [];
  let tmp = n + "".split("");
  for (let i = tmp.length - 1; i >= 0; i--) {
    answer.push(+tmp[i]);
  }

  return answer;
}

// function solution(n) {
//   let arr = [];

//   while (n > 0) {
//     arr.push(n % 10);
//     n = Math.floor(n / 10);
//   }

//   return arr;
// }

console.log(solution(12345));
