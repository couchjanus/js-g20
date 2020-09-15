
class App {
    cart = [];
    countItems = document.querySelector('.count-items');
    cartTotal = document.querySelector(".cart-total");
    
    // constructor
    constructor() { 
        const toggleBtn = document.querySelector(".cart-toggle");
        const closeBtn = document.querySelector(".close-btn");

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

        this.makeShowcase(products);
    }

    makeShowcase(products) {
        let result = '';
        products.forEach(item => {
            result+=this.createProductMarkup(item);
        });
        document.querySelector('.showcase').innerHTML = result;
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
       
        return `
        <div class="col-lg-4 col-sm-6">
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
}

const categories = document.querySelector('.categories');

let app = new App();

// Выбор определенной категории
const chooseCategory = event => {
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains('category-item')) {
        const category = target.dataset.category;
        const categoryFilter = items => items.filter(item => item.category.includes(category));
        app.makeShowcase(categoryFilter(products)); 
    } else {
        app.makeShowcase(products); 
    }
};

// обработчики событий
categories.addEventListener('click', chooseCategory); 
