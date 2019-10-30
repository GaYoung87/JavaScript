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

// for number in numbers:
//   pass
const doubleNumbers = numbers.map(number => {
  return number * 2
})

// 기존 number는 유지
const doubleNumbers1 = numbers.map(number => number * 2)

doubleNumbers1  // (4) [2, 4, 6, 8]

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

// map 헬퍼를 사용해서, distance / time (속도)를 저장하는 배열 speed를 만들어라
const trips = [
  {distance: 34, time: 10},
  {distance: 90, time: 50},
  {distance: 59, time: 25},
]

/*
const speeds = trips.map( 함수정의 )  => 각 루프마다 실행하고자하는 함수
ex) python이었다면
    for trip in trips(): 에서 trip은
JS에서 map에 첫번째 인자로 주어지는 변수다
*/

// for trip in trips:
//   pass

const speeds = trips.map(trip => {
  return trip.distance / trip.time
})

console.log('============================================================================')

// 3. filter - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 반환
// 짝수인 숫자를 구하겠다.
const numbers5 = [1, 2, 3, 4]
numbers5.filter(number => {
  return number % 2 === 0
})                            // (2) [2, 4]

numbers5.filter(number => {
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


// 나이가 50 이상인 아이템만 가지고 있는 새로운 배열을 만드세요
const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const oldAges = ages.filter((age, index, self) =>{
  console.log(age, index, self)
  return age >= 50
})


console.log('============================================================================')

// find - 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환, 없다면 undefined 반환
const users = [
  { name: 'Tony Stark', age: 45 },
  { name: 'Steve Rogers', age: 32 },
  { name: 'Thor', age: 40 },
]

const tony = users.find(user => {
  return user.name === 'Tony Stark'
})
// find를 filter로 바꾸면 filter는 array로 반환하므로 리스트에 넣어서 준다.

console.log('============================================================================')

// some - 배열 안의 어떤 요소라도 (=== 가 하나라도!) 주어진 판별 함수를
//        통과하는지 테스트하고 결과에 따라 boolean 값을 반환한다.

// 하나의 요소라도 짝수를 포함하고 있다면 true
const arr = [1, 2, 3, 4, 5]
const result = arr.some(number => {
  return number % 2 === 0
})

// every - 모든 요소가 짝수를 포함하고 있다면 true
const result2 = arr.every(number => {
  return number % 2 === 0
})

// Q.
// requests - 배열에서 각 요청들 중 status가 pending인 요청이 있는지 확인하라
const requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' },
]

const isInProgress = requests.some(request => {
  return request.status === 'pending'
})

console.log('============================================================================')

// reduce - 배열의 각 요소에 대해 주어진 `reducer`함수를 실행하고 하나의 값을 반환.
// reduce는 배열 내의 숫자 총합, 배열 내 평균 계산 등 배열의 값을 하나로 줄이는 동작을 한다.

const ssafyTest = [90, 99, 78, 80]

// 1단계
// const sum = ssafyTest.reduce(() => {})  // array함수 만든 것: () => {}

// 2단계
// const sum = ssafyTest.reduce((total, score) => {})  // 합(total))구할것, 각각의 아이템(score))

// 3단계
// const sum = ssafyTest.reduce((total, score) => {}, 0) // total이 0이여야만 합을 구할 수 있음
                                                         // 누적 값을 0부터 시작하겠다

// 4단계
const sum = ssafyTest.reduce((total, score) => {
  total += score
  return total  // 다음 루프로 누적 값을 넘김
}, 0)

// ssafyTest 배열을 doubleSsafyTest로 만드시오! (reduce로 map구현)
const doubleSsafyTest = ssafyTest.reduce((double, score) => {
  double.push(score * 2)
  console.log(double)
  return double  // 다음 루프로 누적값 double을 넘긴다
}, [])

// 평균값 구하기
len = ssafyTest.length
const mean = ssafyTest.reduce((total, score) => {
  console.log(total, score)
  total += score/len
  return total
}, 0)