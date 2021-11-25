import React, {useState, useEffect
} from 'react';
import axios from 'axios';

const Weather = () => {
    
    const [data, setData] = useState([]);
    
    const lat = 58.7984;
const lng = 17.8081;
const params = 'windSpeed';

useEffect(() => {
    axios.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': '3fdc12ae-4950-11ec-8218-0242ac130002-3fdc1380-4950-11ec-8218-0242ac130002'
  }
}).then((response) => setData(response.data));

  console.log(data);
    
}, []);


    return (
        <div></div>
        /*<div className="temps">
            <ul className="temps-list">
                {data.map((mete)=> (
                <li>{mete.windSpeed}</li>))}
            </ul>
           
        </div> */
    );
};

export default Weather;