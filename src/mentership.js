import './mentership.css';
import { Link } from "react-router-dom";



function Mentership() {
    return (
        <div>
            <div className="row container ">
                <div className="col-1">
                <Link to="/courses"><img className="backbutton" src="./assects/backbutton1.png" alt="" /></Link>
                </div>
                <div className="col-11">
                    <h2 className="chead">Program Details</h2>
                </div>
            </div>
            <div className="container">
            <h5 className="csubtopics m-4">DURATION</h5>
            <div className="row">
                <div className="col-1">
                    <img className="cimg" src="./assects/mimg2.png" alt="" />
                </div>
                <div className="col-11">
                    <ul>
                        <li>The program duration spans for a 6 month period</li>
                        <li>This also covers a Bridge-Course for Non-Technical Folks</li>
                        <li>Weekly Classes over Online Methodology will be delivered by the Industry Trainers</li>
                        <li>The Industry Trainers have practical knowledge in Projects rather than just theory</li>
                    </ul>
                </div>
            </div>
            <h5 className="csubtopics m-4">ELIGIBILITY</h5>
            <div className="row">
                <div className="col-1">
                    <img className="cimg" src="./assects/mimg3.png" alt="" />
                </div>
                <div className="col-11">
                    <ul>
                        <li>Bachelor’s Degree/Pre-Final students can apply for the program</li>
                        <li>Non-Technical Students who want to enter the field are welcome as we do have Bridge Sessions</li>
                        <li>Software Programming Experience/Interest is required</li>
                        <li>IT Professionals who want to do their Career Transition can also apply</li>
                    </ul>
                </div>
            </div>
            <h5 className="csubtopics m-4">TIME & COMMITMENT</h5>
            <div className="row">
                <div className="col-1">
                    <img className="cimg" src="./assects/mimg4.png" alt="" />
                </div>
                <div className="col-11">
                    <ul>
                        <li>Our recommended learning time is 15 hours a week</li>
                        <li>Those hours can be split as follows:</li>
                        <li>Assignment works</li>
                        <li>Practice Case Study</li>
                        <li>Reading Materials</li>
                        <li>This excludes our training sessions </li>

                    </ul>
                </div>
            </div>

            </div>

        </div>
    );
}

export default Mentership;
