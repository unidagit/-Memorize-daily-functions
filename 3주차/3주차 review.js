// 2.요일 확인 함수
// 월 a, 일 b를 입력받아 무슨 요일인지 리턴하는 함수를 완성하세요.

// getDay() : 일~토 (0~6)로 표현하기 때문에 "SUN"부터 배열에 넣기
// getMonth()도 0부터 시작

const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function dayCheck(a, b) {
  const theDay = new Date(`2020-${a}-${b}`);
  console.log(day[theDay.getDay()]);
}

solution(5, 5);

//3.구구단만들기
for (let k = 2; k < 10; k++) {
  for (let i = 1; i < 10; i++) {
    console.log(k * 1);
  }
}

//4.이름찾기('철수'); 라고 쓰면 콘솔창에 '있어요'라는 글자가 떠야합니다.
//이름찾기('명수'); 라고 쓰면 콘솔창에 아무 글자도 뜨지 않아야합니다.
//철수의 이름은 딱 한번만 출력되어야 합니다

const arr = ['철수', '영희', '철수', '흥민', '영희'];

function nameList(name) {
  for (let i = 0; i < arr.length; i++) {
    if (name == arr[i]) return '있어요';
  }
}

console.log(nameList('철수'));

// 5.function 함수(arr, b) {
//   arr안에 있는 숫자들 평균내기
//   그걸 b랑 비교해서 b가 더 크면 console.log('올랐네요')
//   b가 더 작으면 console.log('재수추천')
// }

function 성적(arr, b) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  let output = result / arr.length;
  let a = 0;

  if (output < b) {
    a = b - output;
    console.log(`평균보다 ${a}점이 올랐네요`);
  } else if (output > b) {
    a = output - b;
    console.log(`평균보다 ${a}점이 떨어졌네요 재수추천`);
  }
}

성적([10, 20, 30, 40, 50], 40);
성적([40, 40, 40], 20);
