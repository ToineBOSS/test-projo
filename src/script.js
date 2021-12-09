//TMDB

const API_KEY = 'b5fc234ba91bf755e7cfdda81e0d2a0c' ;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL_ALLMOVIES = BASE_URL + '/discover/movie?sort_by=popularity.desc&api_key='+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b5fc234ba91bf755e7cfdda81e0d2a0c

const main = document.getElementById('main');

getMovieskids(API_URL_ALLMOVIES);

function getMovieskids(url) {

    fetch(url).then(res => res.json()).then(data =>
         {
             console.log(data.results)

            // showMovies(data.results);
    })

}


function showMovies(data) {
    main.innerHTML = '';
    
     data.forEach(movie => {
        const {title,poster_path,vote_average,overview} = movie ;
         const movieE1 = document.createElement('div');
         movieE1.classList.add('movie');
         movieE1.innerHTML = `
                <img src= "${IMG_URL+poster_path}" alt="${title}">

        

                <div class="movie-info">
                     <h3>${title}</h3>
                    <span class="${getColor(vote_average)}">${vote_average} </span>

                </div>
            
                <div class="overview">
                    <h3>Overview </h3>
                    ${overview}
                 </div>
         ` ;


        main.appendChild(movieE1);

    })
}



function getColor(){
    if(vote>=8){
        return 'green'}
    if(vote>=5){
            return 'orange'}
    else{
        return 'red'
    }
}