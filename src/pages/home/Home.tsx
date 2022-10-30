import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {

    return (
        <div className="home-container">
            <div className="title-container">
                <p className="title-upper">Welcome to <span className="span">Entertainment</span><span className="mark">!</span></p>
                <p className="title-lower">Please choose a game:</p>
            </div>
            <div className="link-container">
                <Link to="/countries"><button className="countries">Countries quiz</button></Link>
                <Link to="/reaction"><button className="reaction-button">Reaction time</button></Link>
                <button className="home-button">Home</button>
            </div>
            <div className="main-container"></div>
        </div>
    );
};

export default Home;
