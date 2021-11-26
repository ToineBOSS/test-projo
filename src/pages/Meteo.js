import React ,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Films from '../components/Films';

const Meteo = () => {

    const [movies, setMovies] = useState([{
        "Title": "The Avengers",
        "Year": "2012",
        "imdbID": "tt0848228",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "imdbID": "tt4154796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "imdbID": "tt4154796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    }]);
    return (
        <Container>
        <div>
          
            <h1>Météo</h1>
            <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae recusandae, quis facere,
                 magnam consequatur natus, nemo omnis aperiam quidem odit sint accusantium nesciunt adipisci distinctio ipsa 
                 totam voluptate. Optio nihil ipsum neque, praesentium commodi architecto esse et veritatis facere ullam,
                 sint totam! Quibusdam harum aut cumque dolor molestiae dolorum? Itaque quidem praesentium nisi minima minus laborum. Quos, sunt quis!
                 </p>
            <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae recusandae, quis facere,
                 magnam consequatur natus, nemo omnis aperiam quidem odit sint accusantium nesciunt adipisci distinctio ipsa 
                 totam voluptate. Optio nihil ipsum neque, praesentium commodi architecto esse et veritatis facere ullam,
                 sint totam! Quibusdam harum aut cumque dolor molestiae dolorum? Itaque quidem praesentium nisi minima minus laborum. Quos, sunt quis!
                 </p>
        </div>
        <Films movies={movies}/>
        </Container>
    );
};

export default Meteo;
