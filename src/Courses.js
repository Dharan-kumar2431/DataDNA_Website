import { Component } from "react";
import { Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Courses.css';

import Header from "./Header";



const cardarry = [
    { title: "INDUSTRY ORIENTED CURRICULUM", src: "./assects/card1.png", href: "/curriculum" },
    { title: "INTERNSHIP", src: "./assects/card2.png", href: "/internship" },
    { title: "MENTORSHIP", src: "./assects/card3.png", href: "/mentership" },
    { title: "ONLINE LEARNING", src: "./assects/card4.png", href: "/certification" },
    { title: "CERTIFICATION", src: "./assects/card5.png", href: "/certification" },
    { title: "PROGRAM DESIGN", src: "./assects/card6.png", href: "/programdetails" },]
class Courses extends Component {

    render() {
        return (
            <div>
                <Header className="headerbar"/>
                {/* <div className="header">
                    <Navbar expand="lg" className="nav navbar-form " variant="dark" fixed="top">
                        <Container>
                            <Navbar.Brand href="/" >DataDNA</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link className="link" href="#about">About</Nav.Link>
                                    <Nav.Link className="link" href="/courses">Courses</Nav.Link>
                                    <Nav.Link className="link" href="#blog">Blog</Nav.Link>
                                    <Nav.Link className="link" href="#coach">Coaching Methodology</Nav.Link>
                                    <Nav.Link className="link" href="#members"><Link to="/Members" className="testimonial">Members</Link></Nav.Link>
                                    <Nav.Link className="link" href="/eventmain">Events</Nav.Link>
                                    <Nav.Link className="link" href="#testimonials"><Link to="/Testimonial" className="testimonial">Testimonials</Link></Nav.Link>
                                    <Nav.Link className="link" href="/forum">Forum</Nav.Link>
                                    <Nav.Link className="link" href="#contact">Contact</Nav.Link>


                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div> */}

               <div className="container">
               <div className="mt-5">
               <Row xs={1} md={3} className="g-6">
                    {cardarry.map((res, idx) => (
                        <Col key={idx} onClick={this.changeStateValue} >
                            <Card className="cardsstyle">
                                <Card.Img variant="top" src={res.src} />
                                <Card.Body>
                                    <Card.Title className="cardtitle">{res.title}</Card.Title>
                                    <Card.Text className="cardlinktext">
                                        <Link to={res.href} className="cardlink">View Information</Link>
                                        {/* <Card.Link href={res.href} className="cardlink">View Information</Card.Link> */}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
               </div>
            </div>
               </div>
        )
    }
}

export default Courses;