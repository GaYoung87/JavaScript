# Node.js

- java script하나로 DB도 가능!

- node.js에서 패키지 매니저 - npm



### 00_blocking

```python
# python
from time import sleep

def sleep_3():
    sleep(3)
    print('Wake up!')

print('Start Sleeping')
sleep_3()
print('End of Program')

# $ python 00_blocking.py
# Start Sleeping
# Wake up!
# End of Program
```

```js
// javascript
function sleep_3() {
  setTimeout(function() {
    console.log('Wake up!')
  }, 3000)
}

console.log('Start Sleeping')
sleep_3()
console.log('End of Program')

// $ node 00_blocking.js
// Start Sleeping
// End of Program
// Wake up!
```



### Call Stack

```js
function foo() {
  throw new Error('SessionStack will help you resolve crashes :)');
}
function bar() {
  foo();
}
function start() {
  bar();
}
start();
```

Event Loop :  https://poiemaweb.com/img/event-loop.gif

참고! (좋은 사이트) :  http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D 

```js
function printHello() {
    console.log('Hello from baz');
}
// call stack이 비워지면 3초 이상 기다려야할 수도 있다.
// call stack이 비워지면 callback queue가 실행시키고 종료
function baz() {
    setTimeout(printHello, 3000);
}

function bar() {
    baz();
}

function foo() {
    bar();
}

foo();
```



### XMLHttpReqeust

- 지금까지는 tag로 요청 보내면 페이지가 새로고침됨
- `XMLHttpReqeust` : 새로고침이 되지 않은 상태에서 URL로부터 데이터를 받아올 수 있다.
- `AJAX` : ex. 인스타그램 좋아요, follow기능 / 네이버 급상승검색어(XHR로 사용)

```js
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
```

