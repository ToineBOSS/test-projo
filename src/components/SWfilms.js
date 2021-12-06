import React from 'react';
import { Col } from 'react-bootstrap';


const SWfilms = (props) => {
    return (
        <div>
            <ul>
            {props.films.map((films) => (
                <Col>
                    <h3>
                        {films.title}
                    </h3>
                    <h4>
                        {films.opening_crawl}
                    </h4>
                </Col>
            ))}
            
            </ul>
        </div>
    );
};

export default SWfilms;