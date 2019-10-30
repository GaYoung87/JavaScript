# DOM

- document object model

 ![DOM에 대한 이미지 검색결과](https://t1.daumcdn.net/cfile/tistory/223856335971C6E023) 

- DOM을 통해서 요소들 파악 가능 -> ex. dino.html
- document라는 object를 통해 특정 요소들 파악 가능 -> `document.querySelector()`
  - '.' : 특정 class 선택
  - 'body' : body tag 선택
  - '#' : id 선택
- querySelector를 이용한 요소로 검색한 애 밑에 애들을 또 검색할 수 있다.
- ![image-20191030113551537](C:\Users\student\AppData\Roaming\Typora\typora-user-images\image-20191030113551537.png)

- ![image-20191030125119253](C:\Users\student\AppData\Roaming\Typora\typora-user-images\image-20191030125119253.png)

  ​		페이지는 그대로 있는 채로(새로고침 안함) 변경

- ![image-20191030125504139](C:\Users\student\AppData\Roaming\Typora\typora-user-images\image-20191030125504139.png)

  ​	dino.style.width

- 삭제방법1. 대상을 직접 삭제

  ![image-20191030125638323](C:\Users\student\AppData\Roaming\Typora\typora-user-images\image-20191030125638323.png)

  ![image-20191030125738616](C:\Users\student\AppData\Roaming\Typora\typora-user-images\image-20191030125738616.png) 과 dino.remove()는 동일

  

- 삭제방법2. 대상의 자식요소 삭제하기

  ![image-20191030125950582](C:\Users\student\AppData\Roaming\Typora\typora-user-images\image-20191030125950582.png)

![image-20191030130215881](C:\Users\student\AppData\Roaming\Typora\typora-user-images\image-20191030130215881.png)



- 대상의 요소 삭제 방법

```js
// 대상의 요소 삭제 방법
      dino.remove()  // 대상 직접 삭제
      bg.firstElementChild().remove()  // 첫번째 자식 삭제
      bg.lastElementChild().remove()  // 마지막 자식 삭제
      bg.removeChild(dino)  // dino 자식 삭제
      
      // 실습: body에 자식 element가 하나도 없을 때까지 자식 element를 삭제하는 코드를 작성하세요!
      // 힌트: while => 반복문 진행(자식 존재 여부에 따라)
      while (document.querySelector('body').firstElementChild !== null) {
        document.querySelector('body').firstElementChild.remove()
      }
```

- 새로운 요소 추가

```js
// 새로운 요소 추가 - document.createElement
      dino.remove()  // 기존 그림 삭제
      const newDino = document.createElement('img')  // image tag바꾸기
      newDino  // <img>
      newDino.id = 'newDino'
      newDino  // <img id="newDino"> : id가 생김
      newDino.alt = 'dino picture'
      newDino.src = 'https://store-images.s-microsoft.com/image/apps.38351.14426311725358695.736eb785-1d29-478c-a909-1900849773e9.4247f5ee-1daa-4c97-96c2-23868f1fbc45?mode=scale&q=90&h=200&w=200&background=%230078D7'
```

- 대상에 요소추가

```js
// 대상에 요소 추가하기
      bg.appendChild(newDino)  // 가장 마지막에 추가
      bg.insertBefore(newDino, bg.firstElementChild)  // 가장 처음에 추가
```

- dino를 클릭 시 console창에 '아야!'가 입력되는 이벤트를 등록

```js
dino.addEventListener('click', () => {
    console.log('아야!')
})
```

- document 전체에 event를 걸겠다

```js
// document 전체에 event를 걸겠다
      let x = 0
      let y = 0
      document.addEventListener('keydown', event => {
        // 방향키를 눌렀을 때만 event를 출력할 수 있도록 조건문을 작성
        // 조건문 총 4개 (위, 아래, 왼쪽, 아래쪽)
        if (event.key === 'ArrowUp') {
          message = '위로!'
          x += 20
          dino.style.marginBottom = `${x}px`
        } else if (event.key === 'ArrowDown') {
          message = '아래로!'
          x += 20
          dino.style.marginTop = `${x}px`
        } else if (event.key === 'ArrowRight') {
          message = '오른쪽으로!'
          y += 20
          dino.style.marginLeft = `${y}px`
        } else {
          message = '왼쪽으로!'
          y += 20
          dino.style.marginRight = `${y}px`
        }
        console.log(message)
      })
```

- 공룡 누르면 마우스(공룡) 이동

```js
//공룡의 포지션을 absolute로 만들고 시작! 그래야 움직임
      dino.style.position = 'absolute'
      dino.addEventListener('mouseover', () => {
        console.log('마우스 올라감')
        const newWidth = window.innerWidth * Math.random()  // 0~1사이의 값
        const newHeight = window.innerHeight * Math.random()
        dino.style.left = newWidth + 'px'
        dino.style.top = newHeight + 'px'
      })
```

- 실습!! -> shopping list 만들기!

  ```js
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Shopping List</title>
  </head>
  <body>
    <h1>My shopping list</h1>
    <div>
      Enter a new item:
      <input type="text">
      <button>Add item</button>
    </div>
    <ul>
    </ul>
  
    <script>
      const button = document.querySelector('button')  // button을 클릭하면 일을 수행해주려고
      button.addEventListener('click', () => {  // 누르는 순간
        const input = document.querySelector('input')  // 필요할 때 꺼낼 수 있도록 input 지정
        const value = input.value  // 필요할 때 꺼낼 수 있도록 value 지정
  
        // value를 밑에 li tag가지고 보여주기
        const newItem = document.createElement('li')  // li tag안에 value값 그대로 가지고와서 작성하기
        newItem.innerText = value  // value값을 가지고와서 newItem으로 보내는것
        // li - value가 나오는데, 어디에서 나올지 지정!
        document.querySelector('ul').appendChild(newItem)
      })
    </script>
  </body>
  </html>
  ```

  