// 놀이기구의 가격은 price * n (n번 이용)
// count번 이용하게 되면 금액에서 얼마가 모자라는지 리턴
// 부족하지않으면 0 리턴
function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= i * price;
  }

  return money < 0 ? Math.abs(money) : 0;
}

console.log(solution(3, 20, 4));
