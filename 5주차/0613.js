// 입출력

// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// const word = prompt('문장을 입력해주세요');

const word = 'hqllo my namq is hyqwon';

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, 'q', 'e'));
