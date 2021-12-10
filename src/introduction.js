import './home.css';
import {Navbar,Nav,Container,Button,Col,Row,Image,Carousel,Card,Form,FloatingLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Heromotio from './images/Heromotio.gif';



function Introduction() {
    return(
        <div>

<div id="home">
<Container>
  <Row>
    <Col sm={12} md={12} lg={6}><h1 className="title">Empowering Growth With Real World.</h1> 
   <Button className="btn1" ><Link to="/JoinNow" className="join">Join Now</Link></Button>{' '}
    <Button className="btn2"><Link to="/Signin" className="join"> Sign In</Link></Button>{' '}</Col>
    <Col sm={12} md={12} lg={6}><Image className="img1" src={Heromotio} /></Col>
  </Row>
  
</Container>
</div>
        </div>
    );
}

export default Introduction;
