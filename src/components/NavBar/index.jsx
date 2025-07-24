import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navBar__container">
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleBurger} aria-label="Ouvrir le menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navBar ${isOpen ? "open" : ""}`}>
        <Link to="/">Accueil</Link>
        <a href="#about">À propos</a>
        <a href="#projects">Mes projets</a>
        <a href="#competences">Mes compétences</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;
