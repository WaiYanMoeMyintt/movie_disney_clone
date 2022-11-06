const moviesDropDown = document.querySelector('.movies-tv'); //movieNav
const moviesNews     = document.querySelector(".news"); //movieNav

const moviesContent1 = document.querySelector('.movie-dropdown-content-1'); //movieNavDropDown1
const moviesContent2 = document.querySelector('.movie-dropdown-content-2');//movieNavDropDown2

const closeBtn   = document.querySelector(".close-icon");
const movieMenu  = document.querySelector(".movie-mobile-menu");
const menu       = document.querySelector(".movie-menu-bar");

const body  = document.querySelector('body');
body.style.backgroundColor = "#1C1F29";
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
    movieMenu.classList.toggle("menu-active");
})
closeBtn.addEventListener('click',()=>{
    movieMenu.classList.remove("menu-active");
    console.log("active");
})

//popular-movie-api-section
const moviePopularAPI = "https://api.themoviedb.org/3/movie/popular?api_key=1b7c076a0e4849aeefd1f3c429c99a36";
const apiImages    = "https://image.tmdb.org/t/p/original";

const movieComingBody = document.querySelector('.movie-popular-body');
const movieContent    = document.querySelector('.popular-movie-content');
const moviePopularBody = document.querySelector(".movie-upcoming-body");
const movieTVShows = document.querySelector(".movie-tvshow-body");
const movieTrending = document.querySelector('.movie-trending-body');

//movie-popular-api
const fetchAPIData = async ()=>{
      const requestCall = await fetch(moviePopularAPI);
      const responseData = await requestCall.json();
      const getMovieData  = responseData.results;
      getMovieData.map(item=>{
           usingAPIData(item);
      })
    return getMovieData;
}
fetchAPIData();

const usingAPIData = (movies)=>{
    const {title,release_date,poster_path,overview} = movies;
    const movieList = document.createElement("div");
    const setPopular  = movieList.setAttribute('class',"popular");
     movieList.innerHTML = `
        <div class="movie-popular-info">
            <div class="movie-poster">
                 <img class = "movie-poster-img" width="200px" src = ${apiImages + poster_path} alt= ${title}>
            </div>
            <div class="popular-detail">
               <h3>${title}</h3>
               <span>${release_date}</span>
            </div>
        </div>
    `;
    movieComingBody.appendChild(movieList);

    //slider sections
    const moviePopular = document.querySelector(".popular");
    const next   = document.querySelector(".next");
    const prev   = document.querySelector(".prev");
    next.addEventListener("click",()=>{
          const containerWidth = moviePopular.offsetWidth;
          console.log(containerWidth);
          document.querySelector(".movie-popular-body").scrollLeft +=  containerWidth;
    })
    prev.addEventListener("click",()=>{
        const containerWidth = moviePopular.offsetWidth;
        document.querySelector(".movie-popular-body").scrollLeft -= containerWidth;
  })
}

//movie upcoming movies
const movieUpcomingAPI = "https://api.themoviedb.org/3/movie/upcoming?api_key=1b7c076a0e4849aeefd1f3c429c99a36";

const fetchAPIData1 = async ()=>{
    const requestCall1 = await fetch(movieUpcomingAPI);
    const responseData1 = await requestCall1.json();
    const getMovieData1  = responseData1.results;
    getMovieData1.map(item1=>{
         usingAPIData1(item1);
    })
  return getMovieData1;
}
fetchAPIData1();

const usingAPIData1 = (movies1)=>{
  const {title,release_date,poster_path,overview} = movies1;
  const movieList1 = document.createElement("div");
  const setPopular1  = movieList1.setAttribute('class',"upcoming");
   movieList1.innerHTML = `
      <div class="movie-popular-info1">
          <div class="movie-poster1">
               <img width="200px" src = ${apiImages + poster_path} alt= ${title}>
          </div>
          <div class="popular-detail1">
          <h3>${title}</h3>
          <span>${release_date}</span>
      </div>
  `;
  moviePopularBody.appendChild(movieList1);

  //slider sections
  const moviePopular = document.querySelector(".upcoming");
  const next   = document.querySelector(".next-1");
  const prev   = document.querySelector(".prev-1");
  next.addEventListener("click",()=>{
        const containerWidth = moviePopular.offsetWidth;
        console.log(containerWidth);
        document.querySelector(".movie-upcoming-body").scrollLeft +=  containerWidth;
  })
  prev.addEventListener("click",()=>{
      const containerWidth = moviePopular.offsetWidth;
      document.querySelector(".movie-upcoming-body").scrollLeft -= containerWidth;
})
}

//movie tvShows
const movieTVshows = "https://api.themoviedb.org/3/discover/tv?api_key=1b7c076a0e4849aeefd1f3c429c99a36&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";

const fetchAPIData2 = async ()=>{
    const requestCall2 = await fetch(movieTVshows);
    const responseData2 = await requestCall2.json();
    const getMovieData2  = responseData2.results;
    getMovieData2.map(item2=>{
         usingAPIData2(item2);
    })
  return getMovieData2;
}
fetchAPIData2();
const usingAPIData2 = (movies2)=>{
    const {original_name,first_air_date,poster_path,overview} = movies2;
    const movieList2 = document.createElement("div");
    const setPopular2 = movieList2.setAttribute("class","tv-show")
     movieList2.innerHTML = `
        <div class="movie-popular-info2">
            <div class="movie-poster2">
                 <img width="200px" src = ${apiImages + poster_path} alt= ${original_name}>
            </div>
            <div class="popular-detail2">
            <h3>${original_name}</h3>
            <span>${first_air_date}</span>
        </div>
    `;
    movieTVShows.appendChild(movieList2);

      //slider sections
  const moviePopular = document.querySelector(".tv-show");
  const next   = document.querySelector(".next-2");
  const prev   = document.querySelector(".prev-2");
  next.addEventListener("click",()=>{
        const containerWidth = moviePopular.offsetWidth;
        console.log(containerWidth);
        document.querySelector(".movie-tvshow-body").scrollLeft +=  containerWidth;
  })
  prev.addEventListener("click",()=>{
      const containerWidth = moviePopular.offsetWidth;
      document.querySelector(".movie-tvshow-body").scrollLeft -= containerWidth;
})
}

//Trending Movies
const trendMovies = "https://api.themoviedb.org/3/trending/movie/week?api_key=1b7c076a0e4849aeefd1f3c429c99a36";

const fetchAPIData3 = async ()=>{
    const requestCall3 = await fetch(trendMovies);
    const responseData3 = await requestCall3.json();
    const getMovieData3  = responseData3.results;
    getMovieData3.map(item3=>{
         usingAPIData3(item3);
    })
  return getMovieData3;
}
fetchAPIData3();
const usingAPIData3 = (movies3)=>{
    const {original_title,release_date,poster_path,overview} = movies3;
    const movieList3 = document.createElement("div");
    const setPopular3 = movieList3.setAttribute("class","trending");
     movieList3.innerHTML = `
        <div class="movie-popular-info3">
            <div class="movie-poster3">
                 <img width="200px" src = ${apiImages + poster_path} alt= ${original_title}>
            </div>
            <div class="popular-detail3">
            <h3>${original_title}</h3>
            <span>${release_date}</span>
        </div>
    `;
    movieTrending.appendChild(movieList3);
    
    //slider sections
  const moviePopular = document.querySelector(".trending");
  const next   = document.querySelector(".next-3");
  const prev   = document.querySelector(".prev-3");
  next.addEventListener("click",()=>{
        const containerWidth = moviePopular.offsetWidth;
        console.log(containerWidth);
        document.querySelector(".movie-trending-body").scrollLeft +=  containerWidth;
  })
  prev.addEventListener("click",()=>{
      const containerWidth = moviePopular.offsetWidth;
      document.querySelector(".movie-trending-body").scrollLeft -= containerWidth;
})
}


//chillFLix Ask Questions dropdown
const movieQuestions = document.querySelectorAll("#questions");
const movieMessage1  = document.querySelector('.movie-questions-control .question-1 .question-message');
const movieMessage2  = document.querySelector('.movie-questions-control .question-2 .question-message');
const movieMessage3  = document.querySelector('.movie-questions-control .question-3 .question-message');
const movieMessage4  = document.querySelector('.movie-questions-control .question-4 .question-message');
const movieMessage5  = document.querySelector('.movie-questions-control .question-5 .question-message');
const movieMessage6  = document.querySelector('.movie-questions-control .question-6 .question-message');

const minus = document.querySelectorAll("#minus");
const plus  = document.querySelectorAll("#plus");
function movieDropDown(){
    movieQuestions.forEach((list,index)=>{
         if(index == 0){
            list.addEventListener("click",()=>{
                movieMessage1.classList.toggle('active-message');
                minus.forEach((min,i)=>{
                      if(i ===0){
                           min.classList.toggle("active-minus");
                      }
                })
                plus.forEach((plu,i)=>{
                      if(i === 0){
                         plu.classList.toggle("active-plus");
                      }
                })
            })
         }
         else if(index == 1){
            list.addEventListener("click",()=>{
                movieMessage2.classList.toggle('active-message');
                minus.forEach((min,i)=>{
                    if(i ===1){
                         min.classList.toggle("active-minus");
                    }
              })
              plus.forEach((plu,i)=>{
                    if(i === 1){
                       plu.classList.toggle("active-plus");
                    }
              })
           })
         }
         else if(index == 2){
            list.addEventListener("click",()=>{
                movieMessage3.classList.toggle('active-message');
                minus.forEach((min,i)=>{
                    if(i ===2){
                         min.classList.toggle("active-minus");
                    }
              })
              plus.forEach((plu,i)=>{
                    if(i === 2){
                       plu.classList.toggle("active-plus");
                    }
              })
           })
         }
         else if(index == 3){
            list.addEventListener("click",()=>{
                movieMessage4.classList.toggle('active-message');
                minus.forEach((min,i)=>{
                    if(i ===3){
                         min.classList.toggle("active-minus");
                    }
              })
              plus.forEach((plu,i)=>{
                    if(i === 3){
                       plu.classList.toggle("active-plus");
                    }
              })
           })
         }
         else if(index == 4){
            list.addEventListener("click",()=>{
                movieMessage5.classList.toggle('active-message');
                minus.forEach((min,i)=>{
                    if(i ===4){
                         min.classList.toggle("active-minus");
                    }
              })
              plus.forEach((plu,i)=>{
                    if(i === 4){
                       plu.classList.toggle("active-plus");
                    }
              })
           })
         }
         else if(index == 5){
            list.addEventListener("click",()=>{
                movieMessage6.classList.toggle('active-message');
                minus.forEach((min,i)=>{
                    if(i ===5){
                         min.classList.toggle("active-minus");
                    }
              })
              plus.forEach((plu,i)=>{
                    if(i === 5){
                       plu.classList.toggle("active-plus");
                    }
              })
           })
         }
    })
}
movieDropDown();

//window scroll
const scroll =  document.querySelector(".movie-scroll-icon")
window.addEventListener("scroll",()=>{
    scroll.classList.toggle("active-scroll", window.scrollY > 500);
})
//scroll to top
scroll.addEventListener("click",()=>{
    window.scrollTo({
        top:0
    })
})
// //search
const input = document.querySelector(".find-movies");
const form = document.querySelector("form");

form.addEventListener("click",()=>{
    window.location.href = "../movie-search/search.html";
})

const mobile_form  = document.querySelector(".mobile-form");
mobile_form.addEventListener("click",()=>{
    window.location.href  = "../movie-search/search.html";
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