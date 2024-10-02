import { Link } from "react-router-dom";
import Card from "./cardComponent";
import back from "../back/back.json";

export default function HomePageComponent() {
    
    return (
        <div className="home-component__Wrapper">
      {back.map((article) => {
        return (
          <article key={article.id}>
            <Link to={`/logement/${article.id}`}>
              <Card title={article.title} cover={article.cover}  />
              <p>Ceci est une carte</p>
            </Link>
          </article>
        );
      })}
        </div>
    )
}