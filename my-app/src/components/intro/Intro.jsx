import "./Intro.css";
import Me from "../../img/me.png";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-intro">Hello, My name is</h1>
                    <h1 className="i-name">Oshen Gomes</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Undergraduate</div>
                            <div className="i-title-item">Fullstack Developer</div>
                            <div className="i-title-item">Blogger</div>
                            <div className="i-title-item">Tech Enthusiast</div>
                            <div className="i-title-item">Self Learner</div>
                        </div>
                    </div>
                    {/*<p className="i-desc">*/}
                    {/*    I design and develop services for customers of all sizes,*/}
                    {/*    specializing in creating stylish, modern websites, web services and*/}
                    {/*    online stores.*/}
                    {/*</p>*/}
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;