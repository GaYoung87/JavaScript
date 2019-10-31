// Call Stack
function printHello() {
  console.log(4)
  console.log('Hello from baz');
}

function baz() {
  console.log(3)
  setTimeout(printHello, 3000);
}

function bar() {
  console.log(2)
  baz();
}

function foo() {
  console.log(1)
  bar();
}

foo();


const XHR = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/posts/1'
XHR.open('GET', url) // get요청으로 url을 보낼 준비함

// 요청 보냈을 때 응답 받으면 그 함수를 처리해달라!

function printHello() {
  console.log(4)
  console.log('Hello from baz');
 }
 function baz() {
  console.log(3)
  setTimeout(printHello, 3000);
 }
 function bar() {
  console.log(2)
  baz();
 }
 function foo() {
  console.log(1)
  bar();
 }
 foo();