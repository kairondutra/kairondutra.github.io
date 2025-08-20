// Em: src/components/Navbar/Navbar.js

import React, { useState } from 'react'; // 1. Importa o useState
import { FaBars, FaTimes } from 'react-icons/fa'; // 2. Importa os ícones
import './Navbar.css';

function Navbar() {
    // 3. Cria um estado para saber se o menu está aberto ou não
    const [isOpen, setIsOpen] = useState(false);

    // 4. Função para alternar o estado (abrir/fechar)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home">Kairon Dutra</a>
            </div>

            {/* 5. A lista de links agora tem uma classe dinâmica */}
            <ul className={isOpen ? 'navbar-links active' : 'navbar-links'}>
                <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Habilidades</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
            </ul>

            {/* 6. Ícone do menu que aparece no celular */}
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
}

export default Navbar;