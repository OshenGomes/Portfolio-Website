import "./ArticlesList.css";
import { ArticlesData } from "../../ArticlesData";
import Articles from "../articles/Articles";

const ProductList = () => {
    return (
        <div className="pl2">
            <div className="pl-texts">
                <h1 className="pl-title2">Blogs</h1>
                <p className="pl-desc">
                    Lama is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {ArticlesData.map((item) => (
                    <Articles key={item.id} title={item.title} img={item.img} link={item.link} desc={item.desc}   />
                ))}
            </div>
        </div>
    );
};

export default ProductList;