//1.윤년구하기
//4로 나누어 떨어지는 해는 윤년이다
//하지만 100으로 나누어 떨어지는 해는 윤년이 아니다
//하지만 400으로 나누어 떨어지는 해는 윤년이다

function isLeapYear(year) {
    return(year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}
console.log(`2020년은 윤년입니까? === ${isLeapYear(2020)}`);
console.log(`2010년은 윤년입니까? === ${isLeapYear(2010)}`);
console.log(`2000년은 윤년입니까? === ${isLeapYear(2000)}`);
console.log(`1900년은 윤년입니까? === ${isLeapYear(1900)}`);