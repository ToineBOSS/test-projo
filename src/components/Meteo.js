import React, {useState} from 'react';

const Meteo = () => {
    
    const cleApi = '1f0e1e6fc642de9c2a57b66875e7e085'
    const [meteoData, setmeteoDatas] = useState([])
    const [ville,setVille] =useState("")

    const getMeteo = (event) => {
        if(event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=imperial&APPID=${cleApi}`)
            .then(response => response.json())
            .then(data => {
                setmeteoDatas(data)
                setVille("")
            })
        }
    }

    return (
        <div className="container">
            <input 
            className="chercheT" 
            placeholder="cherche une ville..."
            onChange={e => setVille(e.target.value)}
            value={ville}
            onKeyPress={getMeteo}
            ></input>
            
            {typeof meteoData.main === 'undefined' ?(
                <div>
                    <p>Chercher </p>
                </div>
    ): (
                <div>
                    <p> {meteoData.name}</p>
                    <p> {(((meteoData.main.temp-32)/1.8))} °C</p>
                    <p> {meteoData.weather[0].main}</p>
                </div>
            )}

        </div>
    );
};

export default Meteo;