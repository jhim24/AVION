// =========================
// MOBILE MENU
// =========================

const menuBtn=document.querySelector(".menu-btn");

const mobileMenu=document.querySelector(".mobile-menu");

menuBtn.onclick = () => {

    mobileMenu.classList.toggle("active");

    menuBtn.querySelector("i").classList.toggle("fa-bars");

    menuBtn.querySelector("i").classList.toggle("fa-xmark");

};

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
// =========================
// HERO VIDEO SOUND
// =========================

const heroVideo = document.querySelector(".hero-video");
const soundToggle = document.querySelector(".sound-toggle");
const soundIcon = soundToggle.querySelector("i");

soundToggle.addEventListener("click", () => {

    heroVideo.muted = !heroVideo.muted;

    if(heroVideo.muted){

        soundIcon.classList.remove("fa-volume-high");
        soundIcon.classList.add("fa-volume-xmark");

    }else{

        soundIcon.classList.remove("fa-volume-xmark");
        soundIcon.classList.add("fa-volume-high");

    }

});
