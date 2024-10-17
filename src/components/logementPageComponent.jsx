import back from "../back/back.json";
import { useParams } from "react-router-dom";
import Carousel from "./carouselComponent";
import Rate from "./rateComponent";
import Tag from "./tagsComponent";
import Collapse from "./collapseComponent";


export default function LogementPageComponent() {

    const params = useParams();
    const currentLogement = back.find((logement) => logement.id === params.id)
    const tagsList = currentLogement.tags;
    const equipmentsList = currentLogement.equipments.map((equipment) => {
        return (
            <p> {equipment} </p>
        )
    })


    return (
        <div className="logement-page">

            <Carousel pictures={currentLogement.pictures} />

            <section className="logement-page__Presentation">
                <div className="logement-page__Presentation__Logement">
                    <h1 className="logement-page__Presentation__Logement__Title">
                        {currentLogement.title}
                    </h1>
                    <p className="logement-page__Presentation__Logement__Location">
                        {currentLogement.location}
                    </p>
                </div>
                <div className="logement-page__Presentation__Host">
                    <p className="logement-page__Presentation__Host__Name">
                        {currentLogement.host.name}
                    </p>
                    <img
                        className="logement-page__Presentation__Host__Picture"
                        src={currentLogement.host.picture}
                        alt={currentLogement.host.name}
                    />
                </div>
                <div className="logement-page__Presentation__Other">
                    <div className="logement-page__Presentation__Other__Tag">
                        {tagsList.map((tag) => (
                            <Tag tags={tag} />
                        ))}
                    </div>
                    <Rate rating={currentLogement.rating} className="logement-page__Presentation__Other__Rate"/>
                </div>
            </section>


            <section className="logement-page__Collapse">
                <Collapse title="Description" content={currentLogement.description} />
                <Collapse title="Équipements" content={equipmentsList} />
            </section>

        </div>

    )
}
