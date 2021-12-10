import './home.css';
import {Navbar,Nav,Container,Button,Col,Row,Image,Carousel,Card,Form,FloatingLabel} from 'react-bootstrap';
import group from './images/group.png';
import online from './images/online.png';
import individual from './images/individual.png';


function Coaching() {
    return(
        <div>
            <div id="coach">
<h2 className="coach">Coaching Methodology</h2>
<Container>
  <Row>
    <Col>
    
    <Card className="methodology"  >
      <h5 className="coach1">Online</h5>
  <Image src={online} className="online"></Image>
  <Card.Body className="coaching" >
   
    <Card.Text>
     <p>As part of Online Consultation, I will be having a Skype call with the candidates to understand their Goals, Preparation Strategy & Practical Challenges. Based on experience , I will be recommending a road map towards the goal.</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card className="methodology"   >
      <h5 className="coach1">Individual Consulting</h5>
  <Image src={individual} className="online"></Image>
  <Card.Body className="coaching" >
   
    <Card.Text>
     <p>I would also love to do In-Person consulting for candidates who want to meet me directly & provide their information, goals & preparation steps. I can also let you know the current trends towards Data Science & how one should equip himself on this.</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>

    <Col>
    <Card className="methodology"  >
      <h5 className="coach1"> Project Groups</h5>
  <Image src={group} className="online"></Image>
  <Card.Body className="coaching" >
   
    <Card.Text>
     <p>Peer learning is one of the key parameters in any field. The more you learn from others, the more you succeed sooner. I will be setting out learning groups based on their experience, goals, project works.This ensures one learns more in a shorter time with proper collaboration.</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>

</div>
        </div>
    );
}


export default Coaching;