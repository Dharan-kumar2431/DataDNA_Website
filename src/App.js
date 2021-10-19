import Heromotio from './Heromotio.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container,Row,Col,Image,Button} from 'react-bootstrap';

function App() {
  
  return (
    <div className="App">
<div>
<Navbar expand="lg" className="nav" variant="dark">
  <Container>
    <Navbar.Brand href="#home">DataDNA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className="link" href="#courses">Courses</Nav.Link>
        <Nav.Link className="link" href="#about">About</Nav.Link>
        <Nav.Link className="link" href="#blog">Blog</Nav.Link>
        <Nav.Link className="link" href="#coach">Coaching Methodology</Nav.Link>
        <Nav.Link className="link" href="#members">Members</Nav.Link>
        <Nav.Link className="link" href="#events">Events</Nav.Link>
        <Nav.Link className="link" href="#testimonials">Testimonials</Nav.Link>
        <Nav.Link className="link" href="#forum">Forum</Nav.Link>
        <Nav.Link className="link" href="#contact">Contact</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
<div id="#home">
<Container>
  <Row>
    <Col sm={12} md={12} lg={6}><h1 className="title">Empowering Growth With Real World.</h1> 
   <Button className="btn1" >Join Now</Button>{' '}
    <Button className="btn2">Sign In</Button>{' '}</Col>
    <Col sm={12} md={12} lg={6}><Image className="img1" src={Heromotio} /></Col>
  </Row>
  
</Container>
</div>



    </div>
  );
}

export default App;
