import React from 'react';
import {Carousel} from 'react-bootstrap';


const Carou = () => {
    return (
        <div>
            <Carousel  fade>
  <Carousel.Item>
    <img
      className="d-block w-75 h-75"
      src="./img/Carou1.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75 h-75"
      src="./img/Carou2.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75 h-75"
      src="./img/Carou3.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carou;