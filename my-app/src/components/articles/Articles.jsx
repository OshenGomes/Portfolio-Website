import "./Articles.css";

const Articles = ({img,link,desc,title,}) => {
    return (
        <div className="p2">
            <h2>{title}</h2>
            <div className="p2-img-b">
                <img src={img} alt="" className="p2-img" />
            </div>
            <p className="p2-para">{desc}</p>
            <a href={link} target="_blank" rel="noreferrer">
                <button className="p2-button2 p2-button-shadow">Read More</button>
            </a>

        </div>
    );
};

export default Articles;