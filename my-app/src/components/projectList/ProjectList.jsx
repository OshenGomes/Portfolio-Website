import "./ProjectList.css";
import Project from "../projects/Projects";
import { projectsData } from "../../ProjectsData";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects What i have done</h1>
                <p className="pl-desc">
                    Lama is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {projectsData.map((item) => (
                    <Project key={item.id} title={item.title} img={item.img} link={item.link} desc={item.desc} tec={item.tec}  />
                ))}
            </div>
        </div>
    );
};

export default ProductList;