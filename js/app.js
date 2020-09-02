// app.js 

const toggleBtn = document.querySelector(".cart-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
// ==============================
(function(){
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("show-sidebar");
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show-sidebar");
    });

    // const addToCarts = document.querySelectorAll(".add-to-cart");
    // console.log(addToCarts); // NodeList

    const addToCarts = document.getElementsByClassName("add-to-cart");
    console.log(addToCarts); // HTMLCollection
    console.log(addToCarts.length);

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
})();
