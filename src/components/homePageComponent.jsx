import { Link } from "react-router-dom";
import Card from "./cardComponent";
import back from "../back/back.json";
import Banner from "./bannerComponent";
import ImageToTake from "../assets/banner-home.png";
import { useState } from "react";

export default function HomePageComponent() {
  const [showItems, setItems] = useState(6);

  const showMore = () => {
    setItems(showItems < back.length ? showItems + 6 : showItems);
  };

  return (
    <div class="home-component">
      <div>
        <Banner
          image={ImageToTake}
          texte="Chez vous, partout et ailleurs"
          page="Home"
        />
      </div>
      <div className="home-component__Main">
        <div className="home-component__Main__Gallery">
          {back.slice(0, showItems).map((article) => {
            return (
              <Link
                to={`/logement/${article.id}`}
                className="home-component__Main__Gallery__Card"
              >
                <article key={article.id}>
                  <Card title={article.title} cover={article.cover} />
                </article>
              </Link>
            );
          })}
        </div>
        {showItems < back.length && (
          <button className="home-component__Main__Button" onClick={showMore}>
            Plus de logements
          </button>
        )}
      </div>
    </div>
  );
}
