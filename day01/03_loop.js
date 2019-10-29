// 1) for 문
// for(사용할 변수 지정, 반복 조건, 반복돌 때마다 하는 연산)
for (let i = 0; i < 5; i++) {
  console.log(i)
}
// 0 1 2 3 4

const numbers = [0, 1, 2, 3, 4, 5, ]

for (const number of numbers) {
  console.log(number)
}
// 0 1 2 3 4 5


// 2) while 문
let i = 0

while (i < 5) {
  console.log(i)
  i++
}