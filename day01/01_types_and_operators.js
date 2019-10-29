// Types and operators (타입과 연산자)
// Primitive Type

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

console.log('============================================================================')

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

console.log('============================================================================')

// 3. Boolean: 소문자로 표현
true
false

console.log('============================================================================')

// 4. Empty Value
// 값이 존재하지 않음을 표현하는 값
undefined
null

let firstName  // 선언하고 할당하지 않음 => undefined
let students = {}
students.jason  // undefined


let lastName = null  // 우리가 의도적으로 값이 없음을 표시할 때 (자바스크립트가 값을 주지 않았음을 이야기하자)

console.log('============================================================================')

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