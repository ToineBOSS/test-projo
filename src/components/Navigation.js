import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Accueil from '../pages/Accueil';
import News from '../pages/News';
import Meteo from '../pages/Meteo';
import Erreur from '../pages/Erreur';
import Spots from '../pages/Spots';
import Classements from '../pages/Classements';


const Navigation = () => {
    return (
        <Router>
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to={"/"}>Toni&Theo Surfing</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/"} >Accueil</Nav.Link>
        <Nav.Link as={Link} to={"/meteo"}>Météo</Nav.Link>
        <Nav.Link as={Link} to={"/news"}>News</Nav.Link>
        <Nav.Link as={Link} to={"/spots"}>Spots</Nav.Link>
        <NavDropdown title="Classements" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={"/classements"}>Monde</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/classements"}>France</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://www.facebook.com/antoine.petit.182/">JSpquoi</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        <div>
            <Routes>
            <Route path = "/" exact element ={<Accueil/>}></Route>
          <Route path = "/news" exact element= {<News/>}> </Route>
          <Route path = "/meteo" exact element= {<Meteo/>}> </Route>
          <Route path = "/spots" exact element= {<Spots/>}> </Route>
          <Route path = "/classements" exact element= {<Classements/>}> </Route>
          <Route element = {<Erreur/>}></Route> 
            </Routes>
        </div>
        </Router>
    );
};

export default Navigation;