import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Erreur from './pages/Erreur';
import News from './pages/News';
import Meteo from './pages/Meteo';

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
          <Route path = "/" exact element ={<Accueil/>}></Route>
          <Route path = "/news" element= {<News/>}> </Route>
          <Route path = "/meteo" element= {<Meteo/>}> </Route>
          <Route element = {<Erreur/>}></Route> 
      </Routes>
      </Router>
    </div> 
  );
};

export default App;
