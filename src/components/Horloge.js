import React, {useEffect,useState} from 'react';

const Horloge = () => {

    const [heure,setHeure] = useState(new Date());

    useEffect(()=> {
    let interval = setInterval(()=> setHeure(new Date()),1000 )
    return () => clearInterval(interval); 
    
}, []); 
    return (
        <div>

            <h3>{heure.toLocaleTimeString()}</h3>
            <h3>{Hourforcine(heure) }</h3>

        </div>
    );
};

function Hourforcine(heurez)
{
    if(7<=heurez.getHours() & heurez.getHours()<=20){
        return (<p>Time to go to the cinema ! </p>)
    } else {
        return (<p>Time to sleep !</p>)
    }
}
export default Horloge;