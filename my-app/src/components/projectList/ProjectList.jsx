import "./ProjectList.css";
import Project from "../projects/Projects";
import { projectsData } from "../../ProjectsData";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <p>_________________________________________________________________________________________________________________________</p>
                <h1 className="pl-title">PROJECTS</h1>
            </div>
            <div className="pl-list">
                {projectsData.map((item) => (
                    <Project key={item.id} title={item.title} img={item.img} link={item.link} desc={item.desc} tec={item.tec}  />
                ))}
            </div>
            <a href="https://github.com/OshenGomes"> <button className="pl2-button">See more</button></a>
        </div>
    );
};

export default ProductList;