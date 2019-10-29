/* 변수 */

// 1. let
// 값을 재할당 할 수 있는 변수를 선언하는 키워드
// 재선언은 불가, 재할당은 가능!
// 블럭 유효 범위(block scope)를 갖는다.

let x = 1
console.log(x)  // 1 -> javascript에서는 print안씀 -> print하면 인쇄페이지로 감

// 재선언 불가
// let x = 3  // Uncaught SyntaxError: Identifier 'x' has already been declared
            
x = 3
// console.log(x)  // 3


if (x === 3) {
  let message = '안녕하세요'
  console.log(message)  // '안녕하세요'
  console.log(x)  // 3
}

// 중괄호 안에있는 것들은 블럭을 벗어나지 않음.
// console.log(message)  // 00_variable.html:37 Uncaught ReferenceError: message is not defined

// {} 밖에 있는 것이 안에서는 사용해도 에러가 나지 않음
// {} 안에 있는 것이 밖에서 사용하면 에러가 남

// 아무것도 없이 선언 가능
let y

console.log(y)  // undefined(python에서 None)
 

y = 2 // var: 바로 선언하는 것과 동일, 문제가 많다..



console.log('============================================================================')
// 2. const
// 값이 변하지 않는(재할당을 할 수 없는) 상수를 선언하는 키워드
// let과 동일하게 블록 유효 범위(block scope)를 가진다.
// "모든" 선언에서 가능한 상수를 사용해야 한다.

const  MY_FAV = 20

// MY_FAV = 30   // 재할당 불가! => Uncaught TypeError: Assignment to constant variable.

if (MY_FAV === 20) { // 새로운 유효범위 내에서 새로운 값을 가지는 것은 가능!
  const MY_FAV = 30
  console.log(MY_FAV)  // 30
}

// scope를 벗어나기 때문에 30은 더이상 접근 불가
console.log(MY_FAV)  // 20


console.log('============================================================================')

// 3. 식별자 (=변수명)
//    1) 반드시 문자, 달러($), 밑줄(_)로 시작해야 한다.
//    2) 대소문자를 구분하고 Class 이름을 제외하고는 대문자로 시작하지 않는 걸 권장
//    3) 예약어 사용 불가 (const, let, class, return, case.. )

// 카멜케이스(camelCase) - 객체, 함수, 변수

// 이벤트 핸들러 - 'on'으로 시작
const onClick = () => {}

// boolean 값 - 'is'로 시작
let isAvailable = false

// 함수 이름
function getUserName () {}

// 파스칼 케이스(PascalCase) - 클래스, 생성자 (UpperCamelCase)
// 첫 글자부터 대문자
class User {}

// 대문자 스네이크 케이스 - 상수
const API_KEY = 'asfsdaf'
