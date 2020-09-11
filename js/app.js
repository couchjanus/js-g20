'use strict';
// app.js 

// const toggleBtn = document.querySelector(".cart-toggle");
// const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const cartItems = document.querySelector(".cart-items");
const clearCart = document.querySelector(".clear-cart");

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


class App {
    cart = [];
    countItems = document.querySelector('.count-items');
    cartTotal = document.querySelector(".cart-total");
    
    // constructor
    constructor() { 
        const toggleBtn = document.querySelector(".cart-toggle");
        const closeBtn = document.querySelector(".close-btn");

        closeBtn.addEventListener("click", () => sidebar.classList.remove("show-sidebar"));
        toggleBtn.addEventListener("click", () => sidebar.classList.toggle("show-sidebar"));
        this.navbarToggle();
        this.makeShowcase(products);
        document.querySelector('footer div.row').lastElementChild.innerHTML=this.makeLiGroup(socialGroup, 'list-unstyled footer-socials social-icon', '<h6 class="text-uppercase">Social media</h6>');  
    }
    
    

    // methods

    makeShowcase(products) {
        let result = '';
        products.forEach(item => {
            result+=this.createProductMarkup(item);
        });
        document.querySelector('.showcase').innerHTML = result;
    }

    navbarToggle() {
        const navToggle = document.querySelector(".nav-toggle");
        const linksContainer = document.querySelector(".links-container");
        const links = document.querySelector(".links");
    
        navToggle.addEventListener("click", function () {
            const linksHeight = links.getBoundingClientRect().height;
            const containerHeight = linksContainer.getBoundingClientRect().height;
            if (containerHeight === 0) {
                linksContainer.style.height = `${linksHeight}px`;
            } else {
                linksContainer.style.height = 0;
            }
        });
    }
    
    makeLiGroup = (group, ulClass, header='') => {
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

    createProductMarkup(data) {
        return `
        <div class="col-xl-3 col-lg-4 col-sm-6">
               <div class="product text-center" data-id="${data.id}">
                   <div class="position-relative mb-3">
                       <a class="d-block" href="detail.html">
                           <img class="img-fluid w-100 product-img" src="${data.image}" alt="...">
                        </a>
                        <div class="product-overlay">${this.makeLiGroup(overlayGroup, 'mb-0 list-inline')}</div>
                   </div>
                   <h6><a class="reset-anchor product-name" href="detail.html">${data.name}</a></h6>
                   <p class="small text-muted product-price" data-price="${data.price}">${data.price}</p>
               </div>
           </div>
        `
    } 

    addCartItem(item) {
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
    
    saveCart(cart){
        console.log(cart);
    }
    
    getProduct = (id) => products.find(product => product.id === +(id));
        
    addToCarts() {
        const addToCartButtons = [...document.querySelectorAll(".add-to-cart")];
        addToCartButtons.forEach(button => {
            button.addEventListener("click", event => {
              let cartItem = { ...this.getProduct(event.target.closest('.product').getAttribute('data-id')), amount: 1 };
              this.cart = [...this.cart, cartItem];
              this.addCartItem(cartItem);
              this.setCartTotal(this.cart);
            });
        });
    }
    
    clear() {
        this.cart = [];
        while (cartItems.children.length > 0) {
            cartItems.removeChild(cartItems.children[0]);
        }
    }

    filterItem = (cart, curentItem) => cart.filter(item => item.id !== +(curentItem.dataset.id));

    findItem = (cart, curentItem) => cart.find(item => item.id === +(curentItem.dataset.id));

    renderCart() {

        clearCart.addEventListener("click", () =>  this.clear());
        
        cartItems.addEventListener("click", event => {
            if (event.target.classList.contains("fa-trash-alt")) {
                this.cart = this.filterItem(this.cart, event.target);
                this.setCartTotal(this.cart);
                cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
            } else if (event.target.classList.contains("fa-caret-right")) {
                let tempItem = this.findItem(this.cart, event.target);
                tempItem.amount = tempItem.amount + 1;
                this.setCartTotal(this.cart);
                event.target.previousElementSibling.innerText = tempItem.amount;
            } else if (event.target.classList.contains("fa-caret-left")) {
                let tempItem = this.findItem(this.cart, event.target);
                tempItem.amount = tempItem.amount - 1;
                if (tempItem.amount > 0) {
                event.target.nextElementSibling.innerText = tempItem.amount;
                } else {
                this.cart = this.filterItem(this.cart, event.target);
                cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
                }
                this.setCartTotal(this.cart);
            }
        });
    }

    setCartTotal(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
          tempTotal += item.price * item.amount;
          itemsTotal += item.amount;
        });
        this.cartTotal.textContent = parseFloat(tempTotal.toFixed(2));
        this.countItems.textContent = itemsTotal;
    }

}
// ==============================
(function(){
    const app = new App();
    app.addToCarts();
    app.renderCart();
})();
