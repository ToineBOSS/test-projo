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
            <img className="ChuckN" src="./img/Chuck.gif" alt ="chuck"></img>
            <h2>{info}</h2>
            <button 
            type="button"
            onClick={() => {
                getInfo();
            }}
            ></button>
        </div>
    );
};

export default Chuck;