//1. 369게임

function 삼육구(number) {
  let nums = number.toString().split('');
  let clap = [];

  for (let num of nums) {
    if (num === '3' || num === '6' || num === '9') {
      clap.push('짝');
    }
  }
  return clap;
}

console.log(삼육구 (123));
console.log(삼육구 (369));
console.log(삼육구 (306));


function 삼육구(number){
  let nums = number.toString().split('');
  let clap = [];

  for (let num of nums) {
    if (num == '3' || num == '6' || num == '9') {
      clap.push('짝');
    }
  }
  return clap;
}

function 삼육구(number) {
  let nums = number.toString().split('');
  let clap = [];

  for(let num of nums) {
    if(num == '3' || num == '6' || num == '9') {
      clap.push('짝');
    }
  }
  return clap;
}

//2. 별트리만들기
const level = 5;
for (let i = 1; i <= level; i++) {
  console.log(' '.repeat(level - 1) + ('*'.repeat(i * 2 - 1)));
}

const level =5;
for(let i = 1; i <= level; i++) {
  console.log(' '.repeat(level - 1) + ('*'.repeat(i * 2 - 1)));
}

const level = 5;
for(let i = 0; i <= level; i++) {
  console.log(' '.repeat(level - 1) + ('*'.repeat(i * 2 - )));
}


/*3. 퀴즈판독기 만들기
  <p>태조 이성계가 태어난 연도는?</p>
  <input type="text" id="answer" />
  <button id="send-answer" type="submit">제출</button>*/

  /*1. 유저가 답을 맞추면 alert('성공')
    2. 유저가 답을 3번 찍어서 못맞추면 alert('멍청아')
    3. 2번까지는 틀렸으면('땡')*/

const sendBtn = document.querySelector('#send-answer');
const answer = document.querySelector('#answer');
let count = 0;
sendBtn.addEventListener('click', function () {
  if (answer.value == 1335) {
    alert('정답');
    answer.value = '';
  } else if (answer.value != 1335 && count < 3) {
    alert('땡');
    answer.value = '';
  } else {
    alert('멍청아~~');
    answer.value = '';
  }
})

const sendBtn = document.querySelector('#send-answer');
const answer = document.querySelector('#answer');
let count = 0;

sendBtn.addEventListener('click', function () {
  if (answer == 1335) {
    alert('정답');
  } else if (answer != 1335 && coount < 3) {
    alert('땡!');
  } else {
    alert ('멍청아~~~') 
  }
})

const sendBtn = document.querySelector('#send-answer');
const answer = document.querySelector('#answer');
let count = 0;

sendBtn.addEventListener('click', function () {
  if (answer == 1335) {
    alert('정답');
  } else if (answer != 1335 && coount < 3) {
    alert('땡!');
  } else {
    alert ('멍청아~~~') 
  }
})
//4. (DOM)setInterval로 알림창 만들기
<div class="alert alert-danger">
<span id="num">5</span>초이내 구매 시 사은품 증정!
</div>

let count = 5;
let timer = setInterval (function(){
  count--;
  if (count >= 0) {
    document.querySelector('#num').textContent = count;
  } else {
    clearTimeout(timer);
    document.querySelector('.alert-danger').style.display = 'none';
  }
}, 1000);

let count = 5;
let timer = setInterval (function () {
  count--;
  if (count >= 0) {
    document.querySelector('#num').textContent = count;
  } else {
    clearTimeout(timer);
    document.querySelector('.alert-danger').style.display ='none';
  }
}, 1000);

let count = 5;
let timer = setInterval (function () {
  count--;
  if (count >= 0) {
    document.querySelector('#num').textContent = count;
  } else {
    clearTimeout(timer);
    document.querySelector('.alert-danger').style.display ='none';
  }
}, 1000);


/*5. 가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수를 만들어봅시다.
근데 첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인해줘야합니다.*/

function cal(a, b) {
  let result = a * 0.9;
  if (b == 1) {
    result = result - 1.5
  }
  return parseInt(result.toFixed(2));
}

console.log(cal(10.3, false))

function cal(a, b) {
  let result = a * 0.9;
  if (b == 1) {
    result = result - 1.5
  }
  return parseInt(result.toFixed(2));
}
console.log(cal(10.3, false))

function cal(a, b) {
  let result = a * 0.9;
  if (b == 1) {
    result = result - 1.5
  }
  return parseInt(result.toFixed(2));
}
console.log(cal(10.3, false))






