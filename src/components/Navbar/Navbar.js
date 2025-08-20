import React, { useState } from 'react'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home">Kairon Dutra</a>
            </div>

            <ul className={isOpen ? 'navbar-links active' : 'navbar-links'}>
                <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Habilidades</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
            </ul>

            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
}

export default Navbar;