//이름찾기('철수'); 라고 쓰면 콘솔창에 '있어요'라는 글자가 떠야합니다.
//이름찾기('명수'); 라고 쓰면 콘솔창에 아무 글자도 뜨지 않아야합니다.
//철수의 이름은 딱 한번만 출력되어야 합니다

const arr = ['철수', '영희', '철수', '흥민', '영희'];

function nameList(name) {
  for (let i = 0; i < arr.length; i++) {
    if (name == arr[i]) return '있어요';
  }
}

console.log(nameList('철수'));
