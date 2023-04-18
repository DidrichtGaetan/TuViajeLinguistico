//Navigation

const nav = document.querySelector(".main-nav");
const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelector(".main-nav a");

//Listener
navToggler.addEventListener("click",toggleNav);

//Fonction
function toggleNav() {
    nav.classList.toggle("active");
    if(togglerImg.src.includes("hamnuger")) {
        togglerImg.src = "ressources/cross.svg";
        navToggler.ariaExpanded = true;
    }
    else {
        togglerImg.src = "ressources/hamburger.svg";
        navToggler.ariaExpanded = false;
    }
}