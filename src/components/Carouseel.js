import React from 'react';
import { Carousel, Container,Image } from 'react-bootstrap';
import '../pages/Accueil.css';

const Carouseel = () => {
  return (
    <Container>
    <div>
      <Carousel>
  <Carousel.Item>
  <Image src="./img/Waikiki.jpg" fluid ></Image>
    <Carousel.Caption>
      <h3>Waikiki Beach (Hawaï)</h3>
      <p>Ah Hawaï, la ou tout a commencé</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src="./img/Nazare.jpg" fluid ></Image>

    <Carousel.Caption>
      <h3>Nazare (Portugal)</h3>
      <p>La bête, mère de toutes les vagues du haut de ses 30 mètres</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src="./img/Biarritz.jpg" fluid ></Image>

    <Carousel.Caption>
      <h3>Biarritz (France)</h3>
      <p>Site légendaire du sud de la France !</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    </Container>
  );
};

export default Carouseel;