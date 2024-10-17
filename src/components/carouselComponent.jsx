import vector_left from "../assets/vector_left.png"
import vector_right from "../assets/vector_right.png"
import { useState } from "react";

export default function Carousel({ pictures }) {

    const [currentPicture, setCurrent] = useState(0);
    const arrayLength = pictures.length;

    const next = () => {
        setCurrent(currentPicture === arrayLength - 1 ? 0 : currentPicture + 1);
    };
    const prev = () => {
        setCurrent(currentPicture === 0 ? arrayLength - 1 : currentPicture - 1);
    };

    return (
        <div className="carousel">

            {/* cursors */}

            {arrayLength > 1 && (
                <img src={vector_left} alt="Image précédente" onClick={prev} className="carousel__Button__Left " />
            )}
            {arrayLength > 1 && (
                <img src={vector_right} alt="Image suivante" onClick={next} className="carousel__Button__Right" />
            )}

            {/* Images */}

            {pictures.map((logementImage, index) => (
                <div key={index} className="carousel__Picture">
                    {index === currentPicture && <img src={logementImage} alt="appartement à louer" />}
                    {index === currentPicture && (

                        <span className="carousel__Picture__Number">
                            {currentPicture + 1}/{arrayLength}
                        </span>

                    )}
                </div>
            ))}
        </div>
    );
}