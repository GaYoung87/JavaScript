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

console.log('============================================================================')

// 2) switch 문
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