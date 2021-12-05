import './internship.css';
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";




function Internship() {
    return (
        <div>
            <div className="row container">
                <div className="col-1 container">
                    <a><Link to="/courses"><img className="backbutton" src="./assects/backbutton1.png" /></Link></a>
                </div>
                <div className="col-11">
                    <h2 className="chead">Internship & Experiences</h2>
                </div>
            </div>
            <div className="container mt-4">
                <p>Our Internships are designed in such a way that candidates who learn data science also do enough practise to keep them
                    Industry-Ready.</p>
                <p>The Internships can be chosen according to the candidate's availability & in agreement with the company’s standards. Our
                    recommendation is that at-least 15 hours of effort per week is required to gain real-time experience.
                </p>

                <p>Internships not only focus on the technical aspects of Data Science but also on the Functional aspects such as
                    <ul className="mt-4">
                        <li>Product Management</li>
                        <li> Data Science Life Cycle</li>
                        <li> Productionalizing Data Science Algorithms</li>
                    </ul>
                </p>
                <div className="row container cardmaindiv mb-5">
                    <div className="col-6 cardmaindiv">
                        <Card className="cardstyle" border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="text-center cardtit">Top Internship Projects</Card.Title>
                                <Card.Text className="mt-4 cardtex">
                                    <ul>
                                        <li>Stock Market Prediction</li>
                                        <li>Booking Prediction - MaaS</li>
                                        <li>Disease Prediction using Genetic Data</li>
                                        <li>Malware Prediction Product</li>
                                        <li>Sales Prediction using ML</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6 cardmaindiv">
                        <Card className="cardstyle" border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="text-center cardtit">CAREER FUNNEL</Card.Title>
                                <Card.Text className="cardtit">
                                   <div className="row">
                                       <div className="col-4">
                                           
                                       </div>
                                       <div className="col-8">
                                       <ul>
                                        <li>Data Engineer</li>
                                        <li>Jr. Data Scientist</li>
                                        <li>Data Scientist</li>
                                        <li>Senior Data Scientist</li>
                                        <li>Principle Data Scientist</li>
                                    </ul>
                                       </div>
                                   </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Internship;
