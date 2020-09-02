'use strict';

console.log(typeof []); // "object"

// Узнать является ли объект массивом можно следующим образом:
console.log(Object.prototype.toString.call([]) === '[object Array]'); // true

// Узнать является ли значение переменной массивом можно с помощью специального метода Array.isArray():
console.log(Array.isArray([])); // true

// Создание нового массива:
var arr = new Array(); // Создали новый пустой массив []
// Создание массивов с помощью литерала массива.
let empty = []; // пустой массив

let numbers = [3, -5, 9, 1, 21]; // массив, состоящий из чисел

//   При создании массивов можно вставлять в конец необязательную завершающую запятую:
let coffee = [
    'Lavazza',
    'Nescafe',
    'Jardin',
];
  
// Элементы в массиве не обязательно должны иметь одинаковый тип данных.
let customArr = [6, true, 'Строка']; // массив, содержащий различные типы данных
  
// Свойство массивов length взаимосвязано с числом свойств.
console.log(customArr.length); // 3

// При работе с массивом может возникнуть ситуация, что элемент массива, к которому вы обратитесь, будет пустым и вернёт undefined. 
let arrWithUndefined = [1,3,5,,,,7];
console.log(arrWithUndefined.length);  

// Обращение к определённому элементу массива выполняется через квадратные скобки по его индексу. Это действие ещё называют операцией индексации.

// создадим массив, состоящий из 3 элементов
let smartphoneColors = ["Black", "White", "Grey"];
// выведем в консоль браузера значения элементов массива smartphoneColors с индексами 0 и 2
console.log("Значение элемента массива smartphoneColors с индексом 0: " + smartphoneColors[0]); 
console.log("Значение элемента массива smartphoneColors с индексом 2: " + smartphoneColors[2]);

// изменим значение элемента массива smartphoneColors с индексом 1 на "Red"
smartphoneColors[1] = "Red"; // ["Black", "Red", "Grey"]
// установим элементу массива smartphoneColors с индексом 3 значение "Blue"
smartphoneColors[3] = "Blue"; // ["Black", "Red", "Grey", "Blue"]
  
// В качестве значений элементов массива можно использовать не только статические значения, но и выражения:
  
let lengthA = 7, widthA = 5;
let point = [lengthA *2, widthA + 4, -2];

console.log(point);

// В качестве значений элементов массива могут использоваться объекты.
  
let points = [
    {x1: 5, y1: 3},
    {x1: 7, y1: 10},
    {x1: 12, y1: 0}
]; // массив, состоящий из 3 объектов
console.log(points);
  
// при копировании значения переменной, содержащей массив, мы на самом деле присваиваем ей не сам массив, а ссылку на него.
  
let names = ['Cat','Dod'];
// скопируем в newNames массив names (в результате эти две переменные будут содержать ссылку на один и тот же массив)
let newNames = names;
console.log( names === newNames ); // true
// добавим в массив новый элемент 'Rat'
newNames[2]='Rat';
console.log(names); // в массиве names теперь уже три элемента
        
// Встроенные методы для работы с массивом автоматически обновляют его длину length.
// Длина length – не количество элементов массива, а последний индекс + 1.
var arrLength = [];
arrLength[1000] = true;
console.log(arrLength[1000]);
console.log(arrLength.length); 
console.log(arrLength[3]); // undefined

// При уменьшении length массив укорачивается. Причем этот процесс необратимый, т.е. даже если потом вернуть length обратно – значения не восстановятся:
        
arrLength.length = 2; // укоротить до 2 элементов
console.log(arrLength[3]);
arrLength.length = 1000; // вернуть length обратно, как было
console.log(arrLength[1000]); // undefined: значения не вернулись                                    

// Удаление элементов массива
// в javascript удалить элемент массива можно при помощи оператора delete:

let myColors = new Array("red", "green", "blue");
delete myColors[1];
console.log(myColors); // red,,blue
console.log(1 + " элемент массива = " + myColors[1]);

// Самый простой способ очистить массив - это arr.length=0.


// for ([начало]; [условие]; [шаг]) выражения

// for (var i = 0; i<10;i++){
//   console.log(i);
// }


// do выражения while (условие);
// цикл do выполнится минимум 1 раз и запускается снова, пока i меньше 5.

// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

// while (условие)  выражения
// Следующий цикл while работает, пока n меньше трёх:

// var n = 0;
// var y = 0;
// while (n < 3) {
//   n++;
//   y += n;
// }

// Метка -  идентификатор, позволяет  ссылаться на какое-то место в программе. 

// var x = 0;
// var z = 0
// labelCancelLoops: while (true) {
//   console.log("Внешний цикл: " + x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Внутренний цикл: " + z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

// цикл while с оператором continue, который срабатывает, когда значение i равно 3. Таким образом, n получает значения 1, 3, 7 и 12.

// var i = 0;
// var n = 0;
// while (i < 5) {
//   i++;
//   if (i == 3) {
//     continue;
//   }
//   n += i;
// }

// Если у continue проставлена метка checkiandj, программа может продолжиться с начала метки checkiandj.

// checkiandj:
//   while (i < 4) {
//     console.log(i);
//     i += 1;
//     checkj:
//       while (j > 4) {
//         console.log(j);
//         j -= 1;
//         if ((j % 2) != 0) {
//           continue checkj;
//         }
//         console.log(j + " чётное.");
//       }
//       console.log("i = " + i);
//       console.log("j = " + j);
// }


// перебор элементов массива addToCarts:
let addToCarts = document.getElementsByClassName('add-to-cart');
console.log(addToCarts.length);

// for (let i = 0; i < addToCarts.length; i++) {
//       console.log(addToCarts[i]);
// }

// for (let i=0; i<addToCarts.length; i++ ){
//    addToCarts[i].addEventListener('click', function () {
//        console.log('click');
//    });
// }

// Для перебора всех свойств из объекта используется цикл по свойствам for..in. 

// for (var key in addToCarts) {
//   // код будет вызван для каждого свойства объекта и выведет имя свойства и его значение
//   console.log( "Ключ: " + key + " значение: " + addToCarts[key] );
// }

// если имя свойства хранится в переменной, то обратиться к нему можно только так, не через точку.

// for (var key in addToCarts[0]) {
//     // код будет вызван для каждого свойства объекта и выведет имя свойства и его значение
//     console.log( "Ключ: " + key + " значение: " + addToCarts[0][key] );
// }

// в консоли можно будет увидеть все свойства DOM-объекта
// console.dir(addToCarts[0]);

// addToCarts[0].addEventListener('click', function (e) {
//     console.dir(e);
// });

// let theTarget = event.target - Ссылка на объект, который отправил событие. 
// Свойство event.target может быть использовано для реализации делегирования событий.
// for (let i=0; i<addToCarts.length; i++ ){
//    addToCarts[i].addEventListener('click', function (e) {
//        // console.log(e);
//        console.log(e.target);
//    });
// }

// for (let i=0; i<addToCarts.length; i++ ){
//     addToCarts[i].addEventListener('click', function (e) {
//         e.target.style.display = 'none';
//     });
// }

// Свойство parentNode - указывает на родительский узел элемента или null для узлов, не имеющих родителя, таких как Document.

// for (let i=0; i<addToCarts.length; i++ ){
//    addToCarts[i].addEventListener('click', function (e) {
//        console.log(e.target.parentNode);
//    });
// }

// for (let i=0; i<addToCarts.length; i++ ){
//   addToCarts[i].addEventListener('click', function (e) {
//       console.log(e.target.parentNode.parentNode.parentNode.parentNode);
//   });
// }

// Свойство childNodes - доступный для чтения объект, обеспечивающий представление дочерних узлов.
// for (let i=0; i<addToCarts.length; i++ ){
//    addToCarts[i].addEventListener('click', function (e) {
//        console.log(e.target.parentNode.parentNode.parentNode.parentNode.childNodes);
//    });
// }
// Каждый узел в свою очередь, кроме текстовых и комментариев, имеет свои наборы узлов, так например маркированный список ul состоит из текстовых узлов и элементов li. В целом и получается, что дерево DOM состоит из множества таких узлов, если представлять DOM в виде объекта Node.
// Свойство Node.childElementCount предназначено только для чтения и возвращает число дочерних элементов узла.

// for (let i=0; i<addToCarts.length; i++ ){
//    addToCarts[i].addEventListener('click', function (e) {
//        console.log(e.target.parentNode.parentNode.parentNode.parentNode.childNodes);
//        console.log(e.target.parentNode.parentNode.parentNode.parentNode.childElementCount);
//    });
// }

// Свойство Node.children возвращает коллекцию (HTMLCollection) дочерних элементов узла.
// Если у узла детей нет, она будет пустой. Определить это можно, обратившись к свойству length, которое содержит в себе количество элементов в коллекции.

// for (let i=0; i<addToCarts.length; i++ ) {
//     addToCarts[i].addEventListener('click', function (e) {
//         let y = 180;
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0]);
//         e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].style.transform = 'rotateY(180deg)';
//     });
// }

//  Первый и последний дочерние узлы или null, если данный узел не имеет дочерних узлов.
//  firstChild - первый дочерний узел элемента,
//  lastChild - последний дочерний узел.
 //  console.log(e.target.parentNode.parentNode.parentNode.parentNode.firstChild);
//  console.log(e.target.parentNode.parentNode.parentNode.parentNode.lastChild);
 
 
//  Братскими называются два узла, имеющие одного и того же родителя. Порядок их следования соответствует порядку следования в документе. Эти свойства связывают узлы в двусвязный список.
//  previousSibling - узел до элемента.
//  console.log(e.target.parentNode.parentNode.parentNode.parentNode.lastChild.previousSibling);
 
//  Свойства nextSibling - узел после элемента,
//  console.log(e.target.parentNode.parentNode.parentNode.parentNode.firstChild.nextSibling);

// свойство firstElementChild Доступное только для чтения
// свойство ParentNode.firstElementChild возвращает первый дочерний элемент объекта (Element) или null если дочерних элементов нет.

// for (let i=0; i<addToCarts.length; i++ ) {
//     addToCarts[i].addEventListener('click', function (e) {
//         let y = 180;
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.firstElementChild);
//         e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.style.transform = 'rotateY(180deg)';
//     });
// }

// Свойство ParentNode.lastElementChild только для чтения. Возвращает последний дочерний элемент объекта или null если нет дочерних элементов.

// console.log(e.target.parentNode.parentNode.parentNode.parentNode.lastElementChild);
// for (let i=0; i<addToCarts.length; i++ ) {
//     addToCarts[i].addEventListener('click', function (e) {
//         let y = 180;
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.lastElementChild);
//         e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.style.transform = 'rotateY(180deg)';
//     });
// }

// Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если элементов нет.

// for (let i=0; i<addToCarts.length; i++ ){
//     addToCarts[i].addEventListener('click', function (e) {
//         e.target.closest(".position-relative").firstElementChild.lastElementChild.style.transform = 'rotateY(180deg)';
//     });
// }

