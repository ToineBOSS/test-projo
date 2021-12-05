import { Link } from 'react-router-dom';
import '../index.css';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Accueil from '../pages/Accueil';
import News from '../pages/News';
import Erreur from '../pages/Erreur';
import StarWarZ from '../pages/StarWarZ';
import Classements from '../pages/Classements';
import '../pages/Accueil.css';
import Filmz from '../pages/Filmz';
import KidsMovies from '../pages/KidsMovies';


const Navigation = () => {
    return (
        <Router>
        <div>
            
            <Navbar bg="dark" expand="lg" variant="dark"> 
            
  <Container>

    
    <Navbar.Brand as={Link} to={"/"} >
       
         TT MOVIES</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/actus"}>Actus</Nav.Link>
        <Nav.Link as={Link} to={"/kids"}>Kids</Nav.Link>
        <Nav.Link as={Link} to={"/films"}>Films</Nav.Link>
        <Nav.Link as={Link} to={"/starwars"}>Star Wars</Nav.Link>
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
          <Route path = "/kids" exact element= {<KidsMovies/>}> </Route>
          <Route path = "/films" exact element= {<Filmz/>}> </Route>
          <Route path = "/starwars" exact element= {<StarWarZ/>}> </Route>
          <Route path = "/classements" exact element= {<Classements/>}> </Route>
          <Route element = {<Erreur/>}/>
            </Routes>
        </div>
        </Router>
    );
};

export default Navigation;