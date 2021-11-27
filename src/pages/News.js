import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Meteo from '../components/Meteo';



const News = () => {
    return (
        <Container>
        
        <Meteo/>
        <div>
           
            <h1>Les news du jour !</h1>
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

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Social">
    <p>Voila nos réseaux sociaux :) n'hesites pas a nous contacter</p>
    
  </Tab>
  <Tab eventKey="profile" title="Visit">
    <p>Merci pour votre visite laissez nous votre contact :)</p>
  </Tab>
  <Tab eventKey="contact" title="Contact" >
    
  </Tab>
</Tabs>
        </Container>
    );
};

export default News;