import {Navbar,Nav,Container,Button,Col,Row,Image,Carousel,Card} from 'react-bootstrap';
import './home.css';
import Heromotio from './images/Heromotio.gif';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import online from './images/online.png';
import individual from './images/individual.png';
import group from './images/group.png';
import {Link} from 'react-router-dom';
import React from 'react';



function Home(){
    return(
        <div >
       <div className="header">
<Navbar expand="lg" className="nav navbar-form " variant="dark" fixed="top">
  <Container>
    <Navbar.Brand href="#home" >DataDNA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className="link" href="#about">About</Nav.Link>
        <Nav.Link className="link" href="#courses">Courses</Nav.Link>
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



<div id="about">

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
     <Image src={card1} className="myapproach"></Image>
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
     <Image src={card2} className="myvision"></Image>
    </Col>
  </Row>
  </Container>
  </Carousel.Item>
  
</Carousel>

</div>
<hr></hr>
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

export default Home;