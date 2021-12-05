import './eventmain.css';
import Eventsidebar from './eventsidebar';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Header from './Header';


const eventcontent = [
    { title: "WEBINAR ON ARTIFICIAL INTELLIGENT", millisecond: "1638297000000", date: "01-12-2021", time: "12:00:00" },
    { title: "WEBINAR ON ARTIFICIAL", millisecond: "1639161000000", date: "11-12-2021", time: "14:24:10" },
    { title: "WEBINAR ON", millisecond: "1637692200000", date: "24-11-2021", time: "18:16:00" },
    { title: "WEBINAR", millisecond: "1638210600000", date: "30-11-2021", time: "20:23:00" },
    { title: "WEBINAR ON ARTIFICIAL INTELLIGENT", millisecond: "1638297000000", date: "01-12-2021", time: "16:00:00" },
];

const particularDate = [];


function Eventmain() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isshowScedule, setIsshowScedule] = useState(false);



    const changeDate = val => {
        setSelectedDate(val);
        let date = new Date(val);
        let datevalue = date.getTime();
        console.log(datevalue);
        const particularDate = eventcontent.filter(value => value.millisecond == datevalue);
        console.log(particularDate);
        // dateValues();  
    }

    const suggestionValue = val => {
        setIsshowScedule(val);
        console.log(val)
        changeVal();
    }

    // const dateValues = () => {
    //     return(
    //         <div>
    //          {particularDate.map((data, index) => (
    //                 <div key={index} className="row eventsstyle mt-3">
    //                     <p className="col-6"><span className="eventsstyletext">Event:<br /></span>{data.title}</p>
    //                     <p className="col-3"><span className="eventsstyletext">Events on<br /></span>{data.date}</p>
    //                     <p className="col-3"><span className="eventsstyletext">Time:<br /></span>{data.time}</p>
    //                 </div>
    //             ))}   
    //         </div>
    //     )
    // }
 

    const changeVal = () => {
        return eventcontent.length > 0 && isshowScedule ?

            <div>
                {eventcontent.map((data, index) => (
                    <div key={index} className="row eventsstyle mt-3">
                        <p className="col-6"><span className="eventsstyletext">Event:<br /></span>{data.title}</p>
                        <p className="col-3"><span className="eventsstyletext">Events on<br /></span>{data.date}</p>
                        <p className="col-3"><span className="eventsstyletext">Time:<br /></span>{data.time}</p>
                    </div>
                ))}
            </div> :
            <div className="mx-5">
                <img src="./assects/Calendar.png" alt="Image" className="imag" />
                <h4 className="schedulecontent mx-3">No scheduled events on this day</h4>
            </div>
    }

    return (
        <div>
            <Header/>
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
                                <Nav.Link className="link" href="#events">Events</Nav.Link>
                                <Nav.Link className="link" href="#testimonials"><Link to="/Testimonial" className="testimonial">Testimonials</Link></Nav.Link>
                                <Nav.Link className="link" href="#forum">Forum</Nav.Link>
                                <Nav.Link className="link" href="#contact">Contact</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div> */}
            <div className="container">
            <div className="row container">
                <div className="col-4 mt-5">
                    <Eventsidebar changeDate={changeDate} suggestionValue={suggestionValue} />
                </div>
                <div className="col-7 events">
                    <h2>YOUR EVENTS</h2>
                    <small className="date">MONDAY,NOVEMBER </small>
                    <hr className="lines" />
                    {
                        changeVal()
                    }
                    {/* {
                        dateValues()
                    } */}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Eventmain;