import { Link } from 'react-router-dom'
import navComponent from '../navComponent/navComponent'
 
export default function Header() {
    return (
        <header className="nav-component">
            <navComponent className="nav_header" />
        </header>
    )
}