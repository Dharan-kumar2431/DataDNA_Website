import './programdetails.css';
import { Link } from "react-router-dom";




function Programdetails() {
    return (
        <div>
            <div className="row container">
                <div className="col-1">
                <Link to="/courses"><img className="backbutton" src="./assects/backbutton1.png " alt="" /></Link>
                </div>
                <div className="col-11">
                    <h2 className="chead">Program Design & Stratergy</h2>
                </div>
            </div>
            <div className="stepper d-flex flex-column mt-5  container">
                <div className="d-flex mb-1">
                    <div className="d-flex flex-column pr-4 align-items-center">
                        <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
                        <div className="line h-100"></div>
                    </div>
                    <div>
                        <h5 className="text-dark">LEARN</h5>
                        <p className="lead text-muted pb-3">Online Learning from the trainers enable higher level of understanding as its not pre-recorded.
                            While Learning Trainers run through the theoretical knowledge & also the practical code
                            part for the Machine learning algorithms</p>
                    </div>
                </div>
                <div className="d-flex mb-1">
                    <div className="d-flex flex-column pr-4 align-items-center">
                        <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
                        <div className="line h-100"></div>
                    </div>
                    <div>
                        <h5 className="text-dark">PRACTICE</h5>
                        <p className="lead text-muted pb-3">Practice assignments always help better understanding & answering interview questions as we
                            have designed them based on industry questions.
                            Capstone Projects guide students knowledge towards better implementation skills.
                            They are carefully designed considering the Industry Standards & expectations
                        </p>
                    </div>
                </div>
                <div className="d-flex mb-1">
                    <div className="d-flex flex-column pr-4 align-items-center">
                        <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
                        <div className="line h-100"></div>
                    </div>
                    <div>
                        <h5 className="text-dark">EXPERIENCE</h5>
                        <p className="lead text-muted pb-3">Internships offer Post-Learning experience which is very vital for any Organizational impact.
                            The internships also help in learning Soft skills such as Product Building & Project Management
                            While these internships run for 2-months & opted by students, they do not consume full-time
                            effort. It can be done Part-time with proper guidance as well. We offer a separate Internship
                            Certificate post successful completion
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programdetails;
