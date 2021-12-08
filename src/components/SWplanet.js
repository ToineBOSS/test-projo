import React from 'react';
import { Col } from 'react-bootstrap';


const StarWars = (props) => {
    return (
        <div>
            <ul>
            {props.planets.map((planets) => (
                <Col>
                    <h3>
                        {planets.name}
                    </h3>
                </Col>
            ))}
            
            </ul>
        </div>
    );
};

export default StarWars;