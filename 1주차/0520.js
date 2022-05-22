//과일 가격이 낮은 순으로 정렬하시오.
let fruit = [
    { name: 'Banana', price: 4000},
    { name: 'WaterMelon', price: 6000},
    { name: 'Apple', price: 2000},
    { name: 'Melon', price: 8000},
    { name: 'Mango', price: 10000},
];

fruit.sort(function(a, b){
    return a.price - b.price;
})
console.log(fruit);



//과일 가격이 높은 순으로 정렬하시오.
let fruit = [
    { name: 'Banana', price: 4000},
    { name: 'WaterMelon', price: 6000},
    { name: 'Apple', price: 2000},
    { name: 'Melon', price: 8000},
    { name: 'Mango', price: 10000},
];

fruit.sort (function (a, b) {
    return b.price - a.price;
})
console.log(fruit);




