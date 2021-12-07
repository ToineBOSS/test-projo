import React from 'react';
import { Col,Image } from 'react-bootstrap';
import '../pages/Accueil.css'




const Films = ( props) => {
    
const PlustardF = props.aregPlustard;


    return (
        <div>
            <ul>
                <li>
            {props.movies.map((movie, index) => (<Col className=" CarteF d-flex justify-content-start m-3">
                <Image className= "imgF" src = {movie.Poster} alt='movie'></Image>

                <Col className="filmInfo">
                    <h3 className="InfoM">Titre : {movie.Title}</h3>
                    <h4 className="InfoM">Date de sortie : {movie.Year}</h4>
                    <div onClick={() => props.handlePrefclick(movie)}>
                    <PlustardF/>
                    </div>
                </Col>
                
                </Col>))}
                </li>
                </ul>
        </div>
        
    );
};

export default Films;