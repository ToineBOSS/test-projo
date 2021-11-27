import React ,{useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import ChercheF from '../components/ChercheF';
import Films from '../components/Films';
import './Accueil.css';


const Filmz = () => {

    const [movies, setMovies] = useState([]);
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


    return (
        

        <div className='container-fluid maxitest'>
            <div className="row">
                <ChercheF chercheVal={chercheVal} setchercheVal={setchercheVal}/>
            </div>
            <div className="row">
        <Films movies={movies} />
            </div>
           
        </div>
        
        
    );
};

export default Filmz;
