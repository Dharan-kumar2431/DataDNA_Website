import './signin.css';
import { Link } from "react-router-dom";
import {Navbar,Nav,Container} from 'react-bootstrap';



function Signin() {
    return (
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
            <div className="row mt-5">
                <div className="col-6">
                    <img className="imagestyle" src="./assects/signin.png" alt="" />
                </div>
                <div className="col-6">
                    <h1 className="heading">Sign in</h1>
                    <form>
                        <input type="text" className="emailinput" placeholder="Email address or phone number" />
                        <input type="password" className="passwordinput" placeholder="Password" />
                        <p className="forgotpass">Forgot password?</p>
                        <button className="btn btn-primary signinbut" type="button">Sign In</button>
                    </form>
                    <hr className="line mt-4" />
                    <div className="mt-3 logos">
                        <Link to="#"><img className="facebooklogo" src="./assects/facebooklogo.png" alt="" /></Link>
                        <Link to="#"><img className="googlelogo" src="./assects/google.png" alt="" /></Link>
                        <Link to="#"><img className="linkedin" src="./assects/linkedin1.png" alt="" /></Link>
                    </div>
                    <p className="signupbtn mt-4">Don’t have an account?<Link to="#" className="signuplink"> Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signin;