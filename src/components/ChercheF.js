import React from 'react';

const ChercheF = (props) => {
    return (
        <div className="col col-sm-4">
            <input 
            className="form-control" 
            value={props.value}
            onChange={(event)=> props.setchercheVal(event.target.value)}
            placeholder="Cherche un film..."></input>
        </div>
    );
};

export default ChercheF;