import { NavLink } from "react-router-dom";

export default function ErrorPageComponent() {
    return (
        <>
            <div className="error-page-wrapper">
                <h1 className="error-page-wrapper__Title">
                    404
                </h1>
                <p className="error-page-wrapper__Description">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink to="/" className="error-page-wrapper__Link">
                    Retourner sur la page d'accueil
                </NavLink>
            </div>
        </>
    )
}