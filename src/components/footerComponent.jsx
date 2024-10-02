import logo from "../assets/logo.png"

export default function Footer() {
    return (
        <footer className="footer-component__Wrapper">
            <img className="footer-component__Logo" alt="Logo du site Kasa" src={logo} />
            <p className="footer-component__Copyright">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}