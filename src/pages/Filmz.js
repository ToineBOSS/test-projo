import React ,{useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import ChercheF from '../components/ChercheF';
import Films from '../components/Films';
import './Accueil.css';
import PlustardF from '../components/PlustardF';
import Prefs from '../components/Prefs';

const Filmz = () => {

    const [movies, setMovies] = useState([]);
    const [pref, setPref] = useState([]);
    const [chercheVal,setchercheVal] = useState('');

    const getMovieReq = async () => {
        const url = `http://www.omdbapi.com/?s=${chercheVal}&apikey=5684a018`
        
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search){
        //console.log(responseJson);
        setMovies(responseJson.Search);}
    };

    useEffect(() => {
        getMovieReq();
    }, [chercheVal] );

    const addFilmPref = (movie) =>{
        const newPrefList = [...pref, movie];
        setPref(newPrefList);
    }

    return (
        <Container fluid >

        
            <div className="row">
                <ChercheF chercheVal={chercheVal} setchercheVal={setchercheVal}/>
            </div>

            <Prefs prefs={pref} /> 
            <div className="row">
        <Films movies={movies} 
               handlePrefclick={addFilmPref}
               aregPlustard={PlustardF} />
            </div>
           
        
        
        </Container>
    );
};

export default Filmz;
