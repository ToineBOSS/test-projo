
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Accueil.css';


const Accueil = () => {
    return (
        <Container fluid className="fondE1">
            <Row>
            
            <div className="InfoACC"> 
            <h1>BIENVENUE CHEZ TONI & THEO MOVIES</h1>
         
            <p>Retrouvez ici la passion pour les films !</p>
        
            <button className="BtnACC">Go !</button>
        </div>

        
             </Row>
        </Container>
    );
};

export default Accueil;

