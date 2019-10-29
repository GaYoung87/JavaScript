// Array helper method
// 1. forEach - loop를 대신 돌아줌

const colors = ['red', 'green', 'blue', 'salmon']

for (const color of colors) {
  // console.log(color)
}

colors.forEach(function(color) {  // 하나씩 돌면서 찍어봐
  console.log(color)
})

colors.forEach(color => {
  console.log(color)
})

colors.forEach(color => console.log(color))

console.log('============================================================================')

// 2. map - 배열 내 모든 요소에 대하여 주어진 함수를 호출한 결과를 보아 새로운 배열을 return
//          일정한 형식의 새로운 배열을 만들 때 사용한다
const numbers = [1, 2, 3, 4]  // (4) [1, 2, 3, 4]

const doubleNumbers = numbers.map(number => {
  return number * 2
})

// 기존 number는 유지
const doubleNumbers1 = numbers.map(number => number * 2)

doublenNumbers1  // (4) [2, 4, 6, 8]

const doubleNumbers2 = numbers.map(number => {
  return `B${number}`
})

doubleNumbers2  // (4) ['B1', 'B2', 'B3', 'B4']

// 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열을 만들어보자!
// Math.sqrt라는 함수 존재
const numbers2 = [4, 6, 9]

// 답1
numbers2.map(number => number ** 0.5)

// 답2
numbers2.map(number => Math.sqrt(number))

console.log('============================================================================')

// 3. filter - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 반환
// 짝수인 숫자를 구하겠다.
const numbers = [1, 2, 3, 4]
numbers.filter(number => {
  return number % 2 === 0
})                            // (2) [2, 4]

numbers.filter(number => {
  return number % 2 !== 1
})                            // (2) [2, 4]

// fruit인 products들만 모아라
const products = [
  { name: 'cucumber', type: 'vege' },  // object 선언시 앞뒤 띄어쓰기
  { name: 'banana', type: 'fruit' },
  { name: 'tomato', type: 'vege' },
  { name: 'apple', type: 'fruit' },
]

const fruits = products.filter(product => {
  return product.type === 'fruit'
})
fruits  // (2) [{…}, {…}]
        // 0: {name: "banana", type: "fruit"}
        // 1: {name: "apple", type: "fruit"}
        // length: 2
        // __proto__: Array(0)