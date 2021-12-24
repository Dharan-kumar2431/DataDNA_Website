import './certification.css';
import { Link } from "react-router-dom";



function Certification() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-1">
                <Link to="/courses"><img className="backbutton" src="./assects/backbutton1.png" alt="" /></Link>
                </div>
                <div className="col-11">
                <h2 className="chead">Post Completion Advantages</h2>
                </div>
            </div>
            <h5 className="csubtopics m-4">NETWORKING EVENTS</h5>
            <div className="row">
                <div className="col-1">
                    <img className="cimg" src="./assects/cfimg1.png" alt="" />
                </div>
                <div className="col-11">
                    <ul>
                        <li>Our average experience of Cohort is more than 10 Years of Professional Experience</li>
                        <li>The Cohort ensures a varied set of professionals who can cross-help each other</li>
                        <li>Peer Networking at different Levels ensures better learning & access to Top Opportunities</li>
                    </ul>
                </div>
            </div>
            <h5 className="csubtopics m-4">FREE DATA SCIENCE ARTICLES</h5>
            <div className="row">
                <div className="col-1">
                    <img className="cimg" src="./assects/cfimg2.png" alt="" />
                </div>
                <div className="col-11">
                    <ul>
                        <li>Apart from Regular Curriculum we will be posting updates on the Industry happenings</li>
                        <li>Sharing of Job Analysis, Reports to encourage people to accelerate more towards the field</li>
                        <li>Concepts Sharing & Tech Articles on different spectrums help to gain better insights</li>
                    </ul>
                </div>
            </div>
            <h5 className="csubtopics m-4">JOBS UPDATE</h5>
            <div className="row">
                <div className="col-1">
                    <img className="cimg" src="./assects/cfimg3.png" alt="" />
                </div>
                <div className="col-11">
                    <ul>
                        <li>We will be posting different Opportunities to Learners depending on the requirements & fit</li>
                        <li>These Opportunities will be open to apply for anyone who has better fitment towards the role</li>
                        <li>We will also help in Resume Preparations & Interview sessions</li>
                    </ul>
                </div>
            </div>
            <h5 className="csubtopics m-4">COURSE ACCESS</h5>
            <div className="row">
                <div className="col-1">
                    <img className="cimg" src="./assects/cfimg4.png" alt="" />
                </div>
                <div className="col-11">
                    <ul>
                        <li>The Course content will be shared with the participants after every session</li>
                        <li>The Participants can use the LMS to Download the assignment/Content/Materials</li>
                        <li>Participants will be assessed in the same LMS Platform so that they can track their performance</li>
                    </ul>
                </div>
            </div>
            <h5 className="csubtopics m-4">EDUCATIONAL NEWSLETTERS</h5>
            <div className="row">
                <div className="col-1">
                    <img className="cimg" src="./assects/cfimg5.png" alt="" />
                </div>
                <div className="col-11">
                    <ul>
                        <li>Our newsletter Program enhances learner’s exposure beyond Data Science Spectrum</li>
                        <li>Weekly engagement on knowledge sharing by experts provides Global Touch</li>
                        <li>Participants will also be allowed to share their views</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Certification;
