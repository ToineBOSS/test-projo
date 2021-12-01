import React from 'react';
import '../pages/Accueil.css';


/**
 * <KidsMovie
 *  name = {"avengers"}
 *  afficheUrl = {"http..."}
 *  vote_average = {"8"}
 *  overview = {"..."}
 * />
 */
class KidsMovie extends React.Component{

    render() {
        return(
            
                <div className="movie">
                    <img src= {this.props.afficheUrl} alt={this.props.title}>
                    </img>

                    <div className="movie-info">
                        <h3>{this.props.name} </h3>
                        <span class={this.getColor(this.props.vote_average)}>{this.props.vote_average} </span>
                    </div>

                    <div className="overview">
                        {this.props.overview}
                    </div>
                </div>
            
        )
    }
    
    getColor(vote){
        if(vote>=8){
            return 'green'}
        if(vote>=5){
                return 'orange'}
        else{
            return 'red'
        }
    }

}
export default KidsMovie;