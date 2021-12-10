import './home.css';
import crd1 from './images/crd1.png';
import crd2 from './images/crd2.png';
import {Navbar,Nav,Container,Button,Col,Row,Image,Carousel,Card,Form,FloatingLabel} from 'react-bootstrap';



function About() {
    return(
        <div>
            <div>

<Carousel className="carousel" >
  <Carousel.Item interval={3000}>
    
    
      <h2 className="about">About</h2>
      <h5 className="abtcontent">Our motivation lies in delivering innovations and flexible consultancy services that are beneficial and bore fruitful results in practical lives to our end clients. Our firm strongly believes in the significance of data-based understanding & its impact on the business through various tools & technology stacks.
Our trainers corporate experience brings in Real-Time exposure which will be
passed on to the learners as well. Our company primarily focuses on the firm belief of self-education through a gamut of training programs. We are certified in Machine Learning & Azure cloud so that we can train our learners on Industry needs & tailor-made courses for their requirements.
DATADNA has worked with clients across North America, Australia, UAE & UK.
We have successfully delivered Projects in Data Science & AI Space collaboratively & remote team has been a culture which we practiced even before the covid times. We have trained so far, many professionals & received positive responses. In addition, we partnered with Government of India – National Cyber Safety & Security Standards to conduct ‘AI in Cyber security Workshop’ recently.</h5>
   
  </Carousel.Item>

  <Carousel.Item interval={3000}>
  <Container>
  <Row>
    <Col lg={6}>
    <Card style={{ width: '25rem' }} className="card" >
  <Card.Body>
    <h1 className="card1">Our Approach</h1>
    
    <Card.Text className="cardtxt1">
      

<p>My Method is a straight-forward approach</p>
<p>1. Sit with Candidates to understand them</p>
<p>2. Understand their Challenges</p>
<p>3.  Encourage them for their Career</p>
<p>4.  Devise a Strategy around them</p>
<p>5.  Evaluate the Candidates</p>
<p>6.  Be part of their success journey</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
    <Col lg={6}>
     <Image src={crd1} className="myapproach"></Image>
    </Col>
  </Row>
  </Container>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
  <Container>
  <Row>
    <Col lg={6}>
    <Card style={{ width: '25rem' }} className="card" >
  <Card.Body className="cardbody">
    <h1 className="card2">Our Vision</h1>
    
    <Card.Text className="cardtxt2">
      

<p>As a Data Science Professional,
I want to pass on my experience,
learning and challenges to future 
Data Scientists to create impact
on the implementations.</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
    <Col lg={6}>
     <Image src={crd2} className="myvision"></Image>
    </Col>
  </Row>
  </Container>
  </Carousel.Item>
  
</Carousel>

</div>
<hr/>

        </div>
    );
}

export default About;