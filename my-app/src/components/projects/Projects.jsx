import "./Project.css";

const Projects = ({img,link,desc,title,tec}) => {
    return (
        <div className="p">
            <h2>{title}</h2>
            <div className="p-img-b">
                <img src={img} alt="" className="p-img" />
            </div>
            <p className="p-para">{desc}</p>
            <p className="p-para">{tec}</p>
            <a href={link} target="_blank" rel="noreferrer">
                <button className="p-button p-button-shadow">View Source Code</button>
            </a>

        </div>
    );
};

export default Projects;