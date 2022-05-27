/*가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수를 만들어봅시다.
근데 첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인해줘야합니다.*/


function cal(a, b) {
    let result = a * 0.9;
    if(b == 1){
        result = result - 1.5
    }
    return parseInt(result.toFixed(2));
}

console.log(cal(10.3, false))
console.log(cal(70, false))
console.log(cal(10, false))