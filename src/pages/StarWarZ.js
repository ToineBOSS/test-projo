import React, {useState, useEffect} from 'react';
import { Container,Accordion } from 'react-bootstrap';
import SWplanets from "../components/SWplanet";
import SWfilms from '../components/SWfilms';
import SWperso from '../components/SWperso';





const Compagnies = () => {
    const [films  , setFilms] = useState([]);
    const [planets,setPlanets] = useState([]);
    const [perso,setPerso] = useState([]);
    const [sps,setSps] = useState([]);

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
        <Container>
            <Accordion defaultActiveKey="0" fluid>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Films</Accordion.Header>
    <Accordion.Body>

      <SWfilms films={films}> </SWfilms>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Planetes</Accordion.Header>
    <Accordion.Body>
      
    <SWplanets planets={planets}/>

    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="3">
    <Accordion.Header>Personnages</Accordion.Header>
    <Accordion.Body>
      
      <SWperso perso={perso}/>

    </Accordion.Body>
  </Accordion.Item>


</Accordion>
            
        
        </Container>
    
    );
};

export default Compagnies;