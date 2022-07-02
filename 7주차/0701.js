const obj1 = {
  id: 1,
  name: "라이언",
  age: 3,
  habit: "coding",
};

//객체 구조분해 {}
const { id, name, age, habit } = obj1;
console.log(`사용자의 이름은 ${name}입니다`);

//배열 구조분해 []
const fruits = ["사과", "바나나", "체리"];

//사과, 바나나만 변수에 담아서 출력하시오.
const [a, b, _] = fruits;
console.log(a, b);
