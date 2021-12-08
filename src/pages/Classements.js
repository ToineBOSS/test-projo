import React, { useState } from 'react';
import Axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import EntreeCineW from '../components/EntreeCinewid';
import Graphe from '../components/Graphe';


/*const [Année,setAnnée]=useState("");
const[nombreEntree,setNbEntree]=useState(0);
const addToList = () =>{Axios.post("http://localhost:3001/insert",{
    Année:Année,
    nombreEntree:nombreEntree
    });
 };*/

const Classements = () => {
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
            
        
    
   


export default Classements;