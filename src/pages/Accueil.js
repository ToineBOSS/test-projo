import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const Accueil = () => {
    return (
        <Container>
            <Row>
            <div>

         <h1>Accueil</h1>
         <Col xs={6} md={4}>
         <Image src="./img/fond1.jpg" fluid></Image>
         </Col>
         
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
             </Row>
        </Container>
    );
};

export default Accueil;

