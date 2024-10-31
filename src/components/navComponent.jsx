import { Link } from 'react-router-dom'

export default function NavComponent() {
    return (
        <nav className="nav-header">
            <Link to="/" className="nav-header__Link">Accueil</Link>
            <Link to="/about" className="nav-header__Link">A propos</Link>
        </nav>
    )
}