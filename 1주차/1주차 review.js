/*
1.윤년구하기
4로 나누어 떨어지는 해는 윤년이다
하지만 100으로 나누어 떨어지는 해는 윤년이 아니다
하지만 400으로 나누어 떨어지는 해는 윤년이다
*/

function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}
console.log('2020년은 윤년입니까? === ${isLeapYear(2020)}');
console.log('2010년은 윤년입니까? === ${isLeapYear(2010)}');
console.log('2000년은 윤년입니까? === ${isLeapYear(2000)}');
console.log('1900년은 윤년입니까? === ${isLeapYear(1900)}');


/*
2.a부터 b까지 더하는 함수
a부터 b까지라는 범위를 지정했을 때 범위 안에 있는 숫자를 모두 더하는 함수를 만들어봅시다. 예를 들어 1부터 5까지 더하라고 하면 매개변수로 1과 5를 입력하고, 리턴값으로 1부터 5까지 더한 값인 15가 나오면 됩니다.*/

function sumAll(a, b) {
    let output = 0;
    for (let i = a; i <= b; i++) {
        output += i
    }
    return output;
}

console.log(`1부터 100까지의 합은? ${sumAll(1, 5)}`);


/*
3.각각 객체에 학생들의 이름, 총점, 평균을 구하시오.(객체를 생성하는 함수)
이름, 국어, 영어, 수학, 과학
('구름', 87, 98, 88, 90)
('별이', 92, 98, 96, 88)
('겨울', 76, 96, 94, 86)
('바다', 98, 52, 98, 92)
*/

function createStudent (이름, 국어, 영어, 수학, 과학) {
    return{
        //속성을 선언합니다
        이름: 이름,
        국어: 국어,
        영어: 영어,
        수학: 수학,
        과학: 과학,
        //메소드를 선언합니다
        getSum () {
            return this.국어 + this.영어 + this.수학 + this.과학;
        },
        getAverage () {
            return this.getSum () / 4;
        }
        toString () {
            return `${this.이름}\t${this.getSum()}점\t${this.getAverage}점\n`;
        }
    }
}

const student = [];
student.push(createStudent('구름', 87, 98, 88, 90));
student.push(createStudent('별이', 92, 98, 96, 88));
student.push(createStudent('겨울', 76, 96, 94, 86));
student.push(createStudent('바다', 98, 52, 98, 92));

let output = `이름\t총점\t평균\n`;
for (const s of student) {
    output += s.toString()
}
console.log(output);


/* 3-1. 각각 객체에 학생들의 이름, 총점, 평균을 구하시오.(class로 만들기)*/

class Student {
    constructor (이름, 국어, 영어, 수학, 과학) {
        this.이름 = 이름
        this.국어 = 국어
        this.영어 = 영어
        this.수학 = 수학
        this.과학 = 과학
    }
    //메소드를 선언합니다
    getSum () {
        return this.국어 + this.영어 + this.수학 + this.과학
    }
    getAverage () {
        return this.getSum / 4;
    }
    toString () {
        return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`;
    }
}

const student = [];
student.push(createStudent('구름', 87, 98, 88, 90));
student.push(createStudent('별이', 92, 98, 96, 88));
student.push(createStudent('겨울', 76, 96, 94, 86));
student.push(createStudent('바다', 98, 52, 98, 92));

let output = '이름\t총점\t평균\n'
for (const s of student) {
    output += s.toString()
}
console.log(output);



/*
4. 매개변수호 숫자들의 배열을 입력하면 배열 내부에 있는 숫자 중에서 가장 작은값을 구하는 함수를 만드시오.
최솟값을 구하는 함수 [52, 273, 32, 103, 275, 24, 57] 
*/

function min(array) {
    let output = array[0];
    for (const item of array) {
        if (output > item) {
            output = item
        }
    }
    return output;
}

const testArray = [52, 273, 32, 103, 275, 24, 57] ;
console.log(`${testArray}중에서`);
console.log(`최솟값 = ${min(testArray)}`);






//5. 과일 가격이 낮은 순으로 정렬하시오.
let fruit = [
    { name: 'Banana', price: 4000},
    { name: 'WaterMelon', price: 6000},
    { name: 'Apple', price: 2000},
    { name: 'Melon', price: 8000},
    { name: 'Mango', price: 10000},
];

fruit.sort(function (a, b) {
    return a.price - b.price;
})

console.log(fruit);




//5-1. 과일 가격이 높은 순으로 정렬하시오.
let fruit = [
    { name: 'Banana', price: 4000},
    { name: 'WaterMelon', price: 6000},
    { name: 'Apple', price: 2000},
    { name: 'Melon', price: 8000},
    { name: 'Mango', price: 10000},
];

fruit.sort(funstion (a, b) {
    return b.price - a.price;
})
console.log(fruit);




/*6. 제코베 34번 문제
민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.
민주를 위해 키가 주워지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다)

입출력

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES*/


const unsorted = `176 156 155 165 166 169`;
let sorted = '';

sorted = (unsorted.split(' ').sort(function (a, b) {
    return a -b;
})).join(' ');

console.log(sorted);

if(unsorted === sorted) {
    console.log('Yes');
} else {
    console.log('No');
}


