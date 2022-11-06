const input = document.querySelector(".find-movies");
const searchForm = document.querySelector(".movie-nav-form");

searchForm.addEventListener("click",()=>{
 
    window.location.href = "../../movie-search/search.html"
})

const mobile_form  = document.querySelector(".mobile-form");
mobile_form.addEventListener("click",()=>{
 
    window.location.href = "../../movie-search/search.html"
})


const moviesDropDown = document.querySelector('.movies-tv'); //movieNav
const moviesNews     = document.querySelector(".news"); //movieNav

const moviesContent1 = document.querySelector('.movie-dropdown-content-1'); //movieNavDropDown1
const moviesContent2 = document.querySelector('.movie-dropdown-content-2');//movieNavDropDown2

const closeBtn   = document.querySelector(".close-icon");
const movieMenu  = document.querySelector(".movie-mobile-menu");
const menu       = document.querySelector(".movie-menu-bar");

const body  = document.querySelector('body');
body.style.backgroundColor = "#1F1F1F";
// window events
window.addEventListener("click",()=>{
    moviesContent1.classList.remove("movie-active-dropdown1");
    moviesContent2.classList.remove("movie-active-dropdown2");
})
//movieDropDown Event
moviesDropDown.addEventListener('mouseover',()=>{
      moviesContent1.classList.add("movie-active-dropdown1");
   
})
moviesNews.addEventListener('mouseover',()=>{
    moviesContent2.classList.add("movie-active-dropdown2");
 
})

menu.addEventListener("click",()=>{
    console.log("Active");
    movieMenu.classList.add("menu-active");
})
closeBtn.addEventListener('click',()=>{
    movieMenu.classList.remove("menu-active");
})
//mobile responsive

const hideNav = document.querySelector(".movie-nav-content");
hideNav.classList.add("hide-nav");

const height = document.querySelector(".height");
height.classList.add("actives-footer");

const devices = document.querySelector(".movie-devices-control");
devices.classList.add("active-devices");

const header = document.querySelector("header");
header.classList.add('active-header');