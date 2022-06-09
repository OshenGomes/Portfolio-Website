import "./About.css";
import Award from "../../img/me.jpeg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={Award}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">
                    A self-learned, passionate individual, currently a third-year undergraduate in Software Engineer from Sri Lanka Institute of Information technology (SLIIT). My objective is to work for an organization
                    which provide the opportunity to improve my knowledge, skills and
                    gain more experience while growing along with the organizational
                    objectives and taking the organization to excellence
                </p>
            </div>
        </div>
    );
};

export default About;