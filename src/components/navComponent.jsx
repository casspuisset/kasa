import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavComponent() {
  const location = useLocation();
  const { pathname } = location;

  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);

useEffect(() => {
    // if (location.pathname === "/") {
    //   setHomeActive(!homeActive);
    // } else if (location.pathname === "/about") {
    //     setAboutActive(!aboutActive);
    // }
})

  return (
    <nav className="nav-header">
      <Link
        to="/"
        className="nav-header__Link"
        // {homeActive ? "nav-header__Active-link" : "nav-header__Link"}
      >
        Accueil
      </Link>

      <Link
        to="/about"
        className="nav-header__Link"
        // aboutActive ? "nav-header__Active-link" : "nav-header__Link"}
      >
        A propos
      </Link>
    </nav>
  );
}
