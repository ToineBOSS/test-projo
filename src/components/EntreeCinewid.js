import '../pages/Accueil.css'
import React , {useState}from 'react';
import Axios from 'axios';



const EntreeCineW = () => {

const addTolist = () => {
    Axios.post("http://localhost:3002/entrees/insert",
    {NbAnnee : NbAnnee ,
    NbTotEntrees: NbTotEntrees
    });

};
const[NbAnnee, setNbAnnee] = useState('')
const[NbTotEntrees, setNbTotEntrees] = useState(0);
return (
    
    <div className="Crud">
                <h1>CRUD</h1>
                <label>Année:</label>
                <input type="text" onChange={(event) => {setNbAnnee(event.target.value);}}
                    />
                <label>Nombre d'entrées:</label>
                <input type="number" onChange={(event) => {setNbTotEntrees(event.target.value);}}
                    />
                <button className="btn_crud" onClick={addTolist} >Ajouter a la liste </button>
                
    </div>

)};

export default EntreeCineW;