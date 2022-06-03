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

// function 함수(arr, b) {
//   arr안에 있는 숫자들 평균내기
//   그걸 b랑 비교해서 b가 더 크면 console.log('올랐네요')
//   b가 더 작으면 console.log('재수추천')
// }
