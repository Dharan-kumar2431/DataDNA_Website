import React from "react";
import './Header.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link} from 'react-router-dom';
// import { NavLink } from "react-router-dom";


function Header() {
    return (
        <div className="App">
            <div>
                <Navbar expand="lg" className="nav" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to="/" className="homebut">DataDNA</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link className="link" href="/courses">Courses</Nav.Link>
                                <Nav.Link className="link" href="http://localhost:3000/#about">About</Nav.Link>
                                <Nav.Link className="link" href="/blog">Blog</Nav.Link>
                                <Nav.Link className="link" href="http://localhost:3000/#coach">Coaching Methodology</Nav.Link>
                                <Nav.Link className="link" href="/Members">Members</Nav.Link>
                                <Nav.Link className="link" href="/eventmain">Events</Nav.Link>
                                <Nav.Link className="link" href="/Testimonial">Testimonials</Nav.Link>
                                <Nav.Link className="link" href="/forum">Forum</Nav.Link>
                                <Nav.Link className="link" href="http://localhost:3000/#contact">Contact</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Header;