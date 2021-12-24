
import './home.css';
import {Container,Button,Col,Row,Image,Form,FloatingLabel} from 'react-bootstrap';
import Iframe from 'react-iframe';
import address from './images/address.png';
import phone from './images/phone.png';
import facebook2 from './images/facebook2.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import gmail from './images/gmail.png';
import skype from './images/skype.png';

function Content() {
    return(
        <div>
            <div id="contact" >

<Container>
  <Row>
    <Col>
    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15562.571583491634!2d80.2220947!3d12.8016763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49b38c5db4767675!2sDataDNA!5e0!3m2!1sen!2sin!4v1636553711147!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" className="map"> </Iframe>
    </Col>
    <Col className="contact" style={{margin:'35px 0 0 0'}}>
    
    <h3 className="quick">Quick Contact</h3>
<Form className="contactpage">

  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingName" label="Name">
    <Form.Control type="name" placeholder="Name" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingNumber" label="Phone Number">
    <Form.Control type="phone" placeholder="Number" style={{margin:'15px 0 0 0'}} />
  </FloatingLabel>

  <FloatingLabel controlId="floatingTextarea1" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' ,margin:'15px 0 0 0'}}
    />
  </FloatingLabel>

  </Form>
  
  <Button variant="warning" className="btn4">Submit</Button>{' '}
    
    </Col>
  </Row>
  <Row >
    <Col className="address">
      <Image src={address} className="addressicon"></Image>
    <h5 className="addressheading">Address</h5>
    <p className="add">Apartment, ETA Star Rosedale, RRA 203, A Block, Chennai, Tamil Nadu 603103</p>
    
    </Col>
    <Col className="address" >
    <Image src={phone} className="phoneicon"></Image>
    <h5 className="phoneheading">Phone Number</h5>
    <p className="phone">+91 9840292498</p>
    </Col>
    <Col className="address2">
  <Image src={gmail} className="gmailicon"></Image><p className="gmail"> vijay@datadna.in </p>
  <Image src={skype} className="skypeicon"></Image> <p className="gmail"> vijayakeerthi09</p>
    </Col>
    <Col className="address">
    <h5 className="heading2">Social Media</h5>
    <Image src={facebook2}  className="facebook2"></Image>
    <Image src={instagram} className="instagram" ></Image>
    <Image src={twitter} className="twitter" ></Image>
    </Col>
  </Row>
</Container>
</div>
        </div>
    );
}


export default Content;