import vector_up from "../assets/vector_up.png";
import vector_down from "../assets/vector_down.png";
import { useState } from "react";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-component">
      {/* va falloir remanier l'agencement des div pour que la sélection concerne toute la barre */}
      <div className="collapse-component__Title" onClick={display}>
        <h2>{title}</h2>
        <img
          src={vector_up}
          alt="Déplier"
          className={
            isOpen
              ? "collapse-component__Title__Icon down"
              : "collapse-component__Title__Icon"
          }
        />
      </div>
      <div
        className={
          isOpen
            ? "collapse-component__Content dropdown"
            : "collapse-component__Content"
        }
      >
        <p>{content}</p>
      </div>
    </div>
  );
}
