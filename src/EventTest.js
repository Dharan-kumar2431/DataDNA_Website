import React, { useState } from "react";
import Eventsidebar from "./eventsidebar";
import "./eventmain.css";
import "./eventsidebar.css";
import Calendar from "react-calendar";
import Header from "./Header";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const eventcontent = [
  {
    title: "WEBINAR ON ARTIFICIAL INTELLIGENT",
    millisecond: "1638297000000",
    date: "01-12-2021",
    time: "12:00:00",
  },
  {
    title: "WEBINAR ON ARTIFICIAL",
    millisecond: "1639161000000",
    date: "11-12-2021",
    time: "14:24:10",
  },
  {
    title: "WEBINAR ON",
    millisecond: "1637692200000",
    date: "24-11-2021",
    time: "18:16:00",
  },
  {
    title: "WEBINAR",
    millisecond: "1638210600000",
    date: "30-11-2021",
    time: "20:23:00",
  },
  {
    title: "WEBINAR ON ARTIFICIAL INTELLIGENT",
    millisecond: "1638297000000",
    date: "01-12-2021",
    time: "16:00:00",
  },
];



// function Calender() {
//   return (
//     <div>
//       <p>hiiii</p>
//       {console.log()}
//       {/* { particularDate.map((data, index) => (
//                     <div key={index} className="row eventsstyle mt-3">
//                         <p className="col-6"><span className="eventsstyletext">Event:<br /></span>{data.title}</p>
//                         <p className="col-3"><span className="eventsstyletext">Events on<br /></span>{data.date}</p>
//                         <p className="col-3"><span className="eventsstyletext">Time:<br /></span>{data.time}</p>
//                     </div>
//                 ))} */}
//     </div>
//   );
// }



function EventTest() {
  const [display, setDisplay] = useState("default");
  const [datadisplay, setDataDisplay] = useState([]);
  const [isshowScedule, setIsshowScedule] = useState(false);


  function Default() {
    return (
      <div>
        <div className="mx-5">
          <img src="./assects/Calendar.png" alt="Image" className="imag" />
          <h4 className="schedulecontent mx-3">
            No scheduled events on this day
          </h4>
        </div>
      </div>
    );
  }
  

  const datepicker = (a) => {
    setDisplay("calender");
    console.log(a);
    let date = new Date(a);
    let datevalue = date.getTime();
    console.log(datevalue);
    const particularDate = eventcontent.filter(
      (value) => value.millisecond == datevalue
    );
    console.log(particularDate);
    setDataDisplay(particularDate);
  };

  const [isChecked, setIsChecked] = useState(false);

    const suggestionChecked = (val) => {
      setDisplay("suggested");
      setIsChecked(!isChecked);
        console.log(isChecked);
        setIsshowScedule(!isChecked);
    };


    function Suggested() {
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

 

  function Calender() {
    return (
      <div>
        { datadisplay.map((data, index) => (
                      <div key={index} className="row eventsstyle mt-3">
                          <p className="col-6"><span className="eventsstyletext">Event:<br /></span>{data.title}</p>
                          <p className="col-3"><span className="eventsstyletext">Events on<br /></span>{data.date}</p>
                          <p className="col-3"><span className="eventsstyletext">Time:<br /></span>{data.time}</p>
                      </div>
                  ))}
      </div>
    );
  }
  

  return (
    <div>
      {/* <Header /> */}
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
                                    <Nav.Link className="link" href="/Members"><Link to="/Members" className="testimonial">Members</Link></Nav.Link>
                                    <Nav.Link className="link" href="/eventmain">Events</Nav.Link>
                                    <Nav.Link className="link" href="/Testimonial"><Link to="/Testimonial" className="testimonial">Testimonials</Link></Nav.Link>
                                    <Nav.Link className="link" href="/forum">Forum</Nav.Link>
                                    <Nav.Link className="link" href="#contact">Contact</Nav.Link>


                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
      <div className="row container mt-3 ">
        <div className="col-4 mt-5 container">
          <div>
            <div className="sidebarmaindiv mt-5 mx-3">
              <div className="p-2">
                <div>
                  <a href="./eventmain" className="upcominglink">
                    Upcoming
                  </a>
                  <a href="./eventmain" className="pastlink">
                    Past
                  </a>
                </div>
                <div className="mt-3">
                  <input type="checkbox" />
                  <label className="mx-3">Attending</label>
                  <br />
                  <input type="checkbox" />
                  <label className="mx-3">From group you’ve joined</label>
                  <br />
                  <input type="checkbox" />
                  <label className="mx-3">Saved</label>
                  <br />
                  <input
                    type="checkbox"
                    id="suggestion"
                    onChange={suggestionChecked} checked={isChecked}
                  />
                  <label className="mx-3">Suggested</label>
                </div>
                {/* <Calendar className="my-5" onClickDay={(a) => (setDisplay("calender"))}/> */}
                <Calendar className="my-5" onClickDay={datepicker} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-7 events">
          <h2>YOUR EVENTS</h2>
          <small className="date">MONDAY,NOVEMBER </small>
          <hr className="lines" />
          {display === "default" ? (
            <Default />
          ) : display === "suggested" ? (
            <Suggested />
          ) : display === "calender" ? (
            <Calender />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default EventTest;
