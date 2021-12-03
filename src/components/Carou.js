import React from 'react';
import {Carousel} from 'react-bootstrap';
import "../pages/Accueil.css";


const Carou = () => {
    return (
        <div>
            <Carousel className="carouS" fade>
  <Carousel.Item>
    <img
      className="imgC d-block w-100 h-100"
      src="./img/Carou1.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imgC d-block w-100 h-100"
      src="./img/Carou2.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imgC d-block w-100 h-100"
      src="./img/Carou3.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carou;