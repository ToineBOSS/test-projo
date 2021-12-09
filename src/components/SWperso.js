import React from 'react';
import { Col } from 'react-bootstrap';

const SWperso = (props) => {
    return (
        <div>
            <ul>
            {props.perso.map((perso) => (
                <Col>
                    <h3>
                        {perso.name}
                    </h3>
                </Col>
            ))}
            
            </ul>
        </div>
    );
};

export default SWperso;