'use strict';

// Метод createElement создает элемент html, тег которого передается в качестве параметра. 

let col = document.createElement("div");
const p = document.createElement("p");
const product = document.createElement('div');
let anchor = document.createElement("a");

// createTextNode(text): создает и возвращает текстовый узел. 
let anchorText = document.createTextNode("Joemalone Women prefume");
// можем воспользоваться свойством textContent:
p.textContent = "$25";

// Метод appendChild добавляет элемент в конец списка дочерних элементов родителя. 
// Если элемент уже существует он удаляется из текущего родителя и вставляется заново.
//  <h6><a class="reset-anchor" href="detail.html">Joemalone Women prefume</a></h6>
anchor.appendChild(anchorText);

// <h6> <a class="reset-anchor" href="detail.html">Joemalone Women prefume</a></h6>
anchor.href = "detail.html";
product.className = "product";

// 
product.appendChild(p);
// 
col.appendChild(product);

const row = document.querySelector('.row');
row.appendChild(col);

// Метод parent.insertBefore(узел, место вставки)
// узел - Ссылка на вставляемый узел.
// место вставки - Ссылка на элемент, перед которым необходимо вставить новый узел. Если аргумент равен null, то узел вставляется в конец родителя (то есть сработает, как appendChild()).
// Данный метод позволяет вставить элемент в любое место, а не только в конец родителя.

const h6 = document.createElement("h6");
h6.appendChild(anchor);

// parent
let parent = document.querySelector('.product');
// console.log(parent);

// Вставка в самое начало родителя, то есть перед первым узлом
parent.insertBefore(h6, parent.firstChild);

const positionRelative = document.createElement("div");

const productOverlay = document.createElement("div");

const ul = document.createElement("ul");
ul.className = "mb-0 list-inline";

let li = document.createElement("li");
li.className="list-inline-item m-0 p-0";

let a = document.createElement("a");
a.className = "btn btn-sm btn-dark add-to-cart";
a.href = "#";
a.textContent = "Add to cart";

li.appendChild(a);
// ul.appendChild(li);
// Вставка в конец родителя, аналогично appendChild()
ul.insertBefore(li, null);

productOverlay.appendChild(ul);
positionRelative.appendChild(productOverlay);

parent.insertBefore(positionRelative, parent.firstChild);

// Вставка перед конкретным элементом parentChild
let parentChild = document.querySelector('.list-inline li');
let liElement = document.createElement('li');
liElement.innerHTML = '<a class="btn btn-sm btn-outline-dark" href="#"><i class="far fa-heart"></i> Like</a>';
ul.insertBefore(liElement, parentChild);
// Вставка после конкретного элемента parentChild
ul.insertBefore(liElement, parentChild.nextSibling);

// Добавить новый узел в документ можно простой вставкой HTML-кода в виде строки. Для этого используется метод insertAdjacentHTML().
// parent.insertAdjacentHTML(место вставки, HTML-код)
// место вставки - Позиция, куда необходимо вставить код. Это место указывается относительно самого элемента и может иметь одно из следующих значений:
// beforebegin - непосредственно перед открывающим тегом.
// afterbegin - сразу после открывающего тега.
// beforeend - непосредственно перед закрывающим тегом.
// afterend - сразу после закрывающего тега.

ul.insertAdjacentHTML('beforeend', '<li class="list-inline-item mr-0"><a class="btn btn-sm btn-outline-dark" href="#"><i class="fas fa-expand"></i>View</a></li>');


// Метод replaceChild() удаляет один узел и вставляет на его место новый.
// parent.replaceChild(новый узел, старый узел)
// новый узел - Ссылка на вставляемый узел.
// старый узел - Ссылка на удаляемый узел.


let li1 = document.querySelector('li.list-inline-item'); // ссылка на 1 существующий элемент
console.log(li1);

let li2 = li1.nextSibling; // ссылка на 2 существующий элемент
console.log(li2);

// Метод возвращает ссылку на удаленный узел.
let replaceLi = ul.replaceChild(li1, li2); // заменяем элемент li1 на li2

ul.insertBefore(replaceLi, li1);

// <script id="template-item" type="text/template">
// </script>

// Браузер содержимое тега <script> считает простым текстом, а так как в атрибуте type у него указан неизвестный ему MIME-тип, то интерпретировать или отображать он его не станет. 
// Содержимое тега script можно получить после загрузки документа, обратившись к нему по id.


let templateSource = document.getElementById("template-item").innerHTML;      

const section = document.createElement("section");
section.classList = "text-center border border-light p-5 my-3";

section.innerHTML = templateSource;
document.querySelector('.container').appendChild(section);


let content = document.getElementById("cartItem").content;  
// document.querySelector('.cart-items').appendChild(content);

// Для использования template его необходимо активировать. 

let addToCart = document.getElementById('addToCart');

addToCart.addEventListener('click', function(){
    document.querySelector('.cart-items').appendChild(content);
});

// Самый простой способ активации заключается в создании deep copy свойства .content с использованием метода  document.importNode().  Свойство .content является read-only.

// addToCart.addEventListener('click', function(){
//     document.querySelector('.cart-items').append(document.importNode(content, true));
// });
