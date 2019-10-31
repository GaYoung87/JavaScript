const axios = require('axios')
// 자바스크립트에서 XHR을 만들어 ~~해주는 라이브러리
// axios -> 요청보내기 (python의 requests와 유사)


// XHR이라는 사용 도와주기 위함
const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url)
  .then(function(response) {
    console.log(response.data)
  }
)

//