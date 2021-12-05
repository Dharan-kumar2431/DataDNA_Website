import './curriculum.css';
import { Link } from "react-router-dom";
import Header from './Header';



function Curriculum() {
    return (
        <div>
            <Header/>
            <div>
            <div className="row container">
                <div className="col-1">
                <a><Link to="/courses"><img className="backbutton" src="./assects/backbutton1.png" /></Link></a>
                </div>
                <div className="col-11">
                <h2 className="chead">Industry Oriented Curriculum</h2>
                </div>
            </div>
           <div>
           <div className="mx-5">
           <h5 className="csubtopics m-4">INTRODUCTION</h5>
            <img className="cimg" src="./assects/cirriculum1.png" />
            <p className="ptext">Data Science Introduction Life Cycle of Data Science Agile Methodology in Data Science</p>
            <h5 className="csubtopics m-4">BASICS OF STATISTICS</h5>
            <img className="cimg" src="./assects/cirriculum2.png" />
            <p className="ptext">Exploratory Data Analysis Normal Distribution Skewness & Kurtosis 5 Point Summary Analysis
            </p>
            <h5 className="csubtopics m-4">DATA PROCESSING</h5>
            <img className="cimg" src="./assects/cirriculum3.png" />
            <p className="ptext">Exploratory Data Analysis Normal Distribution Skewness & Kurtosis 5 Point Summary Analysis
            </p>
            <h5 className="csubtopics m-4">BRIDGE COURSE</h5>
            <img className="cimg" src="./assects/cirriculum4.png" />
            <p className="ptext">PIP, ANACONDA, JUPYTER CLASSES & FUNCTIONS STRINGS, ARRAYS, LISTS Dictionaries, Tuples , Dataframes
            Pandas & Numpy Practicals Exception Handling Loops & Decision Making File Handling & Directories
            </p>
            <h5 className="csubtopics m-4">FEATURE ENGINEERING</h5>
            <img className="cimg" src="./assects/cirriculum5.png" />
            <p className="ptext">Feature Creation Feature Selection Correlation Information Gain GINI Index
            Chi Square  LASSO RFE Feature Reduction Principal Component Analysis Singular Vector Decomposition 
            </p>
           </div>
           </div>

            </div>
        </div>
    );
}

export default Curriculum;
