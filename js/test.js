'use strict';

const product = {
    id:1,
    image:"images/product-1.jpg",
    name:"Kui Ye Chen’s AirPods",
    price:123
};

for (let key in product) { 
    console.log(key + ': ' + product[key]);
}


products.forEach(function(item) {
    console.log(item);
});

   

// Чтобы создать шаблонную строку, необходимо использовать символ обратной кавычки (`):

let newString = `A string`;

// Шаблонные строки позволяют записывать значения переменных на нескольких строках. 
// В отличие от обычных строк, в шаблонных строках можно использовать символы переноса строк:

let listInline= `
<ul class="mb-0 list-inline">
    <li class="list-inline-item m-0 p-0">
        <a class="btn btn-sm btn-outline-dark" href="#"><i class="far fa-heart"></i></a>
    </li>
    <li class="list-inline-item m-0 p-0">
        <a class="btn btn-sm btn-dark add-to-cart" href="#">Add to cart</a>
    </li>
    <li class="list-inline-item mr-0">
        <a class="btn btn-sm btn-outline-dark" href="#"><i class="fas fa-expand"></i></a>
    </li>
</ul>
`;
// Все пробельные символы в шаблонной строке, включая переносы строк и отступы, включаются «как есть» в результат.

let productHtml = `
<div class="col-xl-3 col-lg-4 col-sm-6">
<div class="product text-center">
    <div class="position-relative mb-3">

        <a class="d-block" href="detail.html"><img class="img-fluid w-100 product-img"
                src="images/product-1.jpg" alt="..."></a>
        <div class="product-overlay">
            <ul class="mb-0 list-inline">
                <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark"
                        href="#"><i class="far fa-heart"></i></a></li>
                <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark add-to-cart"
                        href="#">Add to cart</a></li>
                <li class="list-inline-item mr-0"><a class="btn btn-sm btn-outline-dark" href="#"><i
                            class="fas fa-expand"></i></a>
                </li>
            </ul>
        </div>
    </div>
    <h6> <a class="reset-anchor product-name" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
    <p class="small text-muted product-price">$250</p>
</div>
</div>
`;

// Выражения: ${expression}. 

// Синтаксис ${} позволяет вставить в скобки выражение, которое передаст свое значение. Можно использовать обычную строку.
console.log(`${"Kui Ye Chen’s AirPods"}`);

let name = "Kui Ye Chen’s AirPods";
console.log(`${name}`);

// В выражениях можно проводить любые математические операции.
let price = 19.99;
let q = 5;
let prod = `The price of ${name} is ${price * q}`;

// Выражения можно использовать и с более сложными объектами.

let makeProduct = {
    id:1,
    image:"images/product-1.jpg",
    name:"Kui Ye Chen’s AirPods",
    price:123,
    renderProduct() {
        return `
        <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
                <div class="position-relative mb-3">
                    <a class="d-block" href="detail.html">
                        <img class="img-fluid w-100 product-img" src="${this.image}" alt="...">
                        </a>
                    <div class="product-overlay">
                        <ul class="mb-0 list-inline">
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark"
                                    href="#"><i class="far fa-heart"></i></a></li>
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark add-to-cart"
                                    href="#">Add to cart</a></li>
                            <li class="list-inline-item mr-0"><a class="btn btn-sm btn-outline-dark" href="#"><i
                                        class="fas fa-expand"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h6> <a class="reset-anchor product-name" href="detail.html">${this.name}</a></h6>
                <p class="small text-muted product-price">${this.price}</p>
            </div>
        </div>
        `;
    }
};

console.log(makeProduct.renderProduct());

    // на основе шаблонных строк можно делать HTML шаблоны.
    let data = {
        id:1,
        image:"images/product-1.jpg",
        name:"Kui Ye Chen’s AirPods",
        price:123
    };
    
    // создадим разметку
    function createMarkup(data) {
     return `
     <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
                <div class="position-relative mb-3">
                    <a class="d-block" href="detail.html">
                        <img class="img-fluid w-100 product-img" src="${data.image}" alt="...">
                        </a>
                    <div class="product-overlay">
                        <ul class="mb-0 list-inline">
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark"
                                    href="#"><i class="far fa-heart"></i></a></li>
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark add-to-cart"
                                    href="#">Add to cart</a></li>
                            <li class="list-inline-item mr-0"><a class="btn btn-sm btn-outline-dark" href="#"><i
                                        class="fas fa-expand"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h6> <a class="reset-anchor product-name" href="detail.html">${data.name}</a></h6>
                <p class="small text-muted product-price">${data.price}</p>
            </div>
        </div>
     `
    }

    // document.querySelector('.row').innerHTML = createMarkup(data);
    
    // let res = '';
    // products.forEach(function(item) {
    //     res+=createMarkup(item);
    // });
    // document.querySelector('.row').innerHTML = res;

    
    function socIcon(className, icon, capture='') { 
        return `<li class="list-inline-item m-0 p-0 ${className}"><a class="btn btn-sm btn-outline-dark"
        href="#"><i class="far ${icon}"></i> ${capture}</a></li>
       `; 
    }
    // let icon = 'fa-heart';
    // console.log(`Something is ${socIcon('fa-heart')}.`);

    function createNewMarkup(data) {
        return `
        <div class="col-xl-3 col-lg-4 col-sm-6">
               <div class="product text-center">
                   <div class="position-relative mb-3">
                       <a class="d-block" href="detail.html">
                           <img class="img-fluid w-100 product-img" src="${data.image}" alt="...">
                           </a>
                       <div class="product-overlay">
                           <ul class="mb-0 list-inline">
                           ${socIcon('like-this','fa-heart', )}
                           ${socIcon('add-to-cart','fa-shopping-cart', 'Add to cart')}
                           ${socIcon('view-this','fa-expand')}
                           </ul>
                       </div>
                   </div>
                   <h6> <a class="reset-anchor product-name" href="detail.html">${data.name}</a></h6>
                   <p class="small text-muted product-price">${data.price}</p>
               </div>
           </div>
        `
       }
   
    document.querySelector('.row').innerHTML = createNewMarkup(data);

       