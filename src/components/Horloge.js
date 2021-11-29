import React, {useEffect,useState} from 'react';

const Horloge = () => {

    const [heure,setHeure] = useState(new Date());

    useEffect(()=> {
    let interval = setInterval(()=> setHeure(new Date()),1000 )
    return () => clearInterval(interval); 
    
}, []); 
    return (
        <div>

            <h1>{heure.toLocaleTimeString()}</h1>
            

        </div>
    );
};

export default Horloge;