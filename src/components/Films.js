import React, {useState, useEffect
} from 'react';


const Films = ( props) => {
    


    return (
        <>
            {props.movies.map((movie, index) => (<div>
                <img src = {movie.Poster} alt='movie'></img></div>))}
        </>
        
    );
};

export default Films;