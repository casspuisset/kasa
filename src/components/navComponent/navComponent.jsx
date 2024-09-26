import { Link } from 'react-router-dom'


export default function navComponent() {
    return (
        <nav className="nav-header">
            <Link to="/" className="nav-header__home-page">Accueil</Link>
            <Link to="/about" className="nav-header__about-page">A propos</Link>
        </nav>
    )
}