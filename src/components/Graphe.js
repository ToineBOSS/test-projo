import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    

  {
    name: '2007',
    Entrées : 178,
    
  },{
    name: '2008',
    Entrées : 190,
  
  },
  {
    name: '2009',
    Entrées : 201,
    
  },{
    name: '2010',
    Entrées : 207,
   
  },{
    name: '2011',
    Entrées : 217,
   
  },{
    name: '2012',
    Entrées : 203,
    
  },{
    name: '2013',
    Entrées : 193,
    
  },{
    name: '2014',
    Entrées : 209,
    
  },
    {
      name: '2015',
      Entrées : 205,
    
    },
    {
      name: '2016',
      Entrées : 213,
      
    },
    {
      name: '2017',
      Entrées : 209,
      
    },
    {
      name: '2018',
      Entrées : 201,
      
    },
    {
      name: '2019',
      Entrées : 213,
    },
    {
      name: '2020',
      Entrées : 65,
    },
  ];
  
export default function Graphe() {
  

    
        return (
          <div>
            <p className="titreG">Nombres d'entrées au Cinéma en France depuis 2007 (en millions)</p>
          
          <ResponsiveContainer width="100%" aspect={2}>
            
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Entrées" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
          </div>
        );
      }
    
