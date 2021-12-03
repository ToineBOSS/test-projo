import React, {useState} from 'react';
import '../pages/Accueil.css';

const Meteo = () => {
    
    const cleApi = '1f0e1e6fc642de9c2a57b66875e7e085'
    const [meteoData, setmeteoDatas] = useState([])
    const [ville,setVille] =useState("")
    const getMeteo = (event) => {
        if(event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=imperial&APPID=${cleApi}`)
            //https://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=1f0e1e6fc642de9c2a57b66875e7e085
            .then(response => response.json())
            .then(data => {
                setmeteoDatas(data)
                setVille("")
            })
        }
    }

    return (
        <div className="Meteo-Box">
            <h3> Meteo BOX ! </h3>
            <p> Look if you should go to the cinema...</p>
            <input 
            className="chercheT" 
            placeholder="put your city here..."
            onChange={e => setVille(e.target.value)}
            value={ville}
            onKeyPress={getMeteo}
            ></input>
            
            {typeof meteoData.main === 'undefined' ?(
                <div>
                    <p1>search</p1>
                </div>
    ): (
                <div>
                    <p className="p2"> {meteoData.name}</p>
                    <p className="p3"> {Math.round(((meteoData.main.temp-32)/1.8))} °C </p>
                    <p className="p3">{meteoData.weather[0].main}</p>
                    <p>{ShouldIGo(meteoData.weather[0].main)}</p>
                </div>
            )}

        </div>
    );
    
};



function ShouldIGo(weatherz)
{
    if(weatherz=='Thunderstorm'){
        return (
            <p>You should stay home</p>)
        }

    if(weatherz=='Clear'){
        return (<p>You should go outside !</p>)
    }
    

    else{
        return (
        <p>You should go to the cinema !</p>)
    }
}



export default Meteo;
