'use strict';

let cart = [
  {
    id:2,
    image:"images/product-2.jpg",
    name:"Kui Ye Chen’s AirPods",
    price:121,
    amount:3
  },
  {
    id:4,
    image:"images/product-4.jpg",
    name:"Kui Ye Chen’s AirPods",
    price:321,
    amount:1
  }
];

// Используя цикл forEach:
// let total = 0;
let tempTotal = 0;
let itemsTotal = 0;

// cart.forEach(function (item) {
//     // The plus sign just coerces item.amount from a String to a Number
//     itemsTotal += (+item.amount);
// });

// cart.map(function (item) {
//   itemsTotal += (+item.amount);
//   tempTotal += item.price * item.amount;
// });

// console.log(itemsTotal, tempTotal);

// Решение с reduce:

itemsTotal = cart.reduce(function (previous, current) {
  // console.log(current);
  return previous + current.amount;
}, 0);

// Using arrow functions
tempTotal = cart.reduce((previous, current) => previous + current.price * current.amount, 0);

console.log(itemsTotal, tempTotal);



// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

// Если fromIndex больше или равен длине массива, то возвращается false. При этом поиск не производится.

var arr = ['a', 'b', 'c'];
arr.includes('c', 3);   // false
arr.includes('c', 100); // false

// Если fromIndex отрицательный, то вычисляется индекс, начиная с которого будет производиться поиск элемента searchElement. Если вычисленный индекс меньше нуля, то поиск будет производиться во всём массиве.

// длина массива равна 3
// fromIndex равен -100
// вычисленный индекс равен 3 + (-100) = -97

var arr = ['a', 'b', 'c'];
arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true


// console.log(products.filter(item => item.category));

products.forEach(function (item) {
    if (item.category == "electronics") {
        data.push(item);
    }
});

// С filter:
let data = products.filter(function (item) {
    return item.category == "electronics";
});
 
// Using ES6
let data = products.filter((item) => item.category == "electronics" );


const category = "electronics";

// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

// console.log(products.filter(item => item.category.includes(category)));

// const category = target.dataset.category;
// Создаем фильтр

const categoryFilter = items => items.filter(item => item.category.includes(category));

console.log(categoryFilter(products));
