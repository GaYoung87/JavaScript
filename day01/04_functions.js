// 함수는 값이다 -> 다른 것들과 같이 변수에 할당될 수 있다.
// 1. 함수 선언식 및 함수 표현식
// 함수 선언식
// 함수가 파일 어딘가에 선언되어있으면 알 수 있다.
function add(num1, num2) {
  return num1 + num2
}

add(1, 2)  // 3


// 함수 표현식
// 함수를 선언하면서 변수에 할당해줌
const sub = function(num1, num2) {
  return num1 - num2
}

console.log('============================================================================')

// 2. Arrow Function => 우리가 많이 사용한다.
let addOne = function(num) {
  return num + 1
}

addOne = (num) => {
  return num + 1
}

// 중괄호 제거는 바로 반환하겠다는 뜻
// 표현이 한줄 이상이면 아래처럼 줄일 수 없음
addOne = (num) => num + 1

addOne = num => num + 1

// Q. name이라는 인자를 받아서 hello ${name}을 반환하는 함수를
// 선언식, 표현식, arrow function으로 만들어보세요

// 함수 선언식

function greeting1 (name) {
  return `hello ${name}`
}

const greeting2 = function(name) {
  return `hello ${name}`
}

const greeting3 = name => `hello ${name}`

// object를 반환하는 arrow function

const makeObject1 = (value) => {
  return {'key': value}
}

const makeObject2 = value => ({'key': value})
// 하나의 값을 넘기고 있다는 것을 표현하기 위해 ()로 묶어줌

const noArgs = () => 'No args'