import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Chuck from '../components/Chuck';
import Meteo from '../components/Meteo';
import "./Accueil.css";
import Horloge from '../components/Horloge';
import Graphe from '../components/Graphe';
import Carou from '../components/Carou';


const News = () => {
    return (
        
        <Container fluid >
        <Row>
        
            <Col>
                
                <Chuck />
            </Col>
            <Col>
                
                 <Meteo/>
                <Horloge />
            </Col>
        </Row>
        
        <Row>
            <Col>
                <Carou/>
            </Col>

            <Col>
                <Graphe/>
            </Col>
        </Row>

        </Container>
    );
};

export default News;