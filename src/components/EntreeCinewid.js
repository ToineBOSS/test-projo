import '../pages/Accueil.css'
import React , {useState, useEffect}from 'react';
import Axios from 'axios';
import {Row, Col, Container} from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
                
    

    <label>Liste des données</label>
{AnneeList.map((val,key) => {
    return (
       <Container> 
         
       <Col>
           
        <h2> Année : {val.NbAnnee} </h2> 
        
        
        </Col>

<Col><h2> Entrées : {val.NbTotEntrees} </h2> {""}</Col>
<br/> 


    </Container>
    )
}
)
}
    </div>
</div>

)};

export default EntreeCineW;