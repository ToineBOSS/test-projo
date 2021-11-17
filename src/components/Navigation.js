import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';


const Navigation = () => {
    return (
        <nav>
        <div className = "navig">
            <NavLink exact to = "/" className= "men">
                Accueil    
            </NavLink>
            <NavLink exact to ="/meteo" className="men">
                Meteo
            </NavLink>
            <NavLink exact to = "/news" className="men">
                News
            </NavLink>      
        </div>
            <div className = "btn"> <img src="./img/menu1.png"></img> </div>
        </nav>
    );
};

export default Navigation;