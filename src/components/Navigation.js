import { Link, NavLink } from 'react-router-dom';
import '../index.css';
import { Navbar, Nav, NavDropdown, Container, Image,Col} from 'react-bootstrap'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Accueil from '../pages/Accueil';
import News from '../pages/News';
import Meteo from '../pages/Meteo';
import Erreur from '../pages/Erreur';
import Spots from '../pages/Spots';
import Classements from '../pages/Classements';
import '../pages/Accueil.css';


const Navigation = () => {
    return (
        <Router>
        <div>
            
            <Navbar bg="dark" expand="lg" variant="dark"> 
            
  <Container>

    
    <Navbar.Brand as={Link} to={"/"} >
       
        MOVIES</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/"} >Accueil</Nav.Link>
        <Nav.Link as={Link} to={"/actus"}>Actus</Nav.Link>
        <Nav.Link as={Link} to={"/films"}>Films</Nav.Link>
        <Nav.Link as={Link} to={"/acteurs"}>Acteurs</Nav.Link>
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
          <Route path = "/actus" exact element= {<News/>}> </Route>
          <Route path = "/films" exact element= {<Meteo/>}> </Route>
          <Route path = "/acteurs" exact element= {<Spots/>}> </Route>
          <Route path = "/classements" exact element= {<Classements/>}> </Route>
          <Route element = {<Erreur/>}/>
            </Routes>
        </div>
        </Router>
    );
};

export default Navigation;