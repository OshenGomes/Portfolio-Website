import "./Articles.css";

const Articles = ({img,link,desc,title,}) => {
    return (
        <div className="p2">
            <h2>{title}</h2>
            <div className="p-img-b">
                <img src={img} alt="" className="p-img" />
            </div>
            <p className="p-para">{desc}</p>
            <a href={link} target="_blank" rel="noreferrer">
                <button className="p-button2 p-button-shadow">Read More</button>
            </a>

        </div>
    );
};

export default Articles;