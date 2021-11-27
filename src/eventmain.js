import './eventmain.css';
import Eventsidebar from './eventsidebar';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Row, Card, Col } from "react-bootstrap";




function Eventmain(){
    return(
        <div className="container">
            <div className="header">
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
                                    <Nav.Link className="link" href="#events">Events</Nav.Link>
                                    <Nav.Link className="link" href="#testimonials"><Link to="/Testimonial" className="testimonial">Testimonials</Link></Nav.Link>
                                    <Nav.Link className="link" href="#forum">Forum</Nav.Link>
                                    <Nav.Link className="link" href="#contact">Contact</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            <div className="row container mt-5 ">
                <div className="col-4 mt-5">
                <Eventsidebar/>
                </div>
                <div className="col-7 events">
                    <h2>YOUR EVENTS</h2>
                    <small className="date">MONDAY,NOVEMBER </small>
                    <hr className="lines" />
                    <div className="mx-5">
                    <img src="./assects/Calendar.png" alt="Image" className="imag" />
                    <h4 className="schedulecontent mx-3">No scheduled events on this day</h4>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Eventmain;