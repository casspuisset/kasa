import { useState } from "react";

export default function Collapse({title, content}) {
            const [isOpen, setIsOpen] = useState(false);
            const display = () => {setIsOpen(!isOpen)};    
    return (
                <div className="collapse-component__Wrapper">
                    <div className="collapse-component__Dropdown__Title">
                        <h2 onClick={display}>{title}</h2>
                            {/* {isOpen ? (
                                // <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
                            ) : (
                                // <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                            )} */}
                    </div>
                    { }
                    <div className="collapse-component__Dropdown__Content">
                        {isOpen && <p>{content}</p>}
                    </div>
                </div>
    )
}