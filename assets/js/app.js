// =========================
// MOBILE MENU
// =========================

const menuBtn=document.querySelector(".menu-btn");

const mobileMenu=document.querySelector(".mobile-menu");

menuBtn.onclick=()=>{

mobileMenu.classList.toggle("active");

}

// =========================
// NAVBAR SCROLL
// =========================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});
