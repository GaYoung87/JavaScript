function sleep_3() {
  setTimeout(function() {
    console.log('Wake up!')
  }, 3000)
}
// setTimeout: 비동기적
console.log('Start Sleeping')
// 처리가 다 될때 제대로 실행이 됨.(비동기적-다른 작업과 함께 가능!)
sleep_3()
console.log('End of Program')

// 보통 자바스크립트가 한번에 두가지이상 업무 가능 -> 요청, 기다려라는 처리 하기위해서는
// 언제 시행될지 모르는 함수들은 특정 작업이 끝나면 작업해줘! 라는 말로 함.
// 작업이 끝나고 난 다음 실행할 함수들을 콜백함수에 적용


