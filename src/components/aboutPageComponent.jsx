import bannerImage from "../assets/banner-about.png";
import Collapse from "./collapseComponent.jsx";
import aboutList from "../back/aboutList.json"
import Banner from "./bannerComponent.jsx";

export default function AboutPageComponent() {
    return (
            <div className="about-component">
                <Banner image={bannerImage} texte=""/>
                <div className="about-component__Collapse">
                  <div className="about-component__Collapse__Dropdown">
                    {aboutList.map((about) => {
                      return (
                        <div key={about.id}>
                          <Collapse content={about.content} title={about.title} />
                        </div>
                      );
                    })}
                  </div>
                </div>
            </div>
          );
}