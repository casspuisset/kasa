import { Link } from "react-router-dom";
import Card from "./cardComponent";
import back from "../back/back.json";
import Banner from "./bannerComponent";
import ImageToTake from "../assets/banner-home.png";

export default function HomePageComponent() {
  return (
    <div class="home-component">
      <div>
        <Banner image={ImageToTake} texte='Chez vous, partout et ailleurs' page='Home'/>
      </div>
      <div className="home-component__Gallery">
        {back.map((article) => {
          return (
            <Link to={`/logement/${article.id}`} className="home-component__Gallery__Card">
              <article key={article.id}>
                <Card title={article.title} cover={article.cover} />
                <p>{article.title}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  )
}