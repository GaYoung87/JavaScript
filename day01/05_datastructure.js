const numbers = [1, 2, 3, 4]

numbers[1]  // 2
numbers[-1]  // undefined
// javascript에서는 인덱스 0부터 가능(음수 불가능!!) -> 에러가 뜨지는 않지만 undefined가 뜸

numbers.length  // 4

console.log('============================================================================')

// 배열 뒤집기: 원본을 파괴
numbers.reverse()  // 뒤집힌 배열을 반환해주고 있다. (4) [4, 3, 2, 1]
numbers  // [4, 3, 2, 1]  -> 원본을 파괴

console.log('============================================================================')

// 배열에 아이템 추가하기
// push: 5라는 숫자를 넣은 다음 바뀐 array의 길이를 반환
numbers.push('abc')  // 5 -> 배열의 길이가 5가 되어서 길이 값을 반환
numbers.push(5)  // 6
numbers  // (6) [4, 3, 2, 1, 'abc', 5]

console.log('============================================================================')

// 가장 마지막 요소 삭제 후 해당 값 반환
numbers.pop()  // 5
numbers  // (5) [4, 3, 2, 1, 'abc']

console.log('============================================================================')

// 가장 앞에 요소 추가한 후, 새로운 배열의 길이 반환
numbers.unshift('a')  // 6
numbers  // ['a', 4, 3, 2, 1, 'abc']

console.log('============================================================================')

// 첫번째 요소 제거 후 반환
numbers.shift()  // 'a' -> 제거한 아이템
numbers  // [4, 3, 2, 1, 'abc']

console.log('============================================================================')

// include - 특정 아이템이 배열에 있는지 여부를 판단
numbers.includes(0)  // false
numbers.includes(1)  // true

console.log('============================================================================')

// indexOf - 특정 아이템의 index를 찾아서 반환
numbers.push('a')
numbers.push('a')
numbers  // (7) [4, 3, 2, 1, "abc", "a", "a"]

numbers.indexOf('a')  // 5, 일치하는 가장 첫번재 아이템의 인덱스를 반환
numbers.indexOf('b')  // -1, 일치하는 아이템이 없으면 -1로 나옴

console.log('============================================================================')

// join - 배열의 아이템을 함수의 인자를 seperator로 이어서 문자열로 반환
numbers.join()  // "4,3,2,1,abc,a,a"
numbers.join('')  // "4321abcaa"
numbers.join('_')  // "4_3_2_1_abc_a_a"

numbers  // 원본은 바뀌지 않음

console.log('============================================================================')


// object
const name = 'jason'

const me = {
  name,  // 변수의 이름과 key의 이름이 같다면 `name: name => name`으로 생략 가능
  'phoneNumber': '010-1234-5678',
  appleProducts: {
    macbook: '2018pro',
    iphone: '7',
  }
}

me.name  // "ssafy"
me['name']  // "ssafy"
me['phoneNumber']  // "010-1234-5678"
me.appleProducts  // {macbook: "2018pro", iphone: "7"}
me.appleProducts.macbook  // "2018pro"
me.appleProducts.iphone  // "7"

// JSON

const jsonData = JSON.stringify(me)  // 직렬화 => stringify: 문자열로 바꿔라(JS Objext를 String값으로)

const parseData = JSON.parse(jsonData)  // 역직렬화 => String을 JS Object로