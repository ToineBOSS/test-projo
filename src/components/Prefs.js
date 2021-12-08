import React from 'react';

 

class Prefs extends React.Component {

render () {

    return (

<div style={{backgroundColor: 'white'}}>

    Films à regarder plus tard : 

        <ul>    
    {this.props.prefs.map((movie, index) => (

    <li>{movie.Title}</li> 
))}
       </ul>
</div>
    );
}};

export default Prefs;