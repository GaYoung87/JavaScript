# Java Script 문법

## 1. variable

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Variable</title>
</head>
<body>

  <!-- 테그들이 먼저 보여지도록 하고, javascript가 읽히도록 해야함. -->
  <!-- 특정 이벤트일때 어떤 일을 일으키겠다. -->
  <!-- body아래쪽에 작성하는 이유
	    1. 코드해석에 오래걸릴 수 있어서(ux측면)
        2. 어떤 테그에 어떤 이벤트를 하는지 인식이 불가 -> 버튼을 먼저 읽어오고 자바스크립트를 읽어오면서 버튼을 찾는 것이 맞음 -->
  <script src="00_variable.js"></script>
</body>
</html>
```



#### 1) let :  값을 재할당 할 수 있는 변수를 선언하는 키워드 _ 변수설정

```javascript
// 값을 재할당 할 수 있는 변수를 선언하는 키워드
// 재선언은 불가, 재할당은 가능!
// 블럭 유효 범위(block scope)를 갖는다.
// let x = 1
// console.log(x)  // 1 -> javascript에서는 print안씀 -> print하면 인쇄페이지로 감
// let x = 3  // Uncaught SyntaxError: Identifier 'x' has already been declared

x = 3
// console.log(x)  // 3


if (x === 3) {
    let message = '안녕하세요'
    console.log(message)  // '안녕하세요'
}
// 중괄호 안에있는 것들은 블럭을 벗어나지 않음.
console.log(message)  // 00_variable.html:37 Uncaught ReferenceError: message is not defined

// {} 밖에 있는 것이 안에서는 사용해도 에러가 나지 않음
// {} 안에 있는 것이 밖에서 사용하면 에러가 남

</script>
```



#### 2) const : 값이 변하지 않는(재할당을 할 수 없는) 상수를 선언하는 키워드_ 변수설정

```javascript
// const
// 값이 변하지 않는(재할당을 할 수 없는) 상수를 선언하는 키워드
// let과 동일하게 블록 유효 범위(block scope)를 가진다.
// "모든" 선언에서 가능한 상수를 사용해야 한다.

const  MY_FAV = 20

// MY_FAV = 30   // 재할당 불가!

if (MY_FAV === 20) { // 새로운 유효범위 내에서 새로운 값을 가지는 것은 가능!
  const MY_FAV = 30
  console.log(MY_FAV)  // 30
}

// scope를 벗어나기 때문에 30은 더이상 접근 불가
console.log(MY_FAV)  // 20
```



#### 3) 식별자

```javascript
// 식별자 (=변수명)
// 1. 반드시 문자, 달러($), 밑줄(_)로 시작해야 한다.
// 2. 대소문자를 구분하고 Class 이름을 제외하고는 대문자로 시작하지 않는 걸 권장
// 3. 예약어 사용 불가 (const, let, class, return, case.. )

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

```





## 2. types and operators

#### 1) Numbers

```js
// 1. Numbers
const a = 13
const b = -5
const c = 3.14  // float
const d = 2.998e8  // 2.998 * 10^8
const e = Infinity
const f = -Infinity
const g = NaN  // Not a Number

console.log(a, b, c, d, e, f, g)
console.log(5 / '안녕하세요')  // 해결할 수 없는 연산을 할 때 NaN이 나옴
```

#### 2) Strings

```js
// 2. Strings

const sentence1 = 'Ask and go to the blue'
const sentence2 = "Ask and go to the blue"
const sentence3 = `Ask and go to the blue`
console.log(sentence1, sentence2, sentence3)

// 따옴표를 사용하면 줄바꿈이 안됨
// const word = '안녕
// 하세요'

// escapte sequence 사용 가능
const word1 = '안녕\n하세요'
console.log(word1)

// 백틱을 쓰면 줄바꿈이 됨, escape sequence 사용 안됨
// Template literal 사용할 수 있음
const word2 = `안녕
하세요`
console.log(word2)

// Template Literal
const age = 10
const message = `홍길동의 나이는 ${age}`  // python의 f_string과 비슷
                                         // ``만 가능! '', ""은 불가능
console.log(message)

console.log('Happy' + 'Hacking')
```

#### 3) Boolean

```js
// 3. Boolean: 소문자로 표현
true
false
```

#### 4) Empty Value

```js
// 4. Empty Value
// 값이 존재하지 않음을 표현하는 값
undefined
null

let firstName  // 선언하고 할당하지 않음 => undefined

let lastName = null  // 우리가 의도적으로 값이 없음을 표시할 때 (자바스크립트가 값을 주지 않았음을 이야기하자)
```

```js
// 브라우저에서 직접 입력
// undefined  vs  null
typeof null
"object"
typeof undefined
"undefined"
```

#### 5) Opeartors(연산자)

```js
// 5. Operators (연산자)
// 1) 할당 연산자
x += 10   // x = x + 10 -> x = 10
x -= 3    // x = 7
x **= 7   // x = 21
x ++      // 22
x --      // 21 (반복문 작성시 사용)


// 2) 비교 연산자
3 > 2 // true
3 < 2 // false


// 문자열 비교도 가능
// 영어 소문자가 대문자보다 큼, 알파벳은 오름차순
'A' < 'B'  // true
'A' < 'a'  // true
'가' < '나'  // true
'가' > '나'  // false


// 3) 동등 연산자 (==)
// 서로 같은 값을 갖도록 변환할 수 있으면, 같다고 판단한다.
// (JS 엔진이 자동으로 형변환) => 동등 연산자의 사용은 지양한다.
const a1 = 1
const b1 = '1'

console.log(a1 == b1)  // true
1 == 1  // true
1 == '1'  // true
1 == Number('1')  // true
1 == true  // true
8 * null  // 0
'5' - 1  // 4


// 4) 일치 연산자 (===), (!==)
1 === '1'  // false
1 === Number('1')  // true


/// 5) 논리 연산자
// and, or, not

// &&: 둘다 true이면 결과값은 false
true && true  // true
true && false  // false

// ||: 하나라도 true라면 결과값은 true
true || true  // true
true || false  // true
false || false  // false

// 값을 반대로 뒤집는다.
!true  // false
!false  // true


// 삼항 연산자
// 가장 앞의 boolean 값이 참이면 : 앞의 값이 반환, 그렇지 않다면 : 뒤의 값이 반환
flag  // true

const result = flag? '참이니' : '거짓이니'  // 참이니
console.log(result)  // 참이니
```



## 3. conditionals(조건문)

#### 1) if문

```js
// 1) if 문

// const username = prompt('안녕하세요? 당신은 누구신가요?!')
// // 문자열을 username에 저장하겠다.

let message = ''

if (username === 'ssafy') {
  message = `<h1>SSAFY에 오신걸 환영합니다!</h1>`
} else if (username === 'admin') {
  message = `<h1>주인님 안녕하세요~</h1>`
}

else {
  message = `<h1>Welcome ${username}</h1>`
}

document.write(message)
```

#### 2) switch문

```js
// 2) switch 문
// 밑에 있는 애들도 실행 -> 밑에 애들을 실행시키고싶지 않다면 break!
const username = prompt('Who are you?')

let message = ''

// js는 모든 경우를 다 돈다.
switch(username) {
  case 'ssafy': {
    message = `<h1>SSAFY에 오신걸 환영합니다!</h1>`
    console.log(message)
    break
  }
  case 'admin': {
    message = `<h1>주인님 안녕하세요~</h1>`
    console.log(message)
    break
  }
  default: {
    message = `<h1>Welcome ${username}</h1>`
    console.log(message)
    break
  }
}
```

```js
// 예시
switch(사용자) {
  case '관리자': {
    사용자.권한 += '관리자 페이지 접근'
  }
  case '일반_사용자': {
    사용자.권한 += '쓰기'
  }
  default: {
    사용자.권한 += '읽기'
  }
}
// break를 사용하지 않으면,
// 일반_사용자: 쓰기, 읽기 / 관리자: 관리자 페이지 접근, 쓰기, 읽기
```



## 4. loop(반복문)

#### 1) for문

```js
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
```

#### 2) while문

```js
// 2) while 문
let i = 0

while (i < 5) {
  console.log(i)
  i++
}
```



## 4. functions

#### 1) 함수 선언식 및 표현식

```js
// 1) 함수 선언식
// 함수가 파일 어딘가에 선언되어있으면 알 수 있다.
function add(num1, num2) {
  return num1 + num2
}

add(1, 2)  // 3


// 2) 함수 표현식
// 함수를 선언하면서 변수에 할당해줌
const sub = function(num1, num2) {
  return num1 - num2
}
```

#### 2) Arrow Function

```js
// 2. Arrow Function => 우리가 많이 사용한다.
const addOne = function(num) {
  return num + 1
}

const addTwo = (num) => {
  return num + 1
}
```

