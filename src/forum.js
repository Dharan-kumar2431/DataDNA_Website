import './forum.css';
import {Card, Container,Row,Col,Image} from 'react-bootstrap';
import girl from './images/girl.png';
import boy from './images/boy.jpg';
import comment from './images/comment.png';
import heart from './images/heart.png';

function Forum() {
    return(
<div>
    <h2 className="forum-head">Forum</h2>
    <h4 className="forum-sub">Welcome! Have a look around and join the discussions.</h4>

    <div>
    <Card className="card-forum">
  <Card.Body className="card-body"><h5>General discussion</h5>
  <h6>share stories,ideas,pictures and more !</h6>
  </Card.Body>
  <h6 className="follow">FOLLOW</h6>
</Card>

<Card className="card-forum">
  <Card.Body className="card-body"><h5>Education Articles</h5>
  <h6>What’s this category about? Tell visitors ....</h6></Card.Body>
  <h6 className="follow">FOLLOW</h6>
</Card>

<Card className="card-forum">
  <Card.Body className="card-body"><h5>Jobs</h5>
  <h6>What’s this category about? Tell visitors ....</h6></Card.Body>
  <h6 className="follow">FOLLOW</h6>
</Card>
    </div>

    <div>
        <h6 className="forum-post">New posts</h6>
        
      <Container>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }} className="forum-post2">
  <Card.Img variant="top" src={girl} className="forum-image1"/>
  
    <Card.Title className="forum-title">Monica
      <h6 className="date">Oct 21, 2020</h6>
    </Card.Title>
    <Card.Text className="forumcard-text">
    Data engineering speacialist company...
    <p className="forum-job">JOBS</p>
    <p>Roles and responsibility...</p>
   
    </Card.Text>
    
    <hr></hr>
    <Image src={comment} className="comment"></Image>
    <Image src={heart} className="heart"></Image>
    
</Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }} className="forum-post3">
  <Card.Img variant="top" src={boy}  className="forum-image2"/>
  
    <Card.Title className="forum-title">Ram Krishnan
      <h6  className="date">Oct 22, 2020</h6>
    </Card.Title>
    <Card.Text className="forumcard-text">
    Data engineering speacialist company...
    <p className="forum-job">JOBS</p>
    <p>Roles and responsibility...</p>

    </Card.Text>
    <hr></hr>
    <Image src={comment} className="comment"></Image>
    <Image src={heart} className="heart"></Image>
    
</Card>
          </Col>
        </Row>
      </Container>

    </div>
</div>
    );
}


export default Forum;