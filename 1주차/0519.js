//매개변수호 숫자들의 배열을 입력하면 배열 내부에 있는 숫자 중에서 가장 작은값을 구하는 함수를 만드시오.
//최솟값을 구하는 함수 [52, 273, 32, 103, 275, 24, 57]


function min(array) {
    let output = array[0];
    for (const item of array) {
        if (output > item) {
            output = item
        }
    }
    return output;
}

const testArray = [52, 273, 32, 103, 275, 24, 57];
console.log(`${testArray}중에서`);
console.log(`최솟값 = ${min(testArray)}`);