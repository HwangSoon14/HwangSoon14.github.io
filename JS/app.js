const navbar = document.querySelector(".navbar");
const navbarLogo = document.querySelector(".navbar-logo-link");
const navbarItems = document.querySelectorAll(".navbar-item");
const navbarBtn = document.querySelector(".navbar-btn");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const customerList = document.querySelector(".customer-list");
const dropdownHeaders = document.querySelectorAll(".dropdown-header");
//handle NavBar fixed scroll
window.addEventListener("scroll" , function(e) {
    const scrollY = window.pageYOffset;
    // console.log(scrollY);
    if(scrollY > 10) {
        navbar.classList.add("scroll-navbar");
        navbarLogo.classList.add("changeColor");
        [...navbarItems].forEach(item => item.classList.add("changeColor"));
        navbarBtn.classList.add("changeBtn");
        navbar.classList.add("boxshadow");
    }
    else {
        navbar.classList.remove("scroll-navbar");
        navbarLogo.classList.remove("changeColor");
        [...navbarItems].forEach(item => item.classList.remove("changeColor"))
        navbarBtn.classList.remove("changeBtn");
        navbar.classList.remove("boxshadow");
    }
})
// handle Click dot1 dot2
dot1.addEventListener("click" , function(e) {
    dot2.classList.remove("tranActive");
    dot1.classList.add("tranActive");
    customerList.classList.remove("increaseX");
    customerList.classList.add("decreaseX");
})
dot2.addEventListener("click" , function(e) {
    dot1.classList.remove("tranActive");
    dot2.classList.add("tranActive");
    customerList.classList.add("increaseX");
    customerList.classList.remove("decreaseX");
})
// dropdown item
Array.from(dropdownHeaders).forEach(item => item.addEventListener("click" , function(e) {
    const plus = e.target.querySelector(".plus")
    const minus = e.target.querySelector(".minus")
    let content = e.target.nextElementSibling;
    [...dropdownHeaders].forEach(item => {
        minus.classList.remove("displayOpacity")
    })
    content.classList.toggle("block");
    e.target.classList.toggle("transHeader");
    plus.classList.toggle("hidden");
    minus.classList.toggle("displayOpacity");
}))