import vector_left from "../assets/vector_left.png"
import vector_right from "../assets/vector_right.png"
import { useState } from "react";

export default function Carousel({ slides }) {

    const [currentSlide, setCurrent] = useState(0);
    const arrayLength = slides.length;

    const next = () => {
        setCurrent(currentSlide === arrayLength - 1 ? 0 : currentSlide + 1);
    };
    const prev = () => {
        setCurrent(currentSlide === 0 ? arrayLength - 1 : currentSlide - 1);
    };

    return (
        <div className="carousel">

            {/* cursors */}

            {arrayLength > 1 && (
                <img src={vector_left} alt="Image précédente" onClick={prev} className="carousel__Left " />
            )}
            {arrayLength > 1 && (
                <img src={vector_right} alt="Image suivante" onClick={next} className="carousel__Right" />
            )}

            {/* Images */}

            {slides.map((logementImage, index) => (
                <div key={index} className="carousel__Slide">
                    {index === currentSlide && <img src={logementImage} alt="appartement à louer" />}
                    {index === currentSlide && (

                        <span className="carousel__Slide__Number">
                            {currentSlide + 1}/{arrayLength}
                        </span>

                    )}
                </div>
            ))}
        </div>
    );
}