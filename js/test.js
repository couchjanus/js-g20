'use strict';
const overlayGroup = [
    {
        liClass:'list-inline-item m-0 p-0 like-this',
        aClass:'btn btn-sm btn-outline-dark',
        icon:'fas fa-heart',
        capture:''
    },
    {
        liClass:'list-inline-item m-0 p-0 add-to-cart',
        aClass:'btn btn-sm btn-outline-dark',
        icon:'fas fa-dolly-flatbed',
        capture:'Add to cart'
    },
    {
        liClass:'list-inline-item m-0 p-0 view-this',
        aClass:'btn btn-sm btn-outline-dark',
        icon:'fas fa-expand',
        capture:''
    },
];


const socialGroup = [
    {
        liClass:'',
        aClass:'footer-link twitter',
        icon:'fab fa-twitter',
        capture:'Twitter'
    },
    {
        liClass:'',
        aClass:'footer-link facebook',
        icon:'fab fa-facebook',
        capture:'Facebook'
    },
    {
        liClass:'',
        aClass:'footer-link finstagram',
        icon:'fab fa-instagram',
        capture:'Instagram'
    },
    {
        liClass:'',
        aClass:'footer-link google-plus',
        icon:'fab fa-google-plus',
        capture:'Google'
    },
];

let makeLiGroup = (group, ulClass, header='') => {
    let lis = '';
    group.forEach(function(item){
        lis+=`<li class="${item.liClass}">
            <a class="${item.aClass}" href="#">
                <i class="${item.icon}"></i> ${item.capture}
            </a>
        </li>`; 
    });

    return `
        ${header}
        <ul class="${ulClass}">
            ${lis}
        </ul>`;
}

function createProductMarkup(data) {
    return `
    <div class="col-xl-3 col-lg-4 col-sm-6">
           <div class="product text-center" data-id="${data.id}">
               <div class="position-relative mb-3">
                   <a class="d-block" href="detail.html">
                       <img class="img-fluid w-100 product-img" src="${data.image}" alt="...">
                    </a>
                    <div class="product-overlay">${makeLiGroup(overlayGroup, 'mb-0 list-inline')}</div>
               </div>
               <h6><a class="reset-anchor product-name" href="detail.html">${data.name}</a></h6>
               <p class="small text-muted product-price" data-price="${data.price}">${data.price}</p>
           </div>
       </div>
    `
} 
document.querySelector('footer div.row').lastElementChild.innerHTML=makeLiGroup(socialGroup, 'list-unstyled footer-socials social-icon', '<h6 class="text-uppercase">Social media</h6>');  

// 
// краткий синтаксис, неявно возвращает результат
let func = x => x * x;  
// блочный синтаксис, явно возвращает результат
let func = (x, y) => { 
    return x + y; 
}; 

let empty = () => {}; // Пустая стрелочная функция возвращает undefined
// Возвращаемые объектные строки (литералы) используют сокращённый синтаксис: 
// params => {object:literal} будет работать не так, как ожидается.
var func = () => { foo: 1 }; // Вызов func() возвращает undefined!
var func = () => { foo: function() {} }; // SyntaxError: function statement requires a name
// Это происходит потому что код в скобках ({}) распознаётся как цепочка выражений (т.е. foo трактуется как наименование, а не как ключ в объектной строке). 
// Не забывайте оборачивать скобками объектные строки. var func = () => ({ foo: 1 });
// Когда возвращаете литеральное выражение объекта, заключите тело в скобки
  params => ({foo: bar})
(() => 'foobar')(); // Вернёт "foobar"/ (Это Immediately Invoked Function Expression
var simple = a => a > 15 ? 15 : a;
simple(16); // 15
let max = (a, b) => a > b ? a : b;

let cart = [];
const cartItems = document.querySelector(".cart-items");
const clearCart = document.querySelector(".clear-cart");

function addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.setAttribute('id', item.id);
    div.innerHTML = `<!-- cart item -->
        <div class="picture product-img">
            <img src="${item.image}" alt="${item.name}" class="img-fluid w-100">
        </div>
        <div class="product-name p-auto">${item.name}</div>
        <div class="remove-btn text-right">
            <a class="reset-anchor m-auto" href="#">
                <i class="fas fa-trash-alt" data-id=${item.id}></i>
            </a>
        </div>
        <div class="quantity">
            <div class="border d-flex justify-content-around mx-auto">
                <i class="fas fa-caret-left inc-dec-btn" data-id=${item.id}></i>
                <span class="border-1 p-1 amount">${item.amount}</span>
                <i class="fas fa-caret-right inc-dec-btn" data-id=${item.id}></i>
            </div>
        </div>
        <div class="price">
            $<span class="product-price">${item.price}</span>
        </div>
    `;
    cartItems.appendChild(div);
}
// 
const scores = [85, 90, 74];

const [maths, geography, biology] = scores;
console.log(maths);
console.log(geography);
console.log(biology);

// операции над массивами: 
let arr = [5, 6, 13, 0, 1, 18, 23];
let zero = arr.find(item => item == 0);
let even = arr.filter(v => v % 2 == 0);


// 

function addToCarts() {
    const addToCartButtons = [...document.querySelectorAll(".add-to-cart")];
    addToCartButtons.forEach(button => {
        button.addEventListener("click", event => {
          // add to cart
          let cartItem = { ...getProduct(event.target.closest('.product').getAttribute('data-id')), amount: 1 };
          cart = [...cart, cartItem];
          // add to DOM
          addCartItem(cartItem);
        });
    });
}


function getProduct(id) {
    return products.find(product => product.id === +(id));
}

function clear() {
    cart = [];
    while (cartItems.children.length > 0) {
        cartItems.removeChild(cartItems.children[0]);
    }
}



const filterItem = (cart, curentItem) => cart.filter(item => item.id !== +(curentItem.dataset.id));

const findItem = (cart, curentItem) => cart.find(item => item.id === +(curentItem.dataset.id));

function renderCart() {

    clearCart.addEventListener("click", () => {
      clear();
    });
    
    cartItems.addEventListener("click", event => {
      if (event.target.classList.contains("fa-trash-alt")) {
        cart = filterItem(cart, event.target);
        cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
      } else if (event.target.classList.contains("fa-caret-right")) {
        let tempItem = findItem(cart, event.target);
        tempItem.amount = tempItem.amount + 1;
        event.target.previousElementSibling.innerText = tempItem.amount;
      } else if (event.target.classList.contains("fa-caret-left")) {
        let tempItem = findItem(cart, event.target);
        tempItem.amount = tempItem.amount - 1;
        if (tempItem.amount > 0) {
        event.target.nextElementSibling.innerText = tempItem.amount;
        } else {
          cart = filterItem(cart, event.target);
          cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
        }
      }
    });
  }
