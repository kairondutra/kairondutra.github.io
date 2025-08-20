import React from 'react';
import './Header.css';

function Header() {
    return (
        <header id="home" className="header">
            <div className="header-content">
                <h1 className="header-title">KAIRON DUTRA</h1>
                <p className="header-subtitle">Desenvolvedor de Software</p>
                <p className="header-description">
                    Transformando ideias em código e interfaces intuitivas.
                </p>
                <div className="header-buttons">
                    <a href="#projects" className="btn btn-primary">Meus Projetos</a>
                    <a href="#contact" className="btn btn-secondary">Contato</a>
                </div>
            </div>
        </header>
    );
}

export default Header;