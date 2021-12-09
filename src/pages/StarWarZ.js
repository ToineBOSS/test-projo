import React, {useState, useEffect} from 'react';
import { Container,Accordion, Row } from 'react-bootstrap';
import SWplanets from "../components/SWplanet";
import SWfilms from '../components/SWfilms';
import SWperso from '../components/SWperso';
import "./Accueil.css";




const Compagnies = () => {
    const [films  , setFilms] = useState([]);
    const [planets,setPlanets] = useState([]);
    const [perso,setPerso] = useState([]);
    

    const getFilms = async () => {
        const url = "https://swapi.dev/api/films"
        
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.results){
        //console.log(responseJson);
        setFilms(responseJson.results);}
    };

    const getSW = async () => {
      const url = "https://swapi.dev/api/planets"
      
      const response = await fetch(url);
      const responseJson = await response.json();

      if(responseJson.results){
      //console.log(responseJson);
      setPlanets(responseJson.results);}
  };

const getPerso = async () => {
  const url = "https://swapi.dev/api/people"
  
  const response = await fetch(url);
  const responseJson = await response.json();

  if(responseJson.results){
  //console.log(responseJson);
  setPerso(responseJson.results);}
};

    useEffect(() => {
        getSW();
        getFilms();
        getPerso();
    }, [] );

    return (
        <Container fluid className="fondStar">
          <Row>
            <Accordion defaultActiveKey="0" className="deroulantSW" >
  <Accordion.Item eventKey="0" flush fluid>
    <Accordion.Header>Films</Accordion.Header>
    <Accordion.Body>

      <SWfilms films={films}> </SWfilms>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" flush>
    <Accordion.Header>Planetes</Accordion.Header>
    <Accordion.Body>
      
    <SWplanets planets={planets}/>

    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="3" flush>
    <Accordion.Header>Personnages</Accordion.Header>
    <Accordion.Body>
      
      <SWperso perso={perso}/>

    </Accordion.Body>
  </Accordion.Item>


</Accordion>
            
</Row>
        </Container>
    
    );
};

export default Compagnies;