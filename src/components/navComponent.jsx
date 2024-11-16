import { NavLink } from "react-router-dom";

export default function NavComponent() {
  return (
    <nav className="nav-header">
      <NavLink
        to="/"
        className="nav-header__Link"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Accueil
      </NavLink>

      <NavLink
        to="/about"
        className="nav-header__Link"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "",
        })}
      >
        A propos
      </NavLink>
    </nav>
  );
}
