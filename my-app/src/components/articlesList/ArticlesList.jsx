import "./ArticlesList.css";
import { ArticlesData } from "../../ArticlesData";
import Articles from "../articles/Articles";

const ProductList = () => {
    return (
        <div className="pl2">
            <div className="pl2-texts">
                <p>_________________________________________________________________________________________________________________________</p>
                <h1 className="pl2-title2">BLOGS</h1>
                <p className="pl2-desc">

                </p>
            </div>
            <div className="pl2-list">
                {ArticlesData.map((item) => (
                    <Articles key={item.id} title={item.title} img={item.img} link={item.link} desc={item.desc}   />
                ))}
            </div>
        </div>
    );
};

export default ProductList;