import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navi.css";

function Navi() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav" onClick={toggleMenu}>
      <div className="nav__logo">
        <a href="/">YUMOVIE</a>
      </div>
      <ul className="nav__menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top">Top Movie</Link>
        </li>
        <li>
          <Link to="/romance">Romance</Link>
        </li>
        <li>
          <Link to="/thriller">Thriller</Link>
        </li>
        <li>
          <Link to="/animation">Animation</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navi;
