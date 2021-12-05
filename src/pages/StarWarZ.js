import React, {useState, useEffect} from 'react';
import { Container,Accordion } from 'react-bootstrap';
import SWplanets from "../components/SWplanet";




const Compagnies = () => {
    const [starwar  , setStarWars] = useState([]);
    const [planets,setPlanets] = useState([]);


    const getSW = async () => {
        const url = "https://swapi.dev/api/planets"
        
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.results){
        //console.log(responseJson);
        setPlanets(responseJson.results);}
    };

    useEffect(() => {
        getSW();
    }, [] );

    return (
        <Container>
            <Accordion defaultActiveKey="0" fluid>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Films</Accordion.Header>
    <Accordion.Body>
      <SWplanets planets={planets}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Planetes</Accordion.Header>
    <Accordion.Body>
      Wsh
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Especes</Accordion.Header>
    <Accordion.Body>
      Wsh
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Personnages</Accordion.Header>
    <Accordion.Body>
      Wsh
    </Accordion.Body>
  </Accordion.Item>


</Accordion>
            
        
        </Container>
    
    );
};

export default Compagnies;