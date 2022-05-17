//a부터 b까지 더하는 함수
/*a부터 b까지라는 범위를 지정했을 때 범위 안에 있는 숫자를 모두 더하는 함수를 만들어봅시다. 예를 들어 1부터 5까지 더하라고 하면 매개변수로 1과 5를 입력하고, 리턴값으로 1부터 5까지 더한 값인 15가 나오면 됩니다.*/

function sumAll(a, b) {
    let output = 0;
    for(let i = a; i <= b; i++) {
        output += i;
    }
    return output;
}
console.log(`1부터 100까지의 합은: ${sumAll(1, 100)}`)