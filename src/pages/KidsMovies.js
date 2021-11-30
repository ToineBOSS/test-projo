import React ,{useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import ChercheF from '../components/ChercheF';
import './Accueil.css';
import KidsMovie from '../components/KidsMovie';

const KidsMovies = () => {

    const [movies, listMovies] = useState([]);
    const [chercheVal,setchercheVal] = useState('');
    //TMDB

    const API_KEY = 'b5fc234ba91bf755e7cfdda81e0d2a0c' ;
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL_ALLMOVIES = BASE_URL + '/discover/movie?sort_by=popularity.desc&api_key='+API_KEY;
    const API_URL_KIDSMOVIES = BASE_URL + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key='+API_KEY;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

    // https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b5fc234ba91bf755e7cfdda81e0d2a0c
    
    const getKidsMovieReq = async () => {
       
        
        const response = await fetch(API_URL_KIDSMOVIES);
        const responseJson = await response.json();

        if(responseJson.results){
            //console.log(responseJson);
            listMovies(responseJson.results);
        }
    };

    useEffect(() => {
        getKidsMovieReq();
    }, [chercheVal] );


    return (
        <Container  >

        <div className='container-fluid maxitest '>
            
            <div className="row">
                <main id="main"> 
            {movies.map((movie, index) => (
            
            <><KidsMovie
                    name={ movie.title } 
                    afficheUrl={IMG_URL+movie.poster_path}
                    vote_average={movie.vote_average}
                    overview={movie.overview} />
            </> 
                ))}
                </main>
             </div>       
        </div>
        
        </Container>
    );
};

export default KidsMovies;
