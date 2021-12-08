import React ,{useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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


            <Row>
                <Col>
                <ChercheF chercheVal={chercheVal} setchercheVal={setchercheVal}/>
                </Col>
            <Col></Col>
            <Prefs prefs={pref} /> 
            
            </Row>
            <Row>
        <Films movies={movies} 
               handlePrefclick={addFilmPref}
               aregPlustard={PlustardF} />
            </Row>
           
        
        
        </Container>
    );
};

export default Filmz;
