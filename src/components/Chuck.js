import React , {useState}from 'react';
import axios from 'axios';
import "../pages/Accueil.css";

const Chuck = () => {
    const [info, setInfo] = useState("");

    async function getInfo() {
        const urlAPI = "https://api.chucknorris.io/jokes/random"

        axios
        .request(urlAPI)
        .then((response) => setInfo(response.data.value))
        .catch((error) => console.log(error));
    }

    return (
        <div>
        
        <div className="ChuckN" >
            <h2> The Chuck BOX ! </h2>
            <img  src="./img/Chuck.gif" alt ="chuck"></img>
            <h2>{info}</h2>
            <div className="infoChuck">
            <button 
            className="ChuckBTN"
            type="button"
            onClick={() => {
                getInfo();
            }}
            > CLICK HERE TO CHUCK !</button>
            </div>
        </div>
        </div>
        
    );
};

export default Chuck;