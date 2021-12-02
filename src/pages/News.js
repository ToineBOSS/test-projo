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
        < main id="main"> 
        <div className="col-sm-offset-1 col-sm-4 blockMETEO"><Meteo/></div>
        <div className="col-sm-4 blockCHUCK"><Chuck/></div>
        </main>
        </Row>

        <Col>
        <Horloge/>
        </Col>

        <Carou/>
        <Graphe/>

        </Container>
    );
};

export default News;