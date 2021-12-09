import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EntreeCineW from '../components/EntreeCinewid';
import Graphe from '../components/Graphe';



const NAPI = () => {
   return( 
    <Container fluid >
        <Row>
        
            <Col>
                
            <EntreeCineW/>
            </Col>
            
        <Graphe/>
        
        </Row>
        </Container>
    )
};
            
        
    
   


export default NAPI;