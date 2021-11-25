import React from 'react';
import { Container } from 'react-bootstrap';
import Weather from '../components/Weather';

const Meteo = () => {
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
        <Weather />
        </Container>
    );
};

export default Meteo;
