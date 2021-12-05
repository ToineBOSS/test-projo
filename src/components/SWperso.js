import React from 'react';

const SWperso = (props) => {
    return (
        <div>
            <ul>
            {props.people.map((people) => (
                <Col>
                    <h3>
                        {poeple.name}
                    </h3>
                </Col>
            ))}
            
            </ul>
        </div>
    );
};

export default SWperso;