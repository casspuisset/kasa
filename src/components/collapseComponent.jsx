import vector_up from "../assets/vector_up.png";
import vector_down from "../assets/vector_down.png";
import { useState } from "react";

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const display = () => { setIsOpen(!isOpen) };
    return (
        <div className="collapse-component">
            {/* va falloir remanier l'agencement des div pour que la sélection concerne toute la barre */}
            <div className="collapse-component__Dropdown__Title"> 
                <h2 onClick={display}>{title}
                    {isOpen ? (
                        <img src={vector_down} alt="Replier" className="collapse-component__Dropdown__Title__Icon" />
                    ) : (
                        <img src={vector_up} alt="Déplier" className="collapse-component__Dropdown__Title__Icon" />
                    )}
                </h2>
            </div>
            { }
            <div className="collapse-component__Dropdown__Content">
                {isOpen && <p>{content}</p>}
            </div>
        </div>
    )
}