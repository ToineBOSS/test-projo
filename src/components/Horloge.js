import React, {useEffect,useState} from 'react';
import "../pages/Accueil.css";

const Horloge = () => {

    const [heure,setHeure] = useState(new Date());

    useEffect(()=> {
    let interval = setInterval(()=> setHeure(new Date()),1000 )
    return () => clearInterval(interval); 
    
}, []); 
    return (
        <div>
        <div className="Meteobox">
            <h1>Time BOX!</h1>
            <h3 className="h">{heure.toLocaleTimeString()}</h3>
            <h4 className="h">{Hourforcine(heure) }</h4>

        </div>
        </div>
    );
};

function Hourforcine(heurez)
{
    if(7<=heurez.getHours() & heurez.getHours()<=20){
        return (<p >Time to go to the cinema ! </p>)
    } else {
        return (<p>Time to sleep !</p>)
    }
}
export default Horloge;