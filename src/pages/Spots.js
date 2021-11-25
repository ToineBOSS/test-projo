import React from 'react';
import { Container } from 'react-bootstrap';
import Carouseel from '../components/Carouseel';
const Spots = () => {
    return (
        <Container>
        <div>
        <div class="row">
        <div class="col-sm-12">
            <h1>Voila Quelques spots les plus connus du monde du surf </h1>
        </div>
        <div class="col-sm-7">
            <h1>Quand on parle de Surf plusieurs idées de spots viennent direct !</h1>
            <p> Mais quels sont les spots les plus connus dans le monde et meme en France ?</p>
        </div>
        <div class="col-sm-5"></div>
        </div>
            <Carouseel/>
            
        </div>
        
        </Container>
    
    );
};

export default Spots;