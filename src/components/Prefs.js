import React from 'react';
import "../pages/Accueil.css";
 

class Prefs extends React.Component {

render () {

    return (

<div className="plusTar">

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