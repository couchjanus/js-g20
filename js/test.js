'use strict';

console.log(typeof({})); 
console.log(typeof(null));


function square(number) {
    return number * number;
}


function sum(number1 , number2) {
    return number1 + number2;
}
sum(1, 2);

// typeof(функции)

// Технически функции считаются объектами, а не отдельным типом дан­ных. 
// Однако функции имеют некоторые специальные свойства, вследствие чего оператор typeof отличает их от других объектов.

console.log(typeof(function(){})); 

// Любой доступ и изменения DOM происходит через объект document.
console.log("Document Element: " + document.documentElement);
// В случае корректной HTML-страницы, это будет <html>.
console.log("Body Element: " + document.body);
// Доступ к свойствам осуществляется по имени свойства (по ключу).
console.log(document.body); // BODY
console.log(document.title); // title
// Объекты являются ассоциативными массивами, так как каждое свойство ассоциировано с именем, через которое можно получить доступ к нему. 
// Доступ к любому имени свойства, которое содержит невалидный JavaScript идентификатор (имя свойства содержит пробел, тире или начинается с цифры), может быть получен с использованием квадратных скобок. 
console.log(document['title']); // title
// Некоторые свойства DOM-элементов можно читать и устанавливать, другие - только читать. 
console.log(document.domain); // localhost
console.log(document.URL); // http://localhost:1234/
console.log(document.title); // Shopping cart
console.log(document.doctype); // <!DOCTYPE html>
console.log(document.head); // head
// Атрибут элемента tagName содержит имя тага в верхнем регистре, только для чтения.

console.log(document.body.tagName); // BODY

console.log(document.all); // HTMLAllCollection { 0: html, 1: head, 2: meta, 3: meta, 4: title, 5: link, 
document.all[27].textContent = "Hello DOM!";
console.log(document.images[0].src);  // 01.jpg

// Все дочерние элементы, включая текстовые находятся в массиве childNodes:

// Все дочерние элементы, включая текстовые находятся в массиве childNodes.
console.log('Все дочерние элементы ', document.body.childNodes);

// Свойство HTMLElement.style возвращает объект CSSStyleDeclaration который описывает атрибут стиля элемента.  Свойство style имеет тот же приоритет в каскаде CSS как и прямая декларация стиля через атрибут style, полезен для настройки стиля отдельного элемента.
// Лучше использовать свойство style чем использовать elt.setAttribute('style', '...'), так как использование свойства style не будет перезаписывать другие CSS свойства которые могут быть специфицированы в атрибуте style.

   document.body.style.backgroundColor = 'red'; // Можно поменять цвет BODY
   document.body.style.color = 'white'; // Можно поменять цвет текста
   // Можно вернуть обратно:
   document.body.style.backgroundColor = '';
   document.body.style.color = '';

//    Свойство cssText позволяет задать несколько CSS стилей одной строкой. При этом все содержимое атрибута style перезаписывается.

   // Пример задания элементу нескольких стилей:
   var elem = document.getElementById('elem');
   elem.style.cssText = 'color: red; font-size: 20px;';
   document.body.style.cssText = "color: #072a38; font: 300 18px/1.6 'Source Sans Pro',sans-serif; margin: 0; padding: 5em 0 2em; text-align: center;";
   // Чтобы предыдущие стили не перезаписывались, можно сделать так:
   var elem = document.getElementById('elem');
   elem.style.cssText += 'color: red; font-size: 20px;';
   

<h1 id="hell">Hello JavaScript!</h1>
var hello = document.getElementById('hell');
hello.textContent = "Hello ID Element!";
hello.innerText = "Hello Inner Text!";
hello.innerHTML = "Hello Inner HTML!";
hello.style.backgroundColor = 'solid 3px indigo';

// Свойство textContent используется для получения и установки текста узла.
document.getElementById('h1').textContent = 'Hello Text Content!';


// Метод getElementsByClassName находит массив объектов определенного класса.
var navItems = document.getElementsByClassName('navbar__item');
navItems[2].textContent = 'Hello Item 2';
navItems[2].style.fontWeight = 800;
navItems[2].style.backgroundColor = 'yellow';

for (let i = 0; i<navItems.length; i++) {
 navItems[i].style.backgroundColor = "#f0"+(10*i)+"0f";
}

// node.getElementsByTagName(tagname) - Находит все дочерние по отношению к node элементы с тегом, указанным в tagname и возвращает их в виде массива объектов.

// getElementsByTagName
document.body.getElementsByTagName('h1')[0].innerHTML="Hello world";

// Свойство textContent используется для получения и установки текста узла.
document.getElementsByTagName('h1')[0].textContent = 'Hello Text Content!';


// Метод querySelectorAll объекта document, и элементов-узлов, принимает строку селектора и возвращает массивоподобный объект, содержащий все найденные элементы.
var odd = document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}
