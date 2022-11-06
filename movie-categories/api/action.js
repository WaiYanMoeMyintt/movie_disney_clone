// https://api.themoviedb.org/3/discover/movie?api_key=1b7c076a0e4849aeefd1f3c429c99a36&with_genres=28
// actions
const bodys =  document.querySelector("body");
bodys.style.backgroundColor = "#1C1F29";

const input  = document.querySelector(".movie-search-input");
const form   = document.querySelector(".movie-nav-form");
const searchAPIQuery =  "https://api.themoviedb.org/3/search/movie?api_key=1b7c076a0e4849aeefd1f3c429c99a36&query=";

const actionUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=1b7c076a0e4849aeefd1f3c429c99a36&with_genres=28';
const actionBody = document.querySelector('.movie-action-body');
const apiImages = "https://image.tmdb.org/t/p/original";
const title = document.querySelector(".action-title");

const movieActionAPI = async (api)=>{
      const sendAPI = await fetch(api);
      const getAPIData = await sendAPI.json();
      const useAPIResults = getAPIData.results;
      actionBody.innerHTML = '';
      useAPIResults.map((list)=>{
        extractActionAPI(list);
      })

}
movieActionAPI(actionUrl);


const extractActionAPI = (movies)=>{
      const {original_title,release_date,overview,poster_path} = movies;
      const actionList = document.createElement('div');
      const setHorrorClass = actionList.setAttribute("class","horror");
      actionList.innerHTML = `
      <div class="movie-action">
          <div class="movie-action-poster">
               <img width="200px" src = ${apiImages + poster_path} alt= ${original_title}>
          </div>
          <div class="movie-action-detail">
          <h3>${original_title}</h3>
          <span>${release_date}</span>
      </div>  
    `
    actionBody.appendChild(actionList);
}
form.addEventListener("submit",(s)=>{
       s.preventDefault();
       const inputValue  = input.value;
       if(inputValue !== ''){
           movieActionAPI(searchAPIQuery + inputValue);
           title.textContent = "Result for: " + inputValue;
       }
       else {
        console.log("error");
       }
})


form.addEventListener("keyup",(s)=>{
    s.preventDefault();
    const inputValue  = input.value;
    if(inputValue !== ''){
        movieActionAPI(searchAPIQuery + inputValue);
    }
    else {
     console.log("error");
    }
})


//mobile search
const mobileForm = document.querySelector(".mobile-form");
const mobileInput = document.querySelector(".mobile-input");

mobileForm.addEventListener("submit",(t)=>{
       t.preventDefault();
       const mobileValue = mobileInput.value
       if(mobileValue !== ''){
        movieActionAPI(searchAPIQuery + mobileValue);
        movieMenu.classList.remove("menu-active");
        title.textContent = "Result for: " + mobileValue;
       }
       else {
        console.log("error");
       }
})

mobileForm.addEventListener("keyup",(t)=>{
    t.preventDefault();
    const mobileValue = mobileInput.value
    if(mobileValue !== ''){
     movieActionAPI(searchAPIQuery + mobileValue);
     title.textContent = "Result for: " + mobileValue;
    }
    else {
     console.log("error");
    }
})

const moviesDropDown = document.querySelector('.movies-tv'); //movieNav
const moviesNews     = document.querySelector(".news"); //movieNav

const moviesContent1 = document.querySelector('.movie-dropdown-content-1'); //movieNavDropDown1
const moviesContent2 = document.querySelector('.movie-dropdown-content-2');//movieNavDropDown2

const closeBtn   = document.querySelector(".close-icon");
const movieMenu  = document.querySelector(".movie-mobile-menu");
const menu       = document.querySelector(".movie-menu-bar");

const body  = document.querySelector('body');
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


