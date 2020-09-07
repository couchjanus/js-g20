// app.js 

const toggleBtn = document.querySelector(".cart-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

function addProductToCart(content, item) {
    content.querySelector('.cart-item').setAttribute('id', item.getAttribute('data-id'));
    content.querySelector('.product-name').textContent = item.querySelector(".product-name").textContent;
    content.querySelector('.product-price').textContent = item.querySelector(".product-price").textContent;
    content.querySelector('.product-price').setAttribute('data-price', item.querySelector(".product-price").textContent);
    content.querySelector('.product-img img').setAttribute('src',item.querySelector(".product-img").getAttribute('src'));
    return content;
    
}
function createMarkup(data) {
    return `
    <div class="col-xl-3 col-lg-4 col-sm-6">
           <div class="product text-center" data-id="${data.id}">
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
               <p class="small text-muted product-price" data-price="${data.price}">${data.price}</p>
           </div>
       </div>
    `
   } 
// ==============================
(function(){
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("show-sidebar");
        console.log(document.querySelectorAll('.cart-item').length);

        let itemsInCart = document.querySelectorAll('.cart-item');

        for (item of itemsInCart) {
            // console.log(item);
        
            const price = item.querySelector('.product-price').getAttribute('data-price');

            item.querySelector('button.dec-btn').addEventListener('click', function(e){
                console.log(e.target.parentNode.nextElementSibling);
                let val = e.target.parentNode.nextElementSibling.textContent;
                if(+(val) > 1) {
                    val--;
                    console.log('val-- :', val);
                    e.target.parentNode.nextElementSibling.textContent = val;
                    e.target.closest('.quantity').nextElementSibling.querySelector('.product-price').textContent=val*price;
                }
            });

            item.querySelector('button.inc-btn').addEventListener('click', function(e){
                console.log(e.target.parentNode.previousElementSibling);
                let val = e.target.parentNode.previousElementSibling.textContent;
                // e.target.parentNode.previousElementSibling.value = +(val)+1;
                +(val)++;
                console.log('val++ :', val);
                e.target.parentNode.previousElementSibling.textContent = val;
                e.target.closest('.quantity').nextElementSibling.querySelector('.product-price').textContent=val*price;
            });
        };

        // for(let i=0; i<itemsInCart.length;i++){
        //     const price = itemsInCart[i].querySelector('.product-price').getAttribute('data-price');

        //     itemsInCart[i].querySelector('.quantity button.dec-btn').addEventListener('click', function(e){
        //         // console.log(e.target.parentNode.nextElementSibling);
        //         let val = e.target.parentNode.nextElementSibling.textContent;
        //         if(+(val) > 1) {
        //             val--;
        //             console.log('val-- :', val);
        //             e.target.parentNode.nextElementSibling.textContent = val;
        //             e.target.closest('.quantity').nextElementSibling.querySelector('.product-price').textContent=val*price;
        //         }
        //     });

        //     itemsInCart[i].querySelector('.quantity button.inc-btn').addEventListener('click', function(e){
        //         // console.log(e.target.parentNode.previousElementSibling);
        //         let val = e.target.parentNode.previousElementSibling.textContent;
        //         // e.target.parentNode.previousElementSibling.value = +(val)+1;
        //         +(val)++;
        //         console.log('val++ :', val);
        //         e.target.parentNode.previousElementSibling.textContent = val;
        //         e.target.closest('.quantity').nextElementSibling.querySelector('.product-price').textContent=val*price;
        //     });
        // }
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show-sidebar");
    });

    let result = '';
    products.forEach(function(item) {
        result+=createMarkup(item);
    });
    document.querySelector('.showcase').innerHTML = result;
    

    // ********** close links ************
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

    let content = document.getElementById("cartItem").content;  
    const addToCarts = document.getElementsByClassName("add-to-cart");

    const template = document.getElementById("cartItem").content;  
    for (let i=0; i<addToCarts.length; i++) {
        addToCarts[i].addEventListener('click', function(e){
            let item = e.target.closest('.product');
            let content = addProductToCart(template, item);
            document.querySelector('.cart-items').append(document.importNode(content, true));
            
            let q = document.querySelector('.cart-toggle small').textContent;
            q++;
            document.querySelector('.cart-toggle small').textContent=q;
            
        })
    }
})();
