// function solution(n, m) {
//   let tmp = 0;
//   let small = n;
//   let big = m;
//   while (big) {
//     tmp = small % big;
//     small = big;
//     big = tmp;
//   }
//   let tmp1 = 0;
//   while (n * m !== small * tmp1) {
//     tmp1++;
//   }

//   return [small, tmp1];
// }

function solution(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
console.log(solution(2, 5));
