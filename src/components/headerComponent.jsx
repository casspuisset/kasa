import NavComponent from "./navComponent";
import logo from "../assets/logo.png"

export default function Header() {
    return (
        <header className="header-component">
            <img className="header-component__Logo" alt="Logo du site Kasa" src={logo}/>
            <NavComponent className="header-component__Nav" />
        </header>
    )
}