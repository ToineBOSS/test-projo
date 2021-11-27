import React, {useState, useEffect
} from 'react';
import '../pages/Accueil.css'

const Films = ( props) => {
    


    return (
        <>
            {props.movies.map((movie, index) => (<div className=" col-sm-4 container-fluid">
                <img src = {movie.Poster} alt='movie'></img>
               
                <ul className="filmInfo">
                    <li className="InfoM">Titre : {movie.Title}</li>
                    <li className="InfoM">Date de sortie :{movie.Year}</li>
                </ul>
                
                </div>))}
        </>
        
    );
};

export default Films;