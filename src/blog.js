import "./blog.css";
import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import slider1 from "./images/slide-image1.png";
import slider2 from "./images/slide-image2.png";
import slider3 from "./images/slide-image3.png";
import heart from "./images/heart1.png";
import profile1 from "./images/profile1.png";
import profile2 from "./images/profile2.png";
import profile3 from "./images/profile3.png";
import Header from "./Header";


function Blog() {
  return (
    <div >
      {/* header format */}
      {/* <Header/> */}

      <div class="header">
        <input type="search" class="search-box" placeholder="Search" />
        <button type="button" class="all-post"></button>
        <label class="Heading">ALL POSTS</label>
        <button type="text" class="cloud-computing"></button>
        <label class="cloud-heading">CLOUD COMPUTING</label>
        <button type="text" class="Machine-learning"></button>
        <label class="machine-heading">MACHINE LEARNING</label>
        <button type="text" class="Neural-networks"></button>
        <label class="neural-heading">NEURAL NETWORKS</label>
        <button type="text" class="IOT"></button>
        <label class="IOT-heading">INTERNET OF THINGS</label>
        <button type="text" class="others"></button>
        <label class="others-heading">OTHERS</label>
      </div>
      {/* carousel slider */}
      <div>
        <div className="maindiv">
        <Carousel className="slider">
          {/* <Carousel.Item className="image1">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={slider1}
                      alt="First slide"
                    />
                    <Col classname="text1">
                    <h1>Pragnya</h1>
                    </Col>
                  </div>
                <div className="col-6">
                </div>
              </div>  
        </Carousel.Item> */}
          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <img src={slider1} alt="Second slide" className="image1" />
                </Col>
                <Col className="text2">
                  <div className="contentBox">
                    <div className="mt-5 mx-3">
                      <img src={profile1} alt=""className="Profile1" />
                      <h6 className="user mx-3">Dharan kumar</h6>
                    </div>
                    <h3 className="contenttext mt-2 ">Cloud computing</h3>
                    <h3 className="card-Heading">INTRODUCTION</h3>
                    <p className="detailed">
                        In 2011, National Institute of Standards and Technology
                      (NIST) defined cloud computing as a model for enabling
                      ubiquitous, convenient, on-demand network access....
                    </p>
                    <hr className="mt-5" />
                    <div className="row">
                      <div className="col-3"> 41 views</div>
                      <div className="col-3">0 comments</div>
                      <div className="col-6">
                        <img
                          src={heart}
                          alt="Second slide"
                          className=" likeimg"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <img src={slider2} alt="Second slide" className="image2" />
                </Col>
                <Col className="text2">
                  <div className="contentBox mt-3 mx-3">
                    <div className="mt-5 mx-3">
                      <img src={profile2} alt="" className="Profile1" />
                      <h6 className="user mx-3">Pragnya</h6>
                    </div>
                    <h3 className="contenttext mt-2 ">Supervised and
                     Unsupervised Machine learning</h3>
                    <h3 className="card-Heading">Supervised-</h3>
                    <p className="detailed">
                    The process of an algorithm learning from the training dataset can be thought of as a teacher supervising the learning process....
                    </p>
                    <hr className="mt-5" />
                    <div className="row">
                      <div className="col-3"> 41 views</div>
                      <div className="col-3">0 comments</div>
                      <div className="col-6">
                        <img
                          src={heart}
                          alt="Second slide"
                          className=" likeimg"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <img src={slider3} alt="Second slide" className="image3" />
                </Col>
                <Col className="text2">
                  <div className="contentBox mt-4 mx-4">
                        <div className="mt-5 mx-3">
                      <img src={profile3} alt=""  className="Profile1" />
                      <h6 className="user mx-3">Kamalesh</h6>
                    </div>
                    <h3 className="contenttext mt-2 ">The Problem, Short term Memory</h3>
                    <h3 className="card-Heading">Recurrent Neural Networks that We discussed  earlier suffer from two problems :</h3>
                    <p className="detailed">
                    1. Recurrent Neural Networks that We discussed  earlier suffer from Short term memory......
                    </p>
                    <hr className="mt-5" />
                    <div className="row">
                      <div className="col-3"> 41 views</div>
                      <div className="col-3">0 comments</div>
                      <div className="col-6">
                        <img
                          src={heart}
                          alt="Second slide"
                          className=" likeimg"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          {/* <Carousel.Item className="image3">
          <Container>
            <Row>
              <Col>
          <img
            src={slider3}
            alt="Third slide"
          />
          </Col>
          <Col className="text3">
            <h1>Dharan kumar</h1>
          </Col>
          </Row>
          </Container>
        </Carousel.Item> */}
        </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Blog;