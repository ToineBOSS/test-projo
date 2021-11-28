import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import CompagniesFilms from '../components/CompagniesFilms';

const Compagnies = () => {
    const [compagnie, setCompagnie] = useState([]);

    const getCompagnie = async () => {
        const url = `https://api.themoviedb.org/3/person/popular?api_key=b2f3ce518b17b18ef7fafe3dc842865d&language=en-US&page=1`
        
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search){
        //console.log(responseJson);
        setCompagnie(responseJson.Search);}
        
        //useEffect(() => {
          //getCompagnie();
        //} );
    };

    return (
        <Container>
        <CompagniesFilms/>
        <div>
        <div class="row">
        <div class="col-sm-12">
            <h1>Voila Quelques spots les plus connus du monde du surf </h1>
        </div>
        <div class="col-sm-7">
            <h1>Quand on parle de Surf plusieurs idées de spots viennent direct !</h1>
            <p> Mais quels sont les spots les plus connus dans le monde et meme en France ?</p>
        </div>
        <div class="col-sm-5"></div>
        </div>
           
            
        </div>
        
        </Container>
    
    );
};

export default Compagnies;