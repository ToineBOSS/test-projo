import '../pages/Accueil.css'
import React , {useState, useEffect}from 'react';
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
const[AnneeList, setAnneeList] = useState([]);
useEffect(()=> {

    Axios.get("http://localhost:3002/entrees").then((response) => {
        setAnneeList(response.data);
    });
},[]
);

return (
    <div>
    <div className="Crud">
                <div className="CRUDTITLE">ADMIN MODE</div>
                <label>Année:</label>
                <input type="text" onChange={(event) => {setNbAnnee(event.target.value);}}
                    />
                <label>Nombre d'entrées:</label>
                <input type="number" onChange={(event) => {setNbTotEntrees(event.target.value);}}
                    />
                <button className="btn_crud" onClick={addTolist} >Ajouter a la liste </button>
                
    </div>

    <div className="Crud">Liste des données</div>
{AnneeList.map((val,key) => {
    return 
        
       <div>
        <h2> {val.NbAnnee} </h2><h2> {val.NbTotentree} </h2>
        </div>
        
}
)
}
</div>

)};

export default EntreeCineW;