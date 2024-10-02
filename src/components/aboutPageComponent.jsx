import bannerImage from "../assets/banner-about.png";
import Collapse from "./collapseComponent.jsx";
import aboutList from "../back/aboutList.json"

export default function AboutPageComponent() {
    return (
            <div className="about-component">
                {/* balise de l'image de bannière en about-component__Banner */}
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