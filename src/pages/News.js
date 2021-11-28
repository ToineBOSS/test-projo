import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Chuck from '../components/Chuck';
import Meteo from '../components/Meteo';
import "./Accueil.css";



const News = () => {
    return (
        <Container fluid >
        
        <Row>
        <div className="col-md-6 blockMETEO"><Meteo/></div>
        <div className="col-md-6 blockCHUCK"><Chuck/></div>
        </Row>

        </Container>
    );
};

export default News;